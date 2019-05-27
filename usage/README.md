# Intro

In this section we will cover the basic workflows when using Re-mote and Re-core, there are a clear convention to both and they follow similar principles:

* Prefer the Use simple functions and protocols (also nice for auto completion and composability)
* Use Separate REPL instances for Re-mote and Re-core (tough Re-core uses Re-mote)
* Use an editor attached to each REPL and re eval changing code if possible
* When making large changes use the [Reloaded](#reloaded) workflow

## Reloaded
One of the nicest things that the REPLs provides is immediate feedback, it is also a live environment that can change code on the fly without a lengthy restart.

Each time we start our session we run:

```bash
$ lein repl
[re-core]λ: (go)
nil
```

The go function is defined in dev/user.clj file, it starts up all of our components by running setup and start:


```clojure
; Re-core setup and start functions
(defn start-
   "Starts the current development system."
   []
   (load-secrets "secrets" "/tmp/secrets.edn" "keys/secret.gpg")
   (conf/load-config)
   (setup-logging)
   (k/create-server-keys ".curve")
   (mount/start #'elastic #'zero #'queue #'workers #'riemann)
   (mote-es/initialize)
   (core-es/initialize))

(defn stop
   "Shuts down and destroys the current development system."
   []
   (sc/halt!)
   (mount/stop))

```

stop components by running:

```clojure
[re-core]λ: (stop)
```

resets runs both stop and start in once go:

```clojure
[re-core]λ: (reset)
```

An alternative to reset is refresh which reloads changed functions (and mount state):


```clojure
[re-core]λ: (refresh) ; or (refresh-all)
```


Note:
 * When changing a single function its better to re-eval it.
 * when changeing multiple functions use refresh/refresh-all.
 * Reset when you want to reload everthing and have a clean system state.
 * A compilation error can be fixed by running refresh (reset will not be available in that case).

## Re-core

Re-core enables us create and manage systems (VMs, physical hosts, containers) by using a fluent functional interface and presets like instance size, volumes and types:

```clojure
; create 5 c1-medium lxc instances using local node and defaults (user domain and os) using basic provisioning type
[re-core]λ: (create lxc local defaults c1-medium :basic 5)

Running create summary:

  ✔ basic-db1afab199
  ✔ basic-5024861c63
  ✔ basic-2a35a70112
  ✔ basic-5c4a9e91e4
  ✔ basic-03df18b640

```

Once we have instances running we can list them:

```clojure
[re-core]λ: (list)

id                    hostname          type    os               hypervisor  ip          
-----------------------------------------------------------------------------------------
_-1Y9moBhnW7y7Uhb5JD  basic-db1afab199  :basic  :ubuntu-18.04.2  :lxc        10.63.95.159
_u1Y9moBhnW7y7UhbpLo  basic-5024861c63  :basic  :ubuntu-18.04.2  :lxc        10.63.95.50 
AO1Y9moBhnW7y7Uhb5Nm  basic-2a35a70112  :basic  :ubuntu-18.04.2  :lxc        10.63.95.102
Ae1Y9moBhnW7y7Uhb5OE  basic-5c4a9e91e4  :basic  :ubuntu-18.04.2  :lxc        10.63.95.155
Au1Y9moBhnW7y7Uhb5Ob  basic-03df18b640  :basic  :ubuntu-18.04.2  :lxc        10.63.95.30 

```

Note: the first column contains unique auto generated ids (the elasticsearch system document id) that we can use to directly reference an instance.


The main workflows on systems (in Re-core lingo) are found under src/re_core/repl.clj, we can operate on all running instances by running:

```clojure
[re-core]λ: (halt)
#<Future@319b7be4 pending>

[re-core]λ:

Running halt summary:

  ✔ basic-db1afab199
  ✔ basic-5024861c63
  ✔ basic-2a35a70112
  ✔ basic-5c4a9e91e4
  ✔ basic-03df18b640

[re-core]λ: (start)
#<Future@36feaf62 pending>

[re-core]λ:

Running start summary:

  ✔ basic-db1afab199
  ✔ basic-5024861c63
  ✔ basic-5c4a9e91e4
  ✔ basic-2a35a70112
  ✔ basic-03df18b640

```

All workflows take a filtering function, making it real easy to select the instances we operate on:

```clojure
[re-core]λ: (halt (by-type :basic))

  ✔ basic-db1afab199
  ✔ basic-5024861c63
  ✔ basic-5c4a9e91e4
  ✔ basic-2a35a70112
  ✔ basic-03df18b640

Running halt summary:

[re-core]λ: (start (matching "5Nm")) ; select instance by partial id matching (ala git style)

Running halt summary:

  ✔ basic-2a35a70112

```


Note:
* The default filtering function is ip which selects all the running instances (assumed to have an active ip addresset).
* Check Re-core [API](https://re-ops.github.io/re-core) for a detailed list of the available functions.

### presets

Presets are functions that are used to speed up the creation process of new systems, they do that by reducing the boilerplate we have to type and by being easy to memorize, when we use the create function we pass in a number of preset functions that create the system structure for us:

```clojure
[re-core]λ: (create lxc local defaults c1-medium :basic 5)
```

The lxc var holds an empty system stub:

```
(def lxc {:lxc {} :machine {}})

```

Each preset function adds in more information to our stub for example local sets the system node to be localhost for both KVM and LXC instances:

```clojure
(defn node [n]
  (fn [instance] (assoc-in instance [(figure-virt instance) :node] n)))

(def local (node :localhost))

```

Last is c1-medium which is a member of a generated list of functions in the re-core.presets.instance-types namespace, these functions represents a collection of possible RAM and CPU size combinations (matching similar machine types in AWS):

```clojure
(def simple {:tiny {:cpu 1 :ram 0.5}
               :small {:cpu 2 :ram 1}
               :large {:cpu 4 :ram 4}
               :xlarge {:cpu 8 :ram 8}})

  ; based on https://github.com/dustinkirkland/instance-type/blob/master/yaml/aws.yaml
  (def aws {:c1-medium {:cpu 2 :ram 1.7}
            :c1-xlarge  {:cpu 8 :ram 7}
            :c3-2xlarge  {:cpu 8 :ram 15}
            :c3-4xlarge  {:cpu 16 :ram 30}
            ...
            )

```

For more please check the matching re-core [docs](https://re-ops.github.io/re-core/re-core.presets.common.html) section and the [source code](https://github.com/re-ops/re-core/tree/master/src/re_core/presets ).

## Re-mote

One of Re-mote main abstraction is the Hosts type:

```clojure
(def sandbox (Hosts. {:user "re-ops" :ssh-key "/home/foo/.ssh/id_rsa} ["192.168.2.28" "192.168.2.27"]))
```

It includes an authentication map (user and ssh key) and a list of hosts, protocols with different operations extend the Hosts type:

```clojure
; re-mote.repl.base
(defrecord Hosts [auth hosts]
  Shell
  (ls [this target flags]
    [this (run-hosts this (script ("ls" ~target ~flags)))])
```

Bundled operations range from package management to ZFS operations like scrub and even nmap port scanning.

Operations are used within pipelines:

```clojure
(defn listing [hs]
  (run (ls hs "/" "-la") | (pretty)))
```

Running a workflow is simple as calling a function:

```clojure
[re-mote]λ: (listing sandbox)

Run summary:

   ✔ 192.168.2.28
   ✔ 192.168.2.27
   ✔ 192.168.2.26

```

For a complete listing of workflows check Re-mote [API](https://re-ops.github.io/re-mote) documentation.

### Functions
Re-mote can invoke distributed Clojure functions using Re-gent processes across the cluster, the functions are defined under re_mote/zero/functions.clj:

```clojure
(ns re-mote.zero.functions
  (:require
   [clojure.java.shell :refer [sh]]
   [serializable.fn :as s]
   [me.raynes.fs :refer (list-dir tmpdir exists? file)]))


; Package manager
(def ^{:doc "update package manager"} pkg-update
  (s/fn []
    (case (os)
      :Ubuntu (sh "sudo" "apt" "update")
      :FreeBSD (sh "sudo" "pkg" "update")
      (throw (ex-info "not supported" {:os (os)})))))
```

Functions may use any bundled Clojure and Java libraries like:

* me.raynes.fs for file system manipulation
* com.github.oshi for collecting OS/Hardware information
* re-scan for running Nmap scans

Adding new libraries is pretty simple:

* Add the library to both re-gent/project.clj and re-mote/project.clj.
* Import the required ns/classes into re-mote.zero.functions and re-gent.zero.functions
* Build the re-gent binary using bin/binary.sh
* Deploy re-gent to the machines using the deploy workflow

# Scheduling

Invoking tasks in the REPL is easy but in some cases we would like to set a task to be executed at repeated short intervals (like collecting metrics):

```clojure
; collecting RAM, Network, Load anc Cpu usage
(defn stats-jobs [hs]
  (watch :ram (seconds 1)(fn [] (ram-persist hs)))
  (watch :net (seconds 2) (fn [] (net-persist hs)))
  (watch :cpu (seconds 2) (fn [] (cpu-persist hs)))
  (watch :load (seconds 1) (fn [] (load-persist hs))))
```

Another use case is executing long running tasks once a day:

```clojure
; running apt uprgrade on hosts every day at 4AM
(defn apt-jobs [hosts]
  (watch :upgrade (every-day 4) (fn [] (upgrade hosts))))

```

Or even once a week:

```clojure
; Running zfs scrub every Saturday at 4AM
(defn zfs-maintain [{:keys [hosts] :as hs}]
  (let [host (first hosts)]
    (watch (keyword (str host "-datastore-scrub")) (at-day DateTimeConstants/SATURDAY 4)
      (fn [] (run (scrub hs "datastore") | (email (tofrom (<< "scrubing ~{host}/datastore"))))))))
```

Its possible to automate any function call using the watch function including the creation of VMs or provisioning, check Re-share [docs](https://re-ops.github.io/re-share) for full API documentation.
