(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{176:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("Just like the abstractions that we use the components that Re-ops is made out of are composable and detachable, you can use Re-core or Re-mote or both, you can add Re-gent or not, depending on your requirements.")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("Re-mote and Re-gent use two network protocols:")]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("The ZeroMQ server port is dynamically picked (from the 8080-9000 range) on Re-mote side and agents connect back to that port (the deploy workflow sets it automatically on the agent).")]),t._v(" "),e("p",[t._v("Note: make sure that on the server firewall the incoming port is open.")]),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("Re-mote makes use of SSH RSA keys and ZeroMQ CurveMQ keys (for Re-gent), SSH is considered the secure base band on which both Re-gent and its CurveMQ keys are distributed.")]),t._v(" "),t._m(4),e("p",[t._v("This scheme relies heavily on the security of SSH and that of CurveMQ, no external security auditing has taken place on Re-ops but the use of existing and vetted protocols should provide reasonable guarantees.")]),t._v(" "),e("p",[t._v("Any reported security issue will be given high priority in fixing and support time, please submit those under the project "),e("a",{attrs:{href:"https://github.com/re-ops/re-mote",target:"_blank",rel:"noopener noreferrer"}},[t._v("Re-mote"),e("OutboundLink")],1),t._v(" page.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#components","aria-hidden":"true"}},[this._v("#")]),this._v(" Components")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"networking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#networking","aria-hidden":"true"}},[this._v("#")]),this._v(" Networking")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("SSH, the secure shell protocol, usually using port 22")]),this._v(" "),s("li",[this._v("ZeroMQ, a socket protocol on top of TCP that include PUB/SUB, Mesh and other patterns built in.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"security"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security","aria-hidden":"true"}},[this._v("#")]),this._v(" Security")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-clojure extra-class"},[e("pre",{pre:!0,attrs:{class:"language-clojure"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; re-gent")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" #^"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":category")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":re-gent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(' deploy\n  "deploy re-gent '),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" setup .curve remotely:\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deploy sandbox \\"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/re-gent\\")"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":keys")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("auth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" hs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" bin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":keys")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" auth home "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<")]),t._v("< "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/~{user}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" dest "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<")]),t._v("< "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~{home}/.curve"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mkdir hs dest "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-p"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" | "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scp "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('".curve/server-public.key"')]),t._v(" dest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" | "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pretty "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"curve copy"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kill-agent hs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" | "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pretty "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kill agent"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scp hs bin home"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" | "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pick successful"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" | "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start-agent home"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" | "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pretty "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n")])])])}],!1,null,null,null);s.default=a.exports}}]);