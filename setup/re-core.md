# Re-core

Setting up Re-core is pretty easy, most of the work is making sure you have VM templates that it can use, check [Re-pack](re-pack.md) on how to do just that.

## Setup

Its easy to get going just clone the repo and launch the REPL:

```clojure

$ git clone git@github.com:re-ops/re-core.git
$ cd re-core
# tmux is required for password input
$ tmux new-session re-core
# Now start the REPL environment
$ lein repl
[re-core]λ: (go)
nil
```

Note: Re-core currently requires jdk-8

## Templates

Re-core clones templates in order to create new VM instances, we use [Re-pack](re-pack.md) to create our templates which contain the minimal setup required for Re-ops to manage the instance:

* re-ops user for remote access management.
* authorized ssh-key (for automated access) under /home/re-ops/.ssh/authorized_keys
* Java 8 (for re-gent)

## Configuration

The Re-core section contains the configuration options for Re-core hypervisors, Elasticsearch index, logging and queue path:

```clojure
{
 :re-core {

   :queue-dir "/tmp/re-core-queue/"

   :port 8082
   :https-port 8443

   :log {
     :level :info
     :path "re-core.log"
   }
   :hypervisor #profile {
     :dev {
       ; check the Hypervisors section
     }
   }
  }
}

```

<table class="tableblock frame-all grid-all spread">
  <caption class="title">Table 1. Re-core settings</caption>
  <colgroup>
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
  </colgroup>
  <thead>
    <tr>
	<th class="tableblock halign-left valign-top">Section</th>
	<th class="tableblock halign-left valign-top">Property</th>
	<th class="tableblock halign-left valign-top">Description</th>
	<th class="tableblock halign-left valign-top">Comments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">ports</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">port</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Standard http port</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Used for endpoint, used reverse proxy to secure</p></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top" rowspan="2"><p class="tableblock">log</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">level</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Default logging level</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Optional values include: trace, debug, info, error.</p></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">path</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Where the log file is store locally</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top" rowspan="5"><p class="tableblock">elasticsearch</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">host</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">The host Elasticsearch is running on</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">port</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">http API port (9200 by default)</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">user</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Elasticsearch user name</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">pass</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Elasticsearch password</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">index</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">The index name that re-core will use</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">ssh</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">private-key-path</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Private ssh key path</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Used to perform remote tasks over ssh</p></td>
    </tr>
  </tbody>
  </table>




## Hypervisors

Hypervisor configuration is located under the re-core section of re-ops.edn.

### AWS

AWS requires the following information under the re-conf/hypervisor/aws section in the configuration file:

```clojure
{
  :hypervisor {
   :dev {
     :aws {
       :access-key ""
       :secret-key ""
       :ostemplates {
         :ubuntu-18.04 {:ami "" :flavor :debian}
       }
       :default-vpc {
          :vpc-id "vpc-123456" :subnet-id "subnet-123456" :assign-public true
        }
      }
    }
  }
}
```



<table class="tableblock frame-all grid-all spread">
  <caption class="title">Table 2. AWS configuration</caption>
  <colgroup>
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
  </colgroup>
  <thead>
    <tr>
	<th class="tableblock halign-left valign-top">Section</th>
	<th class="tableblock halign-left valign-top">Property</th>
	<th class="tableblock halign-left valign-top">Description</th>
	<th class="tableblock halign-left valign-top">Comments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">access-key</p></td>
	<td class="tableblock halign-left valign-top"></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">AWS access key</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">secret-key</p></td>
	<td class="tableblock halign-left valign-top"></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">AWS API secret key</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">ostemplates</p></td>
	<td class="tableblock halign-left valign-top"></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Mappings between system os key to AMI and flavor (redhat or debian).</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top" rowspan="3"><p class="tableblock">default-vpc</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">vpc-id</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">The id of the VPC that will be used with EC2 instances.</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">subnet-id</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">The id of the subnet that will be used with EC2 instances.</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">assign-public</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Whether to assign a public IP or not.</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">If false then a VPN is used to access the internal VPC network.</p></td>
    </tr>
  </tbody>
</table>

### Digitalocean

[Digitalocean](https://www.digitalocean.com/) requires the following configuration under the re-conf/hypervisor/digital-ocean section in the configuration file:

```clojure
:hypervisor {
  :dev {
    :digital-ocean {
      :token ""
      :ssh-key ""
      :ostemplates {
         :ubuntu-18.04  {:image "ubuntu-18-04 :flavor :debian}
      }
     }
   }
}
```

<table class="tableblock frame-all grid-all spread">
  <caption class="title">Table 3. Digitalocean configuration</caption>
  <colgroup>
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
  </colgroup>
  <thead>
    <tr>
	<th class="tableblock halign-left valign-top">Section</th>
	<th class="tableblock halign-left valign-top">Property</th>
	<th class="tableblock halign-left valign-top">Description</th>
	<th class="tableblock halign-left valign-top">Comments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">token</p></td>
	<td class="tableblock halign-left valign-top"></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Digitalocean authentication token</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">ssh-key</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">SSH key id in Digitalocean UI</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Used for password-less access to droplets.</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">ostemplates</p></td>
	<td class="tableblock halign-left valign-top"></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Mapping from OS key to its Digitalocean image</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Check <a href="re-pack.html">Re-pack</a> on how to create a template</p></td>
    </tr>
  </tbody>
</table>

### KVM

[KVM](http://www.linux-kvm.org/page/Main_Page) requires the following information under the re-conf/hypervisor/kvm section in the configuration file:

```clojure
:hypervisor {
  :dev {
    :kvm  {
      :nodes {
         :remote {:username "ronen" :host "somehost" :port 22}
         ; must use localhost key for localhost
         :localhost {:username "ronen" :host "localhost" :port 22}
       }
      :ostemplates {
         :ubuntu-16.04 {:template "ubuntu-16.04" :flavor :debian}
      }
    }
  }
}
```

Note: we used libvirt over SSH (using key based auth).

<table class="tableblock frame-all grid-all spread">
  <caption class="title">Table 4. KVM configuration</caption>
  <colgroup>
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
  </colgroup>
  <thead>
    <tr>
	<th class="tableblock halign-left valign-top">Section</th>
	<th class="tableblock halign-left valign-top">Property</th>
	<th class="tableblock halign-left valign-top">Description</th>
	<th class="tableblock halign-left valign-top">Comments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
	<td class="tableblock halign-left valign-top" rowspan="3"><p class="tableblock">nodes</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">username</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">SSH user name</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Add your ssh key to /home/{user}/.ssh/authorized_keys</p></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">host</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">KVM node host</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock"><a href="kvm_localhost">KVM localhost</a></p></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">port</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">SSH port</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top" rowspan="2"><p class="tableblock">ostemplates</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">template</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Template VM name</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">check <a href="re-pack.html#deploy">Deploy</a></p></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">flavor</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">OS flavor of the template</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">currently only :debian supported</p></td>
    </tr>
  </tbody>
</table>

### LXC

[LXC](https://linuxcontainers.org/) require the following information under the re-conf/hypervisor/lxc section in the configuration file:
```clojure
:hypervisor {
  :dev {
    :lxc {
      :auth {
        :path #join [#env HOME "/.config/lxc"]
        :p12 "certificate.p12"
        :password ""
        :crt "127.0.0.1.crt"
      }

      :nodes {
        :localhost {
           :host "127.0.0.1" :port 8443
        }
      }

      :ostemplates {
        :ubuntu-18.04.2 {:template "ubuntu-18.04.2_node-8.x" :flavor :debian}
      }
    }
  }
}
```

Note: check how to add a remote LXD server following this [guide](https://linuxcontainers.org/lxd/getting-started-cli/).

<table class="tableblock frame-all grid-all spread">
  <caption class="title">Table 4. KVM configuration</caption>
  <colgroup>
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
  </colgroup>
  <thead>
    <tr>
	<th class="tableblock halign-left valign-top">Section</th>
	<th class="tableblock halign-left valign-top">Property</th>
	<th class="tableblock halign-left valign-top">Description</th>
	<th class="tableblock halign-left valign-top">Comments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
	<td class="tableblock halign-left valign-top" rowspan="4"><p class="tableblock">auth</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">path</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">LXC client certificates path</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Usually defaults to ~/.config/lxc</p></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">p12</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Generated p12 client certificate</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Check <a href="#p12_generate">p12</a> generate</p></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">password</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">p12 certificate password</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">crt</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">The remote server crt file</p></td>
	<td class="tableblock halign-left valign-top">Created when adding a remote LXD node</td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top" rowspan="2"><p class="tableblock">nodes</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">host</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Remote LXD node address</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">port</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Remote LXD host port</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top" rowspan="2"><p class="tableblock">ostemplates</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">template</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Container image name</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">flavor</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">OS flavor of the template</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">currently only :debian supported</p></td>
    </tr>
  </tbody>
</table>


<h5 id="p12_generate"> Generating p12 certificate</h5>

The p12 certificate is generated from the client.crt and host.crt files: 

```bash
$ openssl pkcs12 -export -out certificate.p12 -inkey client.key -in client.crt -certfile servercerts/127.0.0.1.crt
```

Both files are generated after a new remote is added to our local LXC client:

```bash
$ lxc remote add 127.0.0.1
```
