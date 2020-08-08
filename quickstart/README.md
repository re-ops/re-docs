# Intro

This guide is meant to provide a quick way to learn about Re-ops and its capabilities, a more in-depth coverage is provided under the [setup](http://192.168.122.71:8080/re-docs/setup/) guide.

By the end of it you should be able to:

  * Quickly create LXC instances using Re-core creation DSL
  * Run distributed Clojure functions on your local container cluster.
  * Monitor, query and analyse the state of the container instances.
  * Gain good understanding of the core capabilities of Re-ops.

## Installation

Setup prerequisites:

 * Ubuntu 20.04 with 4 core and 8GB of RAM.
 * [Amazon correto 8](https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html) JDK (installable from a DEB file).

Note:

  * The automated setup process will install LXD and additional tooling, make sure to run the following on a machine you are comfortable with making those changes to (a VM).

If you have already make sure to install Amazon corretto JDK 8:

```bash
wget https://corretto.aws/downloads/latest/amazon-corretto-8-x64-linux-jdk.deb
sudo dpkg -i amazon-corretto-8-x64-linux-jdk.deb
sudo apt-get -f install
# and git we will need it next
sudo apt-get install git -y
```

We will use [Re-cipes](https://github.com/re-ops/re-cipes) here in provision and setup the tooling and repositories required to run Re-ops:

```bash
wget https://github.com/re-ops/re-cipes/releases/download/0.1.27/re-cipes -P /tmp
chmod +x /tmp/re-cipes
git clone https://github.com/re-ops/re-cipes.git ~/re-cipes
cp -r ~/re-cipes/resources /tmp
sudo /tmp/re-cipes provision --plan re-cipes.profiles/re-ops-standalone
```

## Image

For this setup we will use a local LXD server to run containers, a container image is used as a base from which they are created:

```bash
cd ~/code/re-ops/re-pack
cat ~/.ssh/id_rsa.pub > http/authorized_keys
packer build -var 'user=re-ops' src/lxd/ubuntu-20.04/ubuntu-20.04-server-amd64.json
```

Check [Re-pack](setup/re-pack.html#build) more detailed information on creating Re-ops ready images on multiple hypervisors.

## Elasticsearch

We will use a local docker container in order to spin up Elasticsearch quickly:

```bash
sudo systemctl start docker-compose@elasticsearch.service
```

Check [Re-dock](setup/re-dock.html) for running ELK + Grafana.

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
