(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{173:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("In this section we will cover the basic workflows when using Re-mote and Re-core, there are a clear convention to both and they follow similar principles:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("One of the nicest things that the REPLs provides is immediate feedback, it is also a live environment that can change code on the fly without a lengthy restart.")]),t._v(" "),a("p",[t._v("Each time we start our session we run:")]),t._v(" "),t._m(3),a("p",[t._v("The go function is defined in dev/user.clj file, it starts up all of our components by running setup and start:")]),t._v(" "),t._m(4),a("p",[t._v("stop components by running:")]),t._v(" "),t._m(5),a("p",[t._v("resets runs both stop and start in once go:")]),t._v(" "),t._m(6),a("p",[t._v("Note:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("Re-core enables us create and manage systems (VMs, physical hosts, containers) by using a fluent functional interface and presets like instance size, volumes and types:")]),t._v(" "),t._m(9),a("p",[t._v("Once we have instances running we can list them:")]),t._v(" "),t._m(10),a("p",[t._v("Note: the second column contains unique auto generated ids (AWF_17..) that we can use to directly reference an instance.")]),t._v(" "),a("p",[t._v("The main workflows on VMs (systems in Re-core lingo) are found under src/re_core/repl.clj, we can operate on all running instances by running:")]),t._v(" "),t._m(11),a("p",[t._v("All workflows take a filtering function, making it real easy to select the instances we operate on:")]),t._v(" "),t._m(12),a("p",[t._v("Note:")]),t._v(" "),a("ul",[a("li",[t._v("The default filtering function is ip which selects all the running instances (assumed to have an active ip addresset).")]),t._v(" "),a("li",[t._v("Check Re-core "),a("a",{attrs:{href:"https://re-ops.github.io/re-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("API"),a("OutboundLink")],1),t._v(" for a detailed list of the available functions.")])]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("One of Re-mote main abstraction is the Hosts type:")]),t._v(" "),t._m(14),a("p",[t._v("It includes an authentication map (user and ssh key) and a list of hosts, protocols with different operations extend the Hosts type:")]),t._v(" "),t._m(15),a("p",[t._v("Bundled operations range from package management to zfs operations like scrub and even nmap port scanning.")]),t._v(" "),a("p",[t._v("Operations are used within pipelines:")]),t._v(" "),t._m(16),a("p",[t._v("Running a workflow is simple as calling a function:")]),t._v(" "),t._m(17),a("p",[t._v("For a complete listing of workflows check Re-mote "),a("a",{attrs:{href:"https://re-ops.github.io/re-mote",target:"_blank",rel:"noopener noreferrer"}},[t._v("API"),a("OutboundLink")],1),t._v(" documentation.")]),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("Re-mote can invoke distributed Clojure functions using Re-gent processes across the cluster, the functions are defined under re_mote/zero/functions.clj:")]),t._v(" "),t._m(19),a("p",[t._v("Functions may use any bundled Clojure and Java libraries like:")]),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("Adding new libraries is pretty simple:")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("Invoking tasks in the REPL is easy but in some cases we would like to set a task to be executed at repeated short intervals (like collecting metrics):")]),t._v(" "),t._m(23),a("p",[t._v("Another use case is executing long running tasks once a day:")]),t._v(" "),t._m(24),a("p",[t._v("Or even once a week:")]),t._v(" "),t._m(25),a("p",[t._v("Its possible to automate any function call using the watch function including the creation of VMs or provisioning, check Re-share "),a("a",{attrs:{href:"https://re-ops.github.io/re-share",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs"),a("OutboundLink")],1),t._v(" for full API documentation.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[this._v("#")]),this._v(" Intro")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("Prefer the Use simple functions and protocols (also nice for auto completion and composability)")]),t._v(" "),a("li",[t._v("Use Separate REPL instances for Re-mote and Re-core (tough Re-core uses Re-mote)")]),t._v(" "),a("li",[t._v("Use an editor attached to each REPL and re eval changing code if possible")]),t._v(" "),a("li",[t._v("When making large changes use the "),a("a",{attrs:{href:"#reloaded"}},[t._v("Reloaded")]),t._v(" workflow")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"reloaded"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reloaded","aria-hidden":"true"}},[this._v("#")]),this._v(" Reloaded")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ lein repl\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-mote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("go"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnil\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; Re-mote setup and start procedure")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" setup "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k/create-server-keys "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".curve"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("repl/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("es/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("es/start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("web/start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zero/start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-mote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-mote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("When changing a single function its better to re-eval.")]),this._v(" "),s("li",[this._v("Resetting a broken ns will fail and you will need to restart the REPL so its a good idea to re-eval first.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"re-core"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#re-core","aria-hidden":"true"}},[this._v("#")]),this._v(" Re-core")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; Create 5 small redis instances with a 128G Volumes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("create kvm-small vol-128G "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":redis")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nRunning create summary:\n\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("a12af7a0d2")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("d55950759f")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("a9347f072f")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42bd6672e3")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7165e5c87b")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("d55950759f")]),t._v("  AWF_17ZSdVoDKuXB7mtt       redis     ubuntu-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("04")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("168")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("122")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("142")]),t._v("\n       redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7165e5c87b")]),t._v("  AWF_17bgdVoDKuXB7mt9       redis     ubuntu-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("04")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("168")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("122")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("209")]),t._v("\n       redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("a12af7a0d2")]),t._v("  AWF_17X2dVoDKuXB7mtl       redis     ubuntu-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("04")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("168")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("122")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("147")]),t._v("\n       redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42bd6672e3")]),t._v("  AWF_17asdVoDKuXB7mt4       redis     ubuntu-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("04")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("168")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("122")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("196")]),t._v("\n       redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("a9347f072f")]),t._v("  AWF_17aCdVoDKuXB7mt0       redis     ubuntu-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("04")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("168")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("122")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("halt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nRunning halt summary:\n\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("d55950759f")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7165e5c87b")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("a12af7a0d2")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42bd6672e3")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("a9347f072f")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; start all")]),t._v("\n\nRunning start summary:\n\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("d55950759f")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7165e5c87b")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("a12af7a0d2")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42bd6672e3")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("a9347f072f")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("halt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("by-type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nRunning halt summary:\n\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("d55950759f")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7165e5c87b")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("a12af7a0d2")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42bd6672e3")]),t._v("\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("a9347f072f")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matching "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B7mtt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; select instance by partial id matching (git style)")]),t._v("\n\nRunning halt summary:\n\n  ✔ redis-"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("d55950759f")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"re-mote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#re-mote","aria-hidden":"true"}},[this._v("#")]),this._v(" Re-mote")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" sandbox "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Hosts. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":user")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"re-ops"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":ssh-key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/foo/.ssh/id_rsa} ["')]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("168")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("168")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; re-mote.repl.base")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defrecord")]),t._v(" Hosts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("auth hosts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  Shell\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ls "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this target flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run-hosts this "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ls"')]),t._v(" ~target ~flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" listing "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ls hs "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-la"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pretty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-mote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("listing sandbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nRun summary:\n\n   ✔ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("168")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),t._v("\n   ✔ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("168")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v("\n   ✔ "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("168")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[this._v("#")]),this._v(" Functions")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ns")]),t._v(" re-mote.zero.functions\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":require")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("clojure.java.shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":refer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("serializable."),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("me.raynes.fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":refer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list-dir tmpdir exists? file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; Package manager")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":doc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update package manager"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" pkg-update\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("case "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":Ubuntu")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sh "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sudo"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apt"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":FreeBSD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sh "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sudo"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pkg"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex-info "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"not supported"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":os")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("me.raynes.fs for file system manipulation")]),this._v(" "),s("li",[this._v("com.github.oshi for collecting OS/Hardware information")]),this._v(" "),s("li",[this._v("re-scan for running Nmap scans")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Add the library to both re-gent/project.clj and re-mote/project.clj.")]),this._v(" "),s("li",[this._v("Import the required ns/classes into re-mote.zero.functions and re-gent.zero.functions")]),this._v(" "),s("li",[this._v("Build the re-gent binary using bin/binary.sh")]),this._v(" "),s("li",[this._v("Deploy re-gent to the machines using the deploy workflow")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"scheduling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scheduling","aria-hidden":"true"}},[this._v("#")]),this._v(" Scheduling")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; collecting RAM, Network, Load anc Cpu usage")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" stats-jobs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("watch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":ram")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seconds "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ram-persist hs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("watch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":net")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seconds "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("net-persist hs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("watch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":cpu")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seconds "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpu-persist hs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("watch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":load")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seconds "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("load-persist hs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; running apt uprgrade on hosts every day at 4AM")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" apt-jobs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hosts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("watch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":upgrade")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("every-day "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("upgrade hosts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; Running zfs scrub every Saturday at 4AM")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" zfs-maintain "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":keys")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hosts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" hs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("host "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("first")]),t._v(" hosts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("watch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keyword")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),t._v(" host "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-datastore-scrub"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("at-day DateTimeConstants/SATURDAY "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrub hs "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"datastore"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("email "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tofrom "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<")]),t._v("< "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scrubing ~{host}/datastore"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);