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
[re-mote]λ: (go)
nil
```

The go function is defined in dev/user.clj file, it starts up all of our components by running setup and start:


```clojure
; Re-mote setup and start procedure
(defn setup []
  (k/create-server-keys ".curve")
  (repl/setup)
  (es/setup))

(defn start [_]
  (es/start)
  (web/start)
  (zero/start))

```

stop components by running:

```clojure
[re-mote]λ: (stop)
```

resets runs both stop and start in once go:

```clojure
[re-mote]λ: (reset)
```

Note:
 * When changing a single function its better to re-eval.
 * Resetting a broken ns will fail and you will need to restart the REPL so its a good idea to re-eval first.

## Re-core

Re-core enables us create and manage systems (VMs, physical hosts, containers) by using a fluent functional interface and presets like instance size, volumes and types: 

```clojure
; Create 5 small redis instances with a 128G Volumes
[re-core]λ: (create kvm-small vol-128G :redis 5)

Running create summary:

  ✔ redis-a12af7a0d2
  ✔ redis-d55950759f
  ✔ redis-a9347f072f
  ✔ redis-42bd6672e3
  ✔ redis-7165e5c87b
```

Once we have instances running we can list them:

```clojure
[re-core]λ: (list)
       redis-d55950759f  AWF_17ZSdVoDKuXB7mtt       redis     ubuntu-16.04  192.168.122.142
       redis-7165e5c87b  AWF_17bgdVoDKuXB7mt9       redis     ubuntu-16.04  192.168.122.209
       redis-a12af7a0d2  AWF_17X2dVoDKuXB7mtl       redis     ubuntu-16.04  192.168.122.147
       redis-42bd6672e3  AWF_17asdVoDKuXB7mt4       redis     ubuntu-16.04  192.168.122.196
       redis-a9347f072f  AWF_17aCdVoDKuXB7mt0       redis     ubuntu-16.04  192.168.122.14
```

Note: the second column contains unique auto generated ids (AWF_17..) that we can use to directly reference an instance.


The main workflows on VMs (systems in Re-core lingo) are found under src/re_core/repl.clj, we can operate on all running instances by running:

```clojure
[re-core]λ: (halt)

Running halt summary:

  ✔ redis-d55950759f
  ✔ redis-7165e5c87b
  ✔ redis-a12af7a0d2
  ✔ redis-42bd6672e3
  ✔ redis-a9347f072f

[re-core]λ: (start) ; start all

Running start summary:

  ✔ redis-d55950759f
  ✔ redis-7165e5c87b
  ✔ redis-a12af7a0d2
  ✔ redis-42bd6672e3
  ✔ redis-a9347f072f
```

All workflows take a filtering function, making it real easy to select the instances we operate on:

```clojure
[re-core]λ: (halt (by-type :redis))

Running halt summary:

  ✔ redis-d55950759f
  ✔ redis-7165e5c87b
  ✔ redis-a12af7a0d2
  ✔ redis-42bd6672e3
  ✔ redis-a9347f072f

[re-core]λ: (start (matching "B7mtt")) ; select instance by partial id matching (git style)

Running halt summary:

  ✔ redis-d55950759f

```


Note: 
* The default filtering function is ip which selects all the running instances (assumed to have an active ip addresset).
* Check Re-core [API](https://re-ops.github.io/re-core) for a detailed list of the available functions.

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

Bundled operations range from package management to zfs operations like scrub and even nmap port scanning.

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