(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{355:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("Re-ops is a Clojure based live REPL environment for performing VM orchestration and remote operations, it offers high development speed and flexibility.")]),t._v(" "),a("p",[t._v("Its main components include:")]),t._v(" "),a("ol",[a("li",[t._v("Re-core, orchestration of Virtual and Physical machines.")]),t._v(" "),a("li",[t._v("Re-mote, performing remote operations over SSH and ZeroMQ.")]),t._v(" "),a("li",[t._v("Re-gent, an agent for running distributed Clojure functions.")])]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("Most (if not all) configuration management tools currently are static in nature, you write your code deploy and apply (rinse and repeat), still our live environments are changing rapidly and having this cycle in place really slows our reaction time down, Re-ops is a re-take on how remote operations would look like when using a live REPL to drive them, its main abstractions include pipelines and operations that are easy to compose because they are just plain functions.")]),t._v(" "),a("h2",{attrs:{id:"why-clojure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-clojure"}},[t._v("#")]),t._v(" Why Clojure")]),t._v(" "),a("p",[t._v("Re-ops encompasses the functionality of multiple tools, ranging from remote automation to data collection and VM orchestration.")]),t._v(" "),a("p",[t._v("Most existing tools need to re-invent:")]),t._v(" "),a("ul",[a("li",[t._v("Namespaces, a way of dividing the code into components.")]),t._v(" "),a("li",[t._v("Composition, how you compose reusable code.")]),t._v(" "),a("li",[t._v("Packaging, how the code is distributed, how you use external libraries.")]),t._v(" "),a("li",[t._v("Interoperability, how you interop with external components and systems.")])]),t._v(" "),a("p",[t._v("By using Clojure we gain a lot those things for free:")]),t._v(" "),a("ul",[a("li",[t._v("Namespace packaging are built in.")]),t._v(" "),a("li",[t._v("Composition is first class (using functional composition, protocols etc..)")]),t._v(" "),a("li",[t._v("We can use any JVM library (or write our own) to integrate with other components.")])]),t._v(" "),a("p",[t._v("But the biggest advantage is the that Clojure is really geared toward processing transforming and analysing data which is abundantly available when dealing with computerized systems.")]),t._v(" "),a("h2",{attrs:{id:"abstractions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstractions"}},[t._v("#")]),t._v(" Abstractions")]),t._v(" "),a("p",[t._v("Both Re-mote and Re-core use similar patterns to describe workflows and operations that work against remote systems and hypervisors, the first one is pipelines:")]),t._v(" "),a("ul",[a("li",[t._v("A Series of functions (operations)")]),t._v(" "),a("li",[t._v("Data flows from one function to the next")]),t._v(" "),a("li",[t._v("Intermediate functions operate on data")]),t._v(" "),a("li",[t._v("Final function output, publish, block/run async etc..")]),t._v(" "),a("li",[t._v("They are composable (just functions)")])]),t._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[t._v("\n                            filtering             output\n                                ^                   ^\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" listing "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("              |                   |\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ls hs "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-la"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pick successful"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pretty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   |                     |\n   |                     V\n   |       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":successful")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":failure")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   V\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; run expansion")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("| "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("| "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ls "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pick "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pretty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; pipe expansion")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this' res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ls hs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pick this' res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The second set of abstractions include the Hosts record in Re-mote:")]),t._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defrecord")]),t._v(" Hosts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("auth hosts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Which represents a collection of hosts and the ssh authentication information require to login into them,  we add new operation on hosts by extending them with protocols:")]),t._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defprotocol")]),t._v(" Pkg\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("update\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("extend-type Hosts\n  Pkg\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("update "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; updating packages")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("..")]),t._v(".\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("By using protocols this way we gain infinite expansion options, similarly Re-core Systems and Types use a similar scheme:")]),t._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defrecord")]),t._v(" Systems "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defrecord")]),t._v(" Types "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Both Systems (VMs, containers or physical machines) and Types (System provision info) are composed of a set of protocols that are used from pipelines:")]),t._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defprotocol")]),t._v(" Jobs\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"System jobs"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provision "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("..")]),t._v(".\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("extend-type Systems\n  Jobs\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":keys")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("systems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("schedule m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stop"')]),t._v(" systems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":keys")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("systems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("schedule m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),t._v(" systems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":keys")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("systems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("this "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("schedule m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"create"')]),t._v(" systems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("..")]),t._v(".\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Just like Re-mote Hosts type we compose operations into pipelines:")]),t._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("list")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"List available instances:\n    (list) ; list all systems\n    (list ip) ; list all systems that have an ip (running)\n    (list identity :types) ; list all types\n  "')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("list")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("identity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":systems")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("list")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":systems")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("f")]),t._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("case on\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":systems")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ls systems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filter-by "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pretty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":types")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ls types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pretty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);