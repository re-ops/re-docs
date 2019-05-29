# Configuration

Re-ops uses re-ops.edn and secrets.edn for its configuration example templates can be found under re-core/resources folder, we can start the configuration by copying them:

```bash
$ cp resources/re-ops.edn ~/.re-ops.edn
$ cp resources/secrets.edn /tmp/re-ops.edn
```
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
When launching re-core a Tmux window pane will open into which we should enter our keypair password:


