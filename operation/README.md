# Operation

In this section we will cover the basic workflows when using Re-mote and Re-core, you will find that there is a clear convention to both of them and the follow similar guidelines:

* Use simple functions and protocols where possible (also nice for auto completion and composability).
* Create separate REPL instance for Re-mote and one for Re-core.
* Use an editor attached to each REPL, when making changes use the [reloaded](operating/README.md#reloading) workflow or re-eval code (when possible).

## Reloaded
One of the nicest things the REPL gives us is immediate feedback, we enter a command and get feedback, but the REPL is also a live environment meaning that we can also change our code on the fly.

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

We can also stop our components by running:

```clojure
[re-mote]λ: (stop)
```

When making rapid changes its easier to stop and start in once go:

```clojure
[re-mote]λ: (reset)
```

Note: When changing a single function its better to re-eval it before running reset (reloading a broken ns will fail and you will need to restart the REPL).

## Re-core

In Re-core we create and manage systems (VM's, pyhsical hosts etc..), in order to create them we use a fluent functional interface that includes presets like instance size, volumes and types:

```clojure

[re-core]λ: (create kvm-small vol-128G :redis 5) ; Create 5 small redis instances with a 128G Volume

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

Note: the second column contains unique auto generated ids (AWF_17..).


The main workflows on VM's (systems in Re-core lingo) are found under src/re_core/repl.clj, we can operate on all running instances by running:

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

Wofkflows take a filtering function, making it real easy to select the instances we operate on:

```clojure
[re-core]λ: (halt (by-type :redis))

Running halt summary:

  ✔ redis-d55950759f
  ✔ redis-7165e5c87b
  ✔ redis-a12af7a0d2
  ✔ redis-42bd6672e3
  ✔ redis-a9347f072f

[re-core]λ: (start (matching "B7mtt")) ; select instance by SHA partial matching (git style)

Running halt summary:

  ✔ redis-d55950759f

```


Note: The default filtering function is ip which selects all the running instances (they have an ip addresset).


## Re-mote

Re-mote main abstraction is the Hosts type:

```clojure
(def sandbox (Hosts. {:user "re-ops" :ssh-key "/home/foo/.ssh/id_rsa} ["192.168.2.28" "192.168.2.26" "192.168.2.27"]))
```

It includes an authentication map (user and ssh key) and a list of hosts, protocols with different operations extend the Hosts type:

```clojure
; re-mote.repl.base
(defrecord Hosts [auth hosts]
  Shell
  (ls [this target flags]
    [this (run-hosts this (script ("ls" ~target ~flags)))])
```

Bundled operations range from package management to zfs operations like scrub and nmap port scanning.

The operations are used within pipelines:

```clojure
(defn listing [hs]
  (run (ls hs "/" "-la") | (pretty)))
```

Running a workflow is simple as calling a functions:

```clojure
[re-mote]λ: (listing sandbox)

Run summary:

   ✔ 192.168.2.28
   ✔ 192.168.2.27
   ✔ 192.168.2.26

```

For a complete listing of workflows check the [cheatsheet]().

### Functions
Re-mote can send Clojure functions to Re-gent processes across our machine cluster, the functions are defined under re_mote/zero/functions.clj: 

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
* com.github.oshi for collecting OS/Hardware information.
* re-scan for running Nmap scanner.

Adding new libraries is pretty simple:

* Add the library to both re-gent/project.clj and re-mote/project.clj.
* Import the required ns/classes into re-mote.zero.functions and re-gent.zero.functions 
* Build the re-gent binary using bin/binary.sh
* Deploy re-gent to the machines using the deploy workflow

