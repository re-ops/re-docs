# Re-mote

Setting up Re-mote does not take much, most of the work is making sure that an SSH key is deployed to your remote machines (you can pre-package the key using [Re-pack](re-pack.md) for your managed VMs).

## Setup

Cloning the git repo and launching the REPL gets us done with the setup part:

```clojure
$ git clone git@github.com:re-ops/re-mote.git
$ cd re-mote
$ lein repl
[re-mote]λ: (go)
nil
[re-mote]λ: (def sandbox (Hosts. {:user "vagrant"} ["192.168.2.28" "192.168.2.26" "192.168.2.27"]))

[re-mote]λ: (listing sandbox)

Run listing summary:

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

  :elasticsearch {
    :host "localhost"
    :port 9200
    :index "re-mote"
    :user "elastic"
    :pass "changeme"
  }
}
```

Note: email setup is required only when sending emails from pipelines the same applies to Elasticsearch (using persist in this case).

## SSH

Re-mote uses SSH as the base band for performing remote operations, deploying Re-gent and distributing CurveMQ keys.

In order to deploy the ssh-keys to a single machine:

```bash
$ ssh-copy-id user@host
```

If you are using a configuration management tool (like Puppet) you can add your key to the /home/re-ops/.ssh/authorized_keys file or pre-bake your VM images to include the keys by using [Re-pack](re-pack.md).

Another required setting is to disable to known_hosts file for the managed hosts subnet:

```bash
host 192.168.122.*
    GSSAPIAuthentication no
    UserKnownHostsFile /dev/null
    StrictHostKeyChecking no
```
