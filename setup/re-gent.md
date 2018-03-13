#Intro

Re-gent is a self encapsulated binary file (an uberjar embedded in a shell script), we use Re-mote do deploy Re-gent instances on machines that we want to manage.

## Build

We build a single distributable binary file:

```clojure
$ git clone git@github.com:re-ops/re-gent.git
$ cd re-gent
# Now start the REPL environment
$ ./bin/build.sh
```

The file is created under re-gent/target/re-gent, you can copy this file to a remote machine and run:

```bash
# You need to copy .curve/server-public.key keys from the server to .curve
$ ./re-gent {host} {port} {log-level}
```


## Deploy

The deployment process of Re-gent is automated by Re-mote, all you need to do in order to deploy the latest version of the agent is to run:

```clojure

[re-mote]λ: (deploy develop "re-gent/target/re-gent") ; agent binary path

Run curve copy summary:

  ✔ re-a
  ✔ re-e


Run kill agent summary:

  ✔ re-a
  ✔ re-e


Run scp summary:

  ✔ re-a
  ✔ re-e

[#re_mote.repl.base.Hosts {:auth {:user "vagrant"} :hosts ("re-a" "re-e")}
 {:failure {} :hosts ("re-a" "re-e") :success [{:code 0 :host "re-a" :uuid "d2687d896054430ea84df44ae54d5b92"} {:code 0 :host "re-e" :uuid "d52e9260043c4eb787526eaebba16c11"}]}]

```

The agents start and register back to the server, we list the registered instances by:

```clojure
[re-mote]λ: (registered-hosts)
                re-a   000A-0019
                re-e   0000-001B
nil

```

Note: Make sure to have the ZeroMQ firewall port open on the server side (an available port is automatically chosen and can be viewed in the logs).

Using the automated method should result with a .curve folder on the agent side that contains the server and client public keys and the client secret key:

```bash
$ ls ~/.curve
 client-private.key  client-public.key  server-public.key
```

A similar folder (with the server private key) should be created in Re-mote path:
```bash
$ ls re-mote/.curve
 client-private.key  client-public.key  server-private.key server-public.key
```

Note: You should never copy or expose server-private.key to your clients.
