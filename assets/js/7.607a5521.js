(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{179:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Re-ops uses re-ops.edn and secrets.edn for its configuration, example templates can be found under re-core/resources folder:")]),t._v(" "),t._m(1),a("p",[a("a",{attrs:{href:"https://github.com/juxt/aero",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aero"),a("OutboundLink")],1),t._v(" is used as the base library for managing secrets references and getting access to environment from re-ops.edn.")]),t._v(" "),a("p",[t._v("The configuration file is divided to the following sections:")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("Any configuration change made in the file can be made available by running:")]),t._v(" "),t._m(3),t._m(4),t._v(" "),a("p",[t._v("The secrets.edn includes passwords and tokens which are kept in a pgp encrypted file, once copied into /tmp we can add the information matching the hypervisors we use.")]),t._v(" "),a("p",[t._v("We will now encrypt the file by first generating the pgp password protected keypair :")]),t._v(" "),t._m(5),a("p",[t._v("Once the keys are ready we can encrypte our secrets file:")]),t._v(" "),t._m(6),a("p",[t._v("When launching re-core a Tmux window pane will open into which we should enter our keypair password.")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("The shared configuration options include parts which are common to both Re-mote and Re-core:")]),t._v(" "),t._m(8),t._m(9)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("cp")]),this._v(" resources/re-ops.edn ~/.re-ops.edn\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("cp")]),this._v(" resources/secrets.edn /tmp/re-ops.edn\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Re-core section which includes the Hypervisors used, Elasticsearch index, Queue folder and logging paths.")]),this._v(" "),s("li",[this._v("Re-mote section (currently includes only the Elasticsearch index used for publishing metrics)")]),this._v(" "),s("li",[this._v("Shared settings which are common to both Re-core and Re-mote including: Elasticsearch settings SSH settings and pgp.")]),this._v(" "),s("li",[this._v("Riemann setting (for publishing metrics into Riemann).")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"secret-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secret-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Secret management")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Generate a keyring and keys")]),t._v("\n$ gpg --no-default-keyring --keyring trustedkeys.gpg --fingerprint\n$ gpg --no-default-keyring --keyring trustedkeys.gpg --gen-key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A public and private keyrings exported")]),t._v("\n$ gpg --no-default-keyring --keyring trustedkeys.gpg --export "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" keys/public.gpg\n$ gpg --no-default-keyring --keyring trustedkeys.gpg --export-secret-keys "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(' keys/secret.gpg"\n')])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("require '"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-share.config.secret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":refer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("save-secrets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; create a secrets file under the re-core project folder")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("re-core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("λ: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("save-secrets "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/tmp/secrets.edn"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"secrets"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keys/public.gpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"shared"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shared","aria-hidden":"true"}},[this._v("#")]),this._v(" Shared")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-clojure extra-class"},[a("pre",{pre:!0,attrs:{class:"language-clojure"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":shared")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":elasticsearch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":host")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":port")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":user")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"elastic"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":pass")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ref")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":secrets")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":elasticsearch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":pass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":ssh")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":private-key-path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/foo/.ssh/id_rsa"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":pgp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keys/public.gpg"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keys/secret.gpg"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":pass")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ref")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":secrets")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":pgp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":pass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"tableblock frame-all grid-all spread"},[a("caption",{staticClass:"title"},[t._v("Table 1. Shared Settings")]),t._v(" "),a("colgroup",[a("col",{staticStyle:{width:"25%"}}),t._v(" "),a("col",{staticStyle:{width:"25%"}}),t._v(" "),a("col",{staticStyle:{width:"25%"}}),t._v(" "),a("col",{staticStyle:{width:"25%"}})]),t._v(" "),a("thead",[a("tr",[a("th",{staticClass:"tableblock halign-left valign-top"},[t._v("Section")]),t._v(" "),a("th",{staticClass:"tableblock halign-left valign-top"},[t._v("Property")]),t._v(" "),a("th",{staticClass:"tableblock halign-left valign-top"},[t._v("Description")]),t._v(" "),a("th",{staticClass:"tableblock halign-left valign-top"},[t._v("Comments")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticClass:"tableblock halign-left valign-top",attrs:{rowspan:"4"}},[a("p",{staticClass:"tableblock"},[t._v("elasticsearch")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("host")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("The host Elasticsearch is running on")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"})]),t._v(" "),a("tr",[a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("port")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("http API port (9200 by default)")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"})]),t._v(" "),a("tr",[a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("user")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("Elasticsearch user name")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"})]),t._v(" "),a("tr",[a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("pass")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("Elasticsearch password")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"})]),t._v(" "),a("tr",[a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("ssh")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("private-key-path")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("Private ssh key path")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("Used to perform remote tasks over ssh")])])]),t._v(" "),a("tr",[a("td",{staticClass:"tableblock halign-left valign-top",attrs:{rowspan:"3"}},[a("p",{staticClass:"tableblock"},[t._v("pgp")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("public")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("public pgp key")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"})]),t._v(" "),a("tr",[a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("private")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("private pgp key")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"})]),t._v(" "),a("tr",[a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("pass")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("private key password")])]),t._v(" "),a("td",{staticClass:"tableblock halign-left valign-top"},[a("p",{staticClass:"tableblock"},[t._v("used during sync operations")])])])])])}],!1,null,null,null);s.default=n.exports}}]);