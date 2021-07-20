(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{367:function(t,e,s){"use strict";s.r(e);var a=s(44),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"re-gent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#re-gent"}},[t._v("#")]),t._v(" Re-gent")]),t._v(" "),s("p",[t._v("Re-gent is a self encapsulated binary file (an uberjar embedded in a shell script), we use Re-mote do deploy Re-gent instances on machines that we want to manage.")]),t._v(" "),s("h2",{attrs:{id:"build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),s("p",[t._v("We build a single distributable binary file:")]),t._v(" "),s("div",{staticClass:"language-clojure extra-class"},[s("pre",{pre:!0,attrs:{class:"language-clojure"}},[s("code",[t._v("$ git clone git@github.com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":re-ops")]),t._v("/re-gent.git\n$ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("cd")]),t._v(" re-gent\n# Now start the REPL environment\n$ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("/bin/build.sh\n")])])]),s("p",[t._v("The file is created under re-gent/target/re-gent, you can copy this file to a remote machine and run:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You need to copy .curve/server-public.key keys from the server to .curve")]),t._v("\n$ ./re-gent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("log-level"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"deploy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[t._v("#")]),t._v(" Deploy")]),t._v(" "),s("p",[t._v("The deployment process of Re-gent is automated by Re-mote, all you need to do in order to deploy the latest version of the agent is to run:")]),t._v(" "),s("div",{staticClass:"language-clojure extra-class"},[s("pre",{pre:!0,attrs:{class:"language-clojure"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-mote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deploy develop "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"re-gent/target/re-gent"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; agent binary path")]),t._v("\n\nRun curve copy summary:\n\n  ✔ re-"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("a")]),t._v("\n  ✔ re-"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("e")]),t._v("\n\n\nRun kill "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("agent")]),t._v(" summary:\n\n  ✔ re-"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("a")]),t._v("\n  ✔ re-"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("e")]),t._v("\n\n\nRun scp summary:\n\n  ✔ re-"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("a")]),t._v("\n  ✔ re-"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("#re_mote.repl.base.Hosts "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":auth")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vagrant"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":hosts")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"re-a"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"re-e"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":failure")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":hosts")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"re-a"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"re-e"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":success")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":code")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"re-a"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":uuid")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d2687d896054430ea84df44ae54d5b92"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":code")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"re-e"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":uuid")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d52e9260043c4eb787526eaebba16c11"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),s("p",[t._v("The agents start and register back to the server, we list the registered instances by:")]),t._v(" "),s("div",{staticClass:"language-clojure extra-class"},[s("pre",{pre:!0,attrs:{class:"language-clojure"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-mote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("registered-hosts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                re-"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("a")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("000A")]),t._v("-"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0019")]),t._v("\n                re-"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("e")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0000")]),t._v("-"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("001B")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n\n")])])]),s("p",[t._v("Note: Make sure to have the ZeroMQ firewall port open on the server side (an available port is automatically chosen and can be viewed in the logs).")]),t._v(" "),s("p",[t._v("Using the automated method should result with a .curve folder on the agent side that contains the server and client public keys and the client secret key:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" ~/.curve\n client-private.key  client-public.key  server-public.key\n")])])]),s("p",[t._v("A similar folder (with the server private key) should be created in Re-mote path:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" re-mote/.curve\n client-private.key  client-public.key  server-private.key server-public.key\n")])])]),s("p",[t._v("Note: You should never copy or expose server-private.key to your clients.")])])}),[],!1,null,null,null);e.default=n.exports}}]);