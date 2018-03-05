## Interactive
One of the nicest things the REPL gives us is immediate feedback, we enter a command and get feedback, but the REPL is also a live environment meaning that we can also change our code on the fly.

Each time we start our session we run:

```bash
$ lein repl
[re-mote]λ: (go)
nil
```

The go function is defined in our dev/user.clj file, it starts up all of our components by running setup and start:


```clojure
; Re-mote setup and start procedure
(defn setup []
  (k/create-server-keys ".curve")
  (repl/setup)
  (es/setup))

(defn start [_]
  (es/start)
  (web/start)
  (zero/start))

```

We can also stop our components by running:

```bash
[re-mote]λ: (stop)
```


