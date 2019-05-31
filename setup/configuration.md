# Configuration

Re-ops uses re-ops.edn and secrets.edn for its configuration, example templates can be found under re-core/resources folder:

```bash
$ cp resources/re-ops.edn ~/.re-ops.edn
$ cp resources/secrets.edn /tmp/re-ops.edn
```

[Aero](https://github.com/juxt/aero) is used as the base library for managing secrets references and getting access to environment from re-ops.edn.

The configuration file is divided to the following sections:

*   Re-core section which includes the Hypervisors used, Elasticsearch index, Queue folder and logging paths. 
*   Re-mote section (currently includes only the Elasticsearch index used for publishing metrics)
*   Shared settings which are common to both Re-core and Re-mote including: Elasticsearch settings SSH settings and pgp.
* Riemann setting (for publishing metrics into Riemann).

Any configuration change made in the file can be made available by running:
```clojure
[re-core]λ: (reset)
```

## Secret management

The secrets.edn includes passwords and tokens which are kept in a pgp encrypted file, once copied into /tmp we can add the information matching the hypervisors we use.


We will now encrypt the file by first generating the pgp password protected keypair :

```bash
# Generate a keyring and keys
$ gpg --no-default-keyring --keyring trustedkeys.gpg --fingerprint
$ gpg --no-default-keyring --keyring trustedkeys.gpg --gen-key
# A public and private keyrings exported
$ gpg --no-default-keyring --keyring trustedkeys.gpg --export >> keys/public.gpg
$ gpg --no-default-keyring --keyring trustedkeys.gpg --export-secret-keys >> keys/secret.gpg"
```

Once the keys are ready we can encrypte our secrets file:

```clojure
[re-core]λ: (require '[re-share.config.secret :refer (save-secrets)])
; create a secrets file under the re-core project folder
[re-core]λ: (save-secrets "/tmp/secrets.edn" "secrets" "keys/public.gpg")
```
When launching re-core a Tmux window pane will open into which we should enter our keypair password.

## Shared

The shared configuration options include parts which are common to both Re-mote and Re-core:

```clojure
{
 :shared {
    :elasticsearch {
      :host "localhost"
      :port 9200
      :user "elastic"
      :pass #ref [:secrets :elasticsearch :pass]
    }

    :ssh {
      :private-key-path "/home/foo/.ssh/id_rsa"
    }
   
    :pgp {
      :public "keys/public.gpg"
      :private "keys/secret.gpg"
      :pass #ref [:secrets :pgp :pass]
    }
  }
}
```
<table class="tableblock frame-all grid-all spread">
  <caption class="title">Table 1. Shared Settings</caption>
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
	<td class="tableblock halign-left valign-top" rowspan="4"><p class="tableblock">elasticsearch</p></td>
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
	<td class="tableblock halign-left valign-top"><p class="tableblock">ssh</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">private-key-path</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Private ssh key path</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">Used to perform remote tasks over ssh</p></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top" rowspan="3"><p class="tableblock">pgp</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">public</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">public pgp key</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">private</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">private pgp key</p></td>
	<td class="tableblock halign-left valign-top"></td>
    </tr>
    <tr>
	<td class="tableblock halign-left valign-top"><p class="tableblock">pass</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">private key password</p></td>
	<td class="tableblock halign-left valign-top"><p class="tableblock">used during sync operations</p></td>
    </tr>
  </tbody>
  </table>




