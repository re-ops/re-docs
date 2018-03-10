# Intro

Setting up Re-mote does not take much, most of the work is making sure that an SSH key is deployed to your remote machines ([Re-pack](re-pack.md) is one easy way of doing so for VM's).

## Setup

Cloning the git repo and launching the repl gets us done with the setup part:

```clojure
$ git clone git@github.com:re-ops/re-mote.git
$ cd re-mote
$ lein repl
[re-mote]λ: (go)
nil
[re-mote]λ: (def sandbox (Hosts. {:user "vagrant"} ["192.168.2.28" "192.168.2.26" "192.168.2.27"]))

[re-mote]λ: (listing sandbox)

Run summary:

   ✔ 192.168.2.28
   ✔ 192.168.2.27
   ✔ 192.168.2.26

```


## Configuration


```bash
$ cp config/re-mote.edn ~/.re-mote.edn
```

The configuration file is pretty much self explanatory:

```clojure
{
  :smtp {
     :host "smtp.gmail.com"
     :user ""
     :pass ""
     :ssl :yes!!!11
  }

  :es {
    :server "http://127.0.0.1:9200"
    :index "re-mote"
    :user "elastic"
    :pass "changeme"
  }
}
```

## Keys

Re-mote uses SSH as the base band for performing remote operations, deploying Re-gent and distributing CurveMQ keys.

In order to deploy the ssh-keys to a single machine:

```bash
$ ssh-copy-id user@host
```

If you are using a configuration management tool (like Puppet) you can add your key to the /home/re-ops/.ssh/authorized_keys file.

Once last option is to bake in the key into the image that will be used by Re-core so that each new VM instance will have the key.
