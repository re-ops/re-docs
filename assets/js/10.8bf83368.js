(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{356:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("Re-ops uses re-ops.edn and secrets.edn for its configuration, example templates can be found under re-core/resources folder:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" resources/re-ops.edn ~/.re-ops.edn\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" resources/secrets.edn /tmp/re-ops.edn\n")])])]),s("p",[s("a",{attrs:{href:"https://github.com/juxt/aero",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aero"),s("OutboundLink")],1),t._v(" is used as the base library for managing secrets references and getting access to environment from re-ops.edn.")]),t._v(" "),s("p",[t._v("The configuration file is divided to the following sections:")]),t._v(" "),s("ul",[s("li",[t._v("Re-core section which includes the Hypervisors used, Elasticsearch index, Queue folder and logging paths.")]),t._v(" "),s("li",[t._v("Re-mote section (currently includes only the Elasticsearch index used for publishing metrics)")]),t._v(" "),s("li",[t._v("Shared settings which are common to both Re-core and Re-mote including: Elasticsearch settings SSH settings and pgp.")]),t._v(" "),s("li",[t._v("Riemann setting (for publishing metrics into Riemann).")])]),t._v(" "),s("p",[t._v("Any configuration change made in the file can be made available by running:")]),t._v(" "),s("div",{staticClass:"language-clojure extra-class"},[s("pre",{pre:!0,attrs:{class:"language-clojure"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"secret-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secret-management"}},[t._v("#")]),t._v(" Secret management")]),t._v(" "),s("p",[t._v("The secrets.edn includes passwords and tokens which are kept in a pgp encrypted file, once copied into /tmp we can add the information matching the hypervisors we use.")]),t._v(" "),s("p",[t._v("We will now encrypt the file by first generating the pgp password protected keypair :")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Generate a keyring and keys")]),t._v("\ngpg --no-default-keyring --keyring trustedkeys.gpg --fingerprint\ngpg --no-default-keyring --keyring trustedkeys.gpg --gen-key\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A public and private keyrings exported")]),t._v("\ngpg --no-default-keyring --keyring trustedkeys.gpg --export "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" keys/public.gpg\ngpg --no-default-keyring --keyring trustedkeys.gpg --export-secret-keys "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" keys/secret.gpg\n")])])]),s("p",[t._v("Once the keys are ready we can encrypte our secrets file:")]),t._v(" "),s("div",{staticClass:"language-clojure extra-class"},[s("pre",{pre:!0,attrs:{class:"language-clojure"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("require '"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-share.config.secret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":refer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("save-secrets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; create a secrets file under the re-core project folder")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("save-secrets "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/tmp/secrets.edn"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"secrets"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keys/public.gpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("When launching re-core a Tmux window pane will open into which we should enter our keypair password.")]),t._v(" "),s("h2",{attrs:{id:"shared"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shared"}},[t._v("#")]),t._v(" Shared")]),t._v(" "),s("p",[t._v("The shared configuration options include parts which are common to both Re-mote and Re-core:")]),t._v(" "),s("div",{staticClass:"language-clojure extra-class"},[s("pre",{pre:!0,attrs:{class:"language-clojure"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":shared")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":elasticsearch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"elastic"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":pass")]),t._v(" #"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ref")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":secrets")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":elasticsearch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":pass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":ssh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":private-key-path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/foo/.ssh/id_rsa"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   \n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":pgp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keys/public.gpg"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keys/secret.gpg"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":pass")]),t._v(" #"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ref")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":secrets")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":pgp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":pass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("table",{staticClass:"tableblock frame-all grid-all spread"},[s("caption",{staticClass:"title"},[t._v("Table 1. Shared Settings")]),t._v(" "),s("colgroup",[s("col",{staticStyle:{width:"25%"}}),t._v(" "),s("col",{staticStyle:{width:"25%"}}),t._v(" "),s("col",{staticStyle:{width:"25%"}}),t._v(" "),s("col",{staticStyle:{width:"25%"}})]),t._v(" "),s("thead",[s("tr",[s("th",{staticClass:"tableblock halign-left valign-top"},[t._v("Section")]),t._v(" "),s("th",{staticClass:"tableblock halign-left valign-top"},[t._v("Property")]),t._v(" "),s("th",{staticClass:"tableblock halign-left valign-top"},[t._v("Description")]),t._v(" "),s("th",{staticClass:"tableblock halign-left valign-top"},[t._v("Comments")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticClass:"tableblock halign-left valign-top",attrs:{rowspan:"4"}},[s("p",{staticClass:"tableblock"},[t._v("elasticsearch")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("host")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("The host Elasticsearch is running on")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"})]),t._v(" "),s("tr",[s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("port")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("http API port (9200 by default)")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"})]),t._v(" "),s("tr",[s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("user")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("Elasticsearch user name")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"})]),t._v(" "),s("tr",[s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("pass")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("Elasticsearch password")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"})]),t._v(" "),s("tr",[s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("ssh")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("private-key-path")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("Private ssh key path")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("Used to perform remote tasks over ssh")])])]),t._v(" "),s("tr",[s("td",{staticClass:"tableblock halign-left valign-top",attrs:{rowspan:"3"}},[s("p",{staticClass:"tableblock"},[t._v("pgp")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("public")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("public pgp key")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"})]),t._v(" "),s("tr",[s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("private")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("private pgp key")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"})]),t._v(" "),s("tr",[s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("pass")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("private key password")])]),t._v(" "),s("td",{staticClass:"tableblock halign-left valign-top"},[s("p",{staticClass:"tableblock"},[t._v("keeps the password available between "),s("a",{attrs:{href:"/usage/#reloaded"}},[t._v("reset")]),t._v(" operations.")])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);