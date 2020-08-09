# Intro

In this section we will cover the requirements and setup procedures of Re-ops components

## Prerequisites

The following are the core prerequisites that Re-ops requires in order to run:

* [Ubuntu 20.04](https://releases.ubuntu.com/20.04/) (on either visualized or physical hardware).
* [Amazon correto 8](https://docs.aws.amazon.com/corretto/index.html) JDK.
* [Lein](https://leiningen.org/) build tool.
* Elasticsearch 7.8 for persistent storage (see [Re-dock](re-dock.md) for quick docker setup).
* Good understanding of Clojure :)

Note: Using Re-ops will require you to use Clojure, check out [why](/#why-clojure).

## ELK

Re-ops uses the ELK stack for persistent storage and visualization of data:

* Elasticsearch 7.8 for persisting results and metrics
* Grafana for viewing metrics
* Kibana for viewing results and failures

Check [Re-dock](re-dock.md) for a quick docker setup of the ELK stack.

