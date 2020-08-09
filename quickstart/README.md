# Intro

This guide is meant to provide a quick way to learn about Re-ops and its capabilities, a more in-depth coverage is provided under the [configuration](/configuration/) guide.

By the end of it you should be able to:

  * Quickly create LXC instances using Re-core creation DSL
  * Run distributed Clojure functions on your local container cluster.
  * Monitor, query and analyse the state of the container instances.
  * Gain good understanding of the core capabilities of Re-ops.

## Installation

Setup prerequisites:

 * [Ubuntu 20.04](https://releases.ubuntu.com/20.04/) (on either visualized or physical hardware) with 4 cores and 8GB of RAM.
 * [Amazon correto 8](https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html) JDK (installable from a DEB file).

Note: The automated setup process will install LXD and additional tooling, make sure to run the following on a machine you are comfortable with making those changes to. 

If you haven't already make sure to install Amazon corretto JDK 8:

```bash
wget https://corretto.aws/downloads/latest/amazon-corretto-8-x64-linux-jdk.deb
sudo dpkg -i amazon-corretto-8-x64-linux-jdk.deb
sudo apt-get -f install
```

We will use [Re-cipes](https://github.com/re-ops/re-cipes) in order to setup Re-ops and LXD:

```bash
wget https://github.com/re-ops/re-cipes/releases/download/0.1.28/re-cipes -P /tmp
chmod +x /tmp/re-cipes
git clone https://github.com/re-ops/re-cipes.git ~/re-cipes
cp -r ~/re-cipes/resources /tmp
```

Make sure to adjust the user and home settings in /tmp/resources/config.edn to match your user:

```bash
# default user is re-ops
cat /tmp/resources/config.edn
{
 :user "re-ops"
 :home "/home/re-ops"
 ...
}
```

Now launch Re-cipes and let it run through:

```bash
sudo /tmp/re-cipes provision --plan re-cipes.profiles/re-ops-standalone
```

## Image

Next we will create a base container image on which our Re-core containers will be based upon:

```bash
cd ~/code/re-ops/re-pack
cat ~/.ssh/id_rsa.pub > http/authorized_keys
packer build -var 'user=re-ops' src/lxd/ubuntu-20.04/ubuntu-20.04-server-amd64.json
```

Check [Re-pack](/configuration/re-pack.html#build) more detailed information on creating Re-ops ready images on multiple hypervisors.

## Elasticsearch

We will use a local docker container in order to spin up Elasticsearch quickly:

```bash
sudo systemctl start docker-compose@elasticsearch.service
```

Check [Re-dock](/configuration/re-dock.html) for running ELK + Grafana in addition to Elasticsearch.

## Launch

We will launch the REPL:

```bash
cd ~/code/re-ops/re-core
tmux
# going to take a while as dependencies and Lein are downloaded
lein repl
```

Now we will start the system and create our first instance!:

```clojure
(go)
; creating a type for the system that we will create next
(create cog 're-cipes.profiles/lean default-src :lean "")
; our first container based system
(create lxc defaults c1-medium local :lean "Our first running instance!")
```

## Run

Once the container is running we can deploy Re-gent into it, we start with building it:

```bash
cd ~/code/re-ops/re-gent
./bin/binary.sh
# allow ZeroMQ traffic
sudo ufw allow 9000
```

Back in the REPL we deploy the agent and run a function once the host is registered:

```clojure
; assumes change your home path to match
(deploy (hosts (matching (*1)) :ip) "/home/re-ops/code/re-ops/re-gent/target/re-gent")
; wait couple of seconds to see the registered host
(registered-hosts)
; run a distributed datalog query on the hosts grabbing jvm version
(run-hosts (hosts (matching (*1)) :hostname) re-cog.facts.datalog/run-query ['[:find ?v :where [_ :java/version ?v]]] [10 :second])
```

Next we will monitoring our instance cpu and ram usage:

```clojure
; installing sysstat in order to measure cpu performance
(install (hosts identity :hostname) "sysstat")
; cpu usage stats
(cpu-persist (hosts identity :hostname))
; RAM usage stats
(ram-persist (hosts identity :hostname))
```

Both ram-persist and cpu-persist are a part of [Re-mote](/usage/#re-mote):

 * Save the information into Elasticsearch where we can use Grafana and Kibana [dashboards](/configuration/re-dock.html#dashboards) to visualize them.
 * Ship events to [Riemann](/configuration/re-mote.html#riemann) where we can define alerts on.

Check the [scheduling](/usage/#scheduling) section on how to enable on going monitoring tasks.

