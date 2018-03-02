## Build

Is easy to get going by cloning the code and launching the REPL:

```clojure
$ git clone git@github.com:re-ops/re-gent.git
$ cd re-gent
# Now start the REPL environment
$ ./bin/build.sh
```

A single binary file is created under re-gent/target/re-gent, you can copy this file to a remote machine and run:

```bash
# You need to copy .curve/server-public.key keys from the server to .curve
$ ./re-gent {host} {port} {log-level}
```


## Deploy

The deployment process of Re-gent is automated by Re-mote, all you need to do in order to deploy the latest version of the agent is to run:

```clojure

[re-mote]λ: (deploy develop "re-gent/target/re-gent") ; agent binary path

Run summary:

  ✔ re-a
  ✔ re-e


Run summary:

  ✔ re-a
  ✔ re-e


Run summary:

  ✔ re-a
  ✔ re-e

[#re_mote.repl.base.Hosts {:auth {:user "vagrant"} :hosts ("re-a" "re-e")}
 {:failure {} :hosts ("re-a" "re-e") :success [{:code 0 :host "re-a" :uuid "d2687d896054430ea84df44ae54d5b92"} {:code 0 :host "re-e" :uuid "d52e9260043c4eb787526eaebba16c11"}]}]

[re-mote]λ: (registered-hosts)
                re-a   000A-0019
                re-e   0000-001B
nil

```

Once the agents have started and registered successfuly you can list them by running:

```clojure

```
