# Re-core

Setting up Re-core is pretty easy, most of the work is making sure you have VM templates that it can use, check link:re-pack.html[Re-pack] on how to do just that.

## Setup

Its easy to get going just clone the repo and launch the REPL:

```clojure
$ git clone git@github.com:re-ops/re-core.git
$ cd re-core
# Now start the REPL environment
$ lein repl
[re-core]λ: (go)
nil
```

Now head on to configuration and create VM templates.

## Templates

Re-core clones templates in order to create new VM instances, we use link:re-pack.html[Re-pack] to create our templates, which contain the minimal setup for required for Re-core to manage the instance:

* re-ops user for remote access management.
* authorized ssh-key (for automated access) under /home/re-ops/.ssh/authorized_keys
* Configuration management tools (like Puppet 4.x) etc..

Not all templates require the same setup so check the matching hypervisors section for more info.


## Configuration

The configuration holds the information on how to connect to different hypervisors, you can start by copying:

```bash
$ cp data/resources/re-core.edn ~/.re-core.edn
```

Any configuration change can be reflected immediately by:

```clojure
[re-core]λ: (reset)
```
The configuration file is divided to the following sections:

*   Re-core properties like: ports, log settings
*   Hypervisors like AWS, KVM and Digitalocean
*   Elasticsearch settings
*   SSH settings (key used to connect to remote instances)

The Re-core section (situated on top) contains the configuration options of the server itself:
```clojure
{
 :re-core {
   :port 8082
   :log {
     :level :info
     :path "re-core.log"
   }
 }

 :elasticsearch {
   :host "localhost"
   :port 9200
   :user "elastic"
   :pass "changeme"
   :index "re-core"
 }

 :ssh {
   :private-key-path "/home/foo/.ssh/id_rsa"
 }

}
```
<table class="tableblock frame-all grid-all spread">
  <caption class="title">Table 1. Mandatory Settings</caption>
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

### AWS

AWS configuration goes under the hypervisor/aws section in the link:re-core.html/_configuration[configuration] file:

```clojure
{
  :hypervisor {
   :dev {
     :aws {
       :access-key ""
       :secret-key ""
       :ostemplates {
         :ubuntu-16.04 {:ami "" :flavor :debian}
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

[Digitalocean](https://www.digitalocean.com/) is supported with the following configuration:


```clojure
:hypervisor {
  :dev {
    :digital-ocean {
      :token ""
      :ssh-key ""
      :ostemplates {
         :ubuntu-16.04  {:image "ubuntu-16-04 :flavor :debian}
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

[KVM](http://www.linux-kvm.org/page/Main_Page) is supported with the following configuration:

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
