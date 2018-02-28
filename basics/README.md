
# Prerequisites

Re-ops is pretty easy to get started with (its main requirements are Java and Lein) still for the full feature set make sure to have:

* OpenJDK 8 with JCE enabled.
* [lein](https://leiningen.org/).
* rng-tools package for increased entropy under Linux (Ubuntu).


Re-ops uses the ELK stack for persistent storage and visualization of data:

* Elasticsearch 5.6.x for persisting results and metrics
* Grafana for viewing metrics
* Kibana for viewing results and failures

While its not a hard requirement (Re-ops can work fine without it) the two complement each other very well.

Check [Re-dock](basics/README.md#re-gent) for a quick docker setup of the ELK stack.

