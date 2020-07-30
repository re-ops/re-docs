# Quickstart

In this section we will cover how to get up and running a Re-core instance on a local machine and manage LCX instances locally, by the end of it we should be able to:


  * Quickly create LXC instances using Re-core creation DSL
  * Run distributed Clojure functions on your local cluster
  * Monitor, query and analyse the state of the instance.
  * Gain good understanding on the core capabilities of Re-ops


Note: 

  * The docs contain other configuration options and more in depth documentation, make sure to check those out.
  * Before moving forward please make sure to have all the [perquisites](/setup/#prerequisites) ready.

We will start first by grabbing all the components we are going to use:

```bash
git clone https://github.com/re-ops/re-core.git
git clone https://github.com/re-ops/re-pack.git
git clone https://github.com/re-ops/re-dock.git
git clone https://github.com/re-ops/re-cipes.git
git clone https://github.com/re-ops/re-gent.git
```

### LXD 

Next we will setup LXD locally so we can connect to it and manage containers on top of it, starting with our base image:

```bash
sudo apt install lxd zfsutils-linux -y
cd re-pack
packer build -var 'user=re-ops' src/lxd/ubuntu-20.04/ubuntu-20.04-server-amd64.json
```

Next is enabling LXD server API access for Re-core:

```bash
lxd init

# Follow the answers provided bellow
Would you like to use LXD clustering? (yes/no) [default=no]: 
Do you want to configure a new storage pool? (yes/no) [default=yes]: no
Would you like to connect to a MAAS server? (yes/no) [default=no]: no
Would you like to create a new local network bridge? (yes/no) [default=yes]: no
Would you like to configure LXD to use an existing bridge or host interface? (yes/no) [default=no]: no
Would you like LXD to be available over the network? (yes/no) [default=no]: yes
Address to bind LXD to (not including port) [default=all]: 127.0.0.1
Port to bind LXD to [default=8443]:
Trust password for new clients: 
Again:
Would you like stale cached images to be updated automatically? (yes/no) [default=yes]
Would you like a YAML "lxd init" preseed to be printed? (yes/no) [default=no]:
```

Setting required authentication keys for Re-core to be able to connect to the local LXD server:

```bash
cd ~/snap/lxd/current/.config
# use the password you used above
lxc remote add 127.0.0.1
# keep the password we will use it next in Re-core
openssl pkcs12 -export -out certificate.p12 -inkey client.key -in client.crt -certfile servercerts/127.0.0.1.crt
```

### Re-core
Now we are ready to configure Re-core:

```bash
# Re-core requires tmux first
cd re-core
cp resources/re-ops.edn ~
```

Next is setting up the /tmp/secrets.edn file:

```bash
cat /tmp/secrets.edn
{
  :lxc {
    :pass "Your LXC cert password (set above)"
  }
  :elasticsearch {
     :password "Your Elasticsearch password"
  }
}
```
We create the gpg keys that we will use to encrypt our secrets with: 

```bash
cd re-core
gpg --no-default-keyring --keyring trustedkeys.gpg --fingerprint
gpg --no-default-keyring --keyring trustedkeys.gpg --gen-key
# A public and private keyrings exported
mkdir keys
gpg --no-default-keyring --keyring trustedkeys.gpg --export >> keys/public.gpg
gpg --no-default-keyring --keyring trustedkeys.gpg --export-secret-keys >> keys/secret.gpg"
```

Start the REPL:

```bash
tmux
lein repl
```

And persist them for future use:

```clojure
(require '[re-share.config.secret :refer (save-secrets)])
(save-secrets "/tmp/secrets.edn" "secrets" "keys/public.gpg")
```

We now should be ready to create our first container instance!:

```clojure
(go)
(create cog 're-cipes.profiles/core default-src :core "Re-core instances")
(create lxc defaults c1-medium local :core "Our first running instance!")
```


