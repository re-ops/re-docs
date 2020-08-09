(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{357:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),a("p",[t._v("This guide is meant to provide a quick way to learn about Re-ops and its capabilities, a more in-depth coverage is provided under the "),a("a",{attrs:{href:"http://192.168.122.71:8080/re-docs/setup/",target:"_blank",rel:"noopener noreferrer"}},[t._v("setup"),a("OutboundLink")],1),t._v(" guide.")]),t._v(" "),a("p",[t._v("By the end of it you should be able to:")]),t._v(" "),a("ul",[a("li",[t._v("Quickly create LXC instances using Re-core creation DSL")]),t._v(" "),a("li",[t._v("Run distributed Clojure functions on your local container cluster.")]),t._v(" "),a("li",[t._v("Monitor, query and analyse the state of the container instances.")]),t._v(" "),a("li",[t._v("Gain good understanding of the core capabilities of Re-ops.")])]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("Setup prerequisites:")]),t._v(" "),a("ul",[a("li",[t._v("Ubuntu 20.04 with 4 core and 8GB of RAM.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon correto 8"),a("OutboundLink")],1),t._v(" JDK (installable from a DEB file).")])]),t._v(" "),a("p",[t._v("Note:")]),t._v(" "),a("ul",[a("li",[t._v("The automated setup process will install LXD and additional tooling, make sure to run the following on a machine you are comfortable with making those changes to (a VM).")])]),t._v(" "),a("p",[t._v("If you have already make sure to install Amazon corretto JDK 8:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://corretto.aws/downloads/latest/amazon-corretto-8-x64-linux-jdk.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dpkg -i amazon-corretto-8-x64-linux-jdk.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" -f "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("p",[t._v("We will use "),a("a",{attrs:{href:"https://github.com/re-ops/re-cipes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Re-cipes"),a("OutboundLink")],1),t._v(" here in provision and setup the tooling and repositories required to run Re-ops:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/re-ops/re-cipes/releases/download/0.1.27/re-cipes -P /tmp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /tmp/re-cipes\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/re-ops/re-cipes.git ~/re-cipes\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -r ~/re-cipes/resources /tmp\n")])])]),a("p",[t._v("Make sure to adjust the user and home settings in /tmp/resources/config.edn:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# default user is re-ops")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /tmp/resources/config.edn\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n :user "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"re-ops"')]),t._v("\n :home "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/re-ops"')]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Now launch Re-cipes and let it run through:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /tmp/re-cipes provision --plan re-cipes.profiles/re-ops-standalone\n")])])]),a("h2",{attrs:{id:"image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image"}},[t._v("#")]),t._v(" Image")]),t._v(" "),a("p",[t._v("For this setup we will use a local LXD server to run containers, a container image is used as a base from which they are created:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/code/re-ops/re-pack\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/.ssh/id_rsa.pub "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" http/authorized_keys\npacker build -var "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user=re-ops'")]),t._v(" src/lxd/ubuntu-20.04/ubuntu-20.04-server-amd64.json\n")])])]),a("p",[t._v("Check "),a("RouterLink",{attrs:{to:"/quickstart/setup/re-pack.html#build"}},[t._v("Re-pack")]),t._v(" more detailed information on creating Re-ops ready images on multiple hypervisors.")],1),t._v(" "),a("h2",{attrs:{id:"elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[t._v("#")]),t._v(" Elasticsearch")]),t._v(" "),a("p",[t._v("We will use a local docker container in order to spin up Elasticsearch quickly:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start docker-compose@elasticsearch.service\n")])])]),a("p",[t._v("Check "),a("RouterLink",{attrs:{to:"/quickstart/setup/re-dock.html"}},[t._v("Re-dock")]),t._v(" for running ELK + Grafana.")],1),t._v(" "),a("h2",{attrs:{id:"launch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch"}},[t._v("#")]),t._v(" Launch")]),t._v(" "),a("p",[t._v("We will launch the REPL:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/code/re-ops/re-core\ntmux\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# going to take a while as dependencies and Lein are downloaded")]),t._v("\nlein repl\n")])])]),a("p",[t._v("Now we will start the system and create our first instance!:")]),t._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("go"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; creating a type for the system that we will create next")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("create cog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("'re-cipes")]),t._v(".profiles/lean default-src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":lean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; our first container based system")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("create lxc defaults "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("c1")]),t._v("-medium local "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":lean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Our first running instance!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[t._v("#")]),t._v(" Run")]),t._v(" "),a("p",[t._v("Once the instance is running we can deploy Re-gent into it, we start with building it:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/code/re-ops/re-gent\n./bin/binary.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# allow ZeroMQ traffic")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ufw allow "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v("\n")])])]),a("p",[t._v("Back in the REPL we deploy the agent and run a function once the host is registered:")]),t._v(" "),a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; assumes change your home path to match")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deploy "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hosts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matching "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":ip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/re-ops/code/re-ops/re-gent/target/re-gent"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; wait couple of seconds to see the registered host")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("registered-hosts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; run a distributed datalog query on the hosts grabbing jvm version")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run-hosts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hosts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matching "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" re-cog.facts.datalog/run-query "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":find")]),t._v(" ?v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":where")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":java")]),t._v("/version ?v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":second")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);