# Introduction

Re-ops is a Clojure based live REPL environment for performing VM orchestration and remote operations, it offers high development speed and flexibility.

Its main components include:

1. Re-core, for orchestration of VM's.
2. Re-mote, for performing remote operations.
3. Re-gent, an agent for running distributed Clojure functions.

## Motivation

Most (if not all) configuration management tools currently are static in nature, you write you code deploy it and apply (rinse and repeat),still our live environments change rapidly and having this cycle in place really slows our reaction time down, Re-ops is a re-take on how remote operations would look like when using a live REPL to drive them, Re-ops main abstractions include pipelines and operations that are easy to compose since they are plain functions.

## Why Clojure

Re-ops enables the functionality of multiple tools, from configuration management and remote automation to data collection and VM orchestration.

In most cases existing tools need to re-invent:

* Namespaces, a way of dividing the code into components.
* Composition, how you compose reusable code.
* Packaging, how the code is distributed, how you use external libraries.
* Interoperability, how you interop with external components and systems.

By using Clojure we gain a lot those things for free:

* Namespace packaging come for free.
* Composition is first class (using functional composition, protocols etc..)
* Packaging is granted by using the JVM.
* We can use any JVM library (or write our own) to integrate with other components.

But the biggest advantage is the that Clojure is really geared toward processing, transforming and analysing data, which is abundant available when dealing with systems.

## Abstractions

Both Re-mote and Re-core use similar abstractions to describe workflows and operations against remote systems and hypervisors, the first one is pipelines which are:

* A Series of functions (operations)
* Data flows from one function to the next
* Intermediate functions operate on data
* Final function output, publish, block/run async etc..
* They are composable (just functions)

```clojure

                            filtering             output
                                ^                   ^
(defn listing [hs]              |                   |
  (run (ls hs "/" "-la") | (pick successful) | (pretty)))
   |                     |
   |                     V
   |       [this, {:successful [], :failure []}
   V

; run expansion
(| (| (ls ..) (pick ..)) (pretty))

; pipe expansion
(let [[this' res] (ls hs)]
  (pick this' res))
```

The second set of abstractions include the Hosts record in Re-mote:

```clojure
(defrecord Hosts [auth hosts])

```
Which represents a collection of hosts and authentication we operation in a single workflow call, we add new operation on hosts by extending them with protocols:

```clojure
(defprotocol Pkg
  (update
    [this]
    [this m])
     ....)

(extend-type Hosts
  Pkg
  (update [this]
     ; updating packages
    )
    ...
  )
```

By using protocols this way we gain infinite expansion options, similarly Re-core Systems and Types:

```clojure
(defrecord Systems [])
(defrecord Types [])
```
Both systems (VMs, containers or physical machines) and Types (the systems type) a set of protocols with operations that are used from pipelines:

```clojure
(defprotocol Jobs
  "System jobs"
  (stop [this items])
  (start [this items])
  (create [this items])
  (provision [this items])
   ...
  )

(extend-type Systems
  Jobs
  (stop [this {:keys [systems] :as m}]
    [this (schedule m "stop" systems)])

  (start [this {:keys [systems] :as m}]
    [this (schedule m "start" systems)])

  (create [this {:keys [systems] :as m}]
    [this (schedule m "create" systems)])

    ...
  )

```
Just like Hosts we compose operations into pipelines:

```clojure
(defn list
  "List available instances:
    (list) ; list all systems
    (list ip) ; list all systems that have an ip (running)
    (list identity :types) ; list all types
  "
  ([]
   (list identity :systems))
  ([f]
   (list f :systems))
  ([f on]
   (case on
     :systems (run (ls systems) | (filter-by f) | (pretty))
     :types (run (ls types) | (pretty)))))
```


