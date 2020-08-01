# Quickstart

In this section we will cover how to get up and running a Re-core instance on a local machine and manage LXC container instances locally.

By the end of it you should be able to:

  * Quickly create LXC instances using Re-core creation DSL
  * Run distributed Clojure functions on your local cluster
  * Monitor, query and analyse the state of the instance.
  * Gain good understanding on the core capabilities of Re-ops

## Installation

Setup prerequisites:

 * Ubuntu 20.04 with 4 core and 8GB of RAM.
 * [Amazon correto 8](https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html) jdk (installable from a DEB file).


Note:
  * The automated setup process will install LXD and additional tooling, run the following on a machine you are comfortable with making those changes to (like a disposable VM).

We will use [Re-cipes](https://github.com/re-ops/re-cipes) in order to setup LXC and Re-ops and all the required tooling.

```bash
wget https://github.com/re-ops/re-cipes/releases/download/1.27/re-cipes -P /tmp
git clone https://github.com/re-ops/re-cipes.git /tmp/
mv /tmp/re-cipes/resources /tmp
sudo /tmp/re-cipes provision --profile re-cipes.profiles.re-ops-standalone
```

## Image

In this configuration Re-ops will use a local LXD server to run containers, we will now create a base image for Re-ops to create new instances from:

```bash
cd ~/re-ops/re-pack
# We need ssh keys first
ssh-keygen
cat ~/.ssh/id_rsa.pub > http/authorized_keys
packer build -var 'user=re-ops' src/lxd/ubuntu-20.04/ubuntu-20.04-server-amd64.json
```

Check [Re-pack](setup/re-pack.html#build) more detailed information on creating Re-ops ready images on multiple hypervisors.

## Configuration

Now we are ready to configure Re-core:

```bash
# Re-core requires tmux first
cd ~/code/re-core
cp resources/re-ops.edn ~
cp resources/secrets.edn /tmp/
# changing Elasticsearh protocol to plain http
sed -i 's#https://localhost:9200#http://localhost:9200#' ~/.re-ops.edn
```

For more detailed configuration options please check Re-ops [configuration](setup/configuration.html) section.

## Elasticsearch

We will use a local docker container in order to spin up Elasticsearch quickly:

```bash
cd ~/re-ops/re-dock
cp elasticsearch.yml docker-compose.yml
# our local persistent volume
sudo mkdir /var/data
sudo chmod a+rwx /var/data -R
docker-compose up
```

Check [Re-dock](setup/re-dock.html) for more advanced options.

## Ready to role!

We will launch the REPL:

```bash
cd ~/re-ops/re-core
tmux
# going to take a while as dependencies and Lein are downloaded
lein repl
```

Now we will start the system and create our first instance!:

```clojure
(go)
(create cog 're-cipes.profiles/core default-src :core "Re-core instances")
(create lxc defaults c1-medium local :core "Our first running instance!")
```
