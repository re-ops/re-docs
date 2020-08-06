# Intro

In this section we will cover the requirements and setup procedures for each components of Re-ops.

Re-ops was designed with deployment simplicity in mind and should be easy to get running, for the most part you only need to clone the source repos and start the REPL to get it running.

Follow the [Re-mote](re-mote.html), [Re-core](re-core.html) sections to learn more.

## Prerequisites

* Ubuntu 20.04 (VM or physical).
* [Amazon correto 8](https://docs.aws.amazon.com/corretto/index.html) jdk.
* [Lein](https://leiningen.org/) Clojure build tool.
* Elasticsearch 7.8 (see [Re-dock](re-dock.md) for quick docker setup).
* [Packer](https://www.packer.io/) for building VM/container images.
* Tmux for running Re-core REPL
* Good understanding of Clojure :)

Note: Using Re-ops will require you to use Clojure, check out [why](/#why-clojure).

## ELK

Re-ops uses the ELK stack for persistent storage and visualization of data:

* Elasticsearch 7.8 for persisting results and metrics
* Grafana for viewing metrics
* Kibana for viewing results and failures

Check [Re-dock](re-dock.md) for a quick docker setup of the ELK stack.

