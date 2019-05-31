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

Re-mote configuration is located within the [re-ops.edn](configuration.html#configuration) file:

```clojure
{
  :re-mote {
    :elasticsearch {
      :index "re-mote"
    }
  }
}
```

Note: some of configuration is [shared](configuration.html#shared)

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

## Publishing

Re-mote has support for publishing data into remote systems include metrics, security scan results and reports:

 * Collected metrics can be persisted into Elasticsearch for visualization in Kibana/Grafana.
 * Publishing metrics to Riemann in order to monitor for issues.
 * Sending reports emails when pipelines are finished with the results.

Note: check the [publish](https://re-ops.github.io/re-mote/re-mote.repl.publish.html) and  [persist](https://re-ops.github.io/re-mote/re-mote.persist.es.html) namespaces.

### Riemann

Riemann is configured under the re-ops.edn file:


```clojure
 {
  :riemann {
   :host "127.0.0.1"
   :port 5555
   :to ""
  }
 }

```

Publishing to Riemann is easy as:

```clojure
(defn ^{:category :stats} du-persist
    "Collect disk usage with persist (metrics collection):
       (du-persist hs)"
    [hs]
    (run> (du hs) | (enrich "du") | (persist) | (riemann)))

```

In the above snippet we run du on our hosts collect the result save it to Elasticsearch after which we publish the metrics to Riemann (check [riemann.config](https://github.com/re-ops/re-mote/blob/master/riemann.config) for an example configuration).
