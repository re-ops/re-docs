# Introduction

Re-ops is a Clojure based live REPL environment for performing VM orchestration and remote operations, it offers high development speed and flexibility.

Its main components include:

1. Re-core, for orchestration of VM's.
2. Re-mote, for performing remote operations.
3. Re-gent, an agent for running distributed Clojure functions.

## Motivation

Most (if not all) configuration management tools currently are static in nature, you write you code deploy it and apply (rinse and repeat),still our live environments change rapidly and having this cycle in place really slows our reaction time down, Re-ops is a re-take on how remote operations would look like when using a live REPL to drive them, Re-ops main abstractions include pipelines and operations that are easy to compose since they are plain functions.

## Architecture


```clojure
(defn #^{:category :shell} listing [hs]
  (run (ls hs "/" "-la") | (pretty "listing")))
```

