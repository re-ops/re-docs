# Setup

In this section we will cover the requirements and setup procedures for each of the components of Re-ops.

Re-ops was designed with deployment simplicity in mind and should be easy to get running, for the most part you need to clone the source repos and start the REPL, setting up ELK and VM templates is also covered.

Follow the [Re-mote](re-mote.md), [Re-core](re-core.md) sections to learn more.

## Prerequisites

Re-ops is pretty easy to get started with (its main requirements are Java and Lein) still for the full feature set make sure to have:

* OpenJDK 8 with JCE enabled.
* [lein](https://leiningen.org/).
* rng-tools package for increased entropy under Linux (Ubuntu).


Re-ops uses the ELK stack for persistent storage and visualization of data:

* Elasticsearch 5.6.x for persisting results and metrics
* Grafana for viewing metrics
* Kibana for viewing results and failures

Note: While its not a hard requirement (Re-mote can work fine without it) the two complement each other very well.

Check [Re-dock](re-dock.md) for a quick docker setup of the ELK stack.

