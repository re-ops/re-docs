
# Components

Just like the abstractions that we use the components that Re-ops is made out of are composable and detachable, you can use Re-core or Re-mote or both, you can add Re-gent or not, depending on your requirements.


# Networking

Re-mote and Re-gent use two network protocols:

* SSH, the secure shell protocol, usually using port 22
* ZeroMQ, a socket protocol on top of TCP that include PUB/SUB, Mesh and other patterns built in.

The ZeroMQ server port is dynamically picked (from the 8080-9000 range) on Re-mote side and agents connect back to that port (the deploy workflow sets it automatically on the agent).

Note: make sure that on the server firewall the incoming port is open.

## Security

Re-mote makes use of SSH RSA keys and ZeroMQ CurveMQ keys (for Re-gent), SSH is considered the secure base band on which both Re-gent and its CurveMQ keys are distributed.


```clojure
; re-gent
(defn #^{:category :re-gent} deploy
  "deploy re-gent and setup .curve remotely:
     (deploy sandbox \"path/to/re-gent\")"
  [{:keys [auth] :as hs} bin]
  (let [{:keys [user]} auth home (<< "/home/~{user}") dest (<< "~{home}/.curve")]
    (run (mkdir hs dest "-p") | (scp ".curve/server-public.key" dest) | (pretty "curve copy"))
    (run (kill-agent hs) | (pretty "kill agent"))
    (run (scp hs bin home) | (pick successful) | (start-agent home) | (pretty "scp"))))


```

This scheme relies heavily on the security of SSH and that of CurveMQ, no external security auditing has taken place on Re-ops but the use of existing and vetted protocols should provide reasonable guarantees.

Any reported security issue will be given high priority in fixing and support time, please submit those under the project [Re-mote](https://github.com/re-ops/re-mote) page.


