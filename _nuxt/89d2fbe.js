(window.webpackJsonp=window.webpackJsonp||[]).push([[12,13],{244:function(t,n,o){var content=o(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("32400742",content,!0,{sourceMap:!1})},246:function(t,n,o){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},247:function(t,n,o){"use strict";o.r(n);var e={props:{label:{type:String,required:!0},icon:{type:String,required:!0}},data:function(){return{showTitle:!1}}},l=(o(250),o(6)),component=Object(l.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"relative mx-auto my-auto",on:{mouseover:function(n){t.showTitle=!0},focus:function(n){t.showTitle=!0},blur:function(n){t.showTitle=!1},mouseleave:function(n){t.showTitle=!1}}},[o("img",{staticClass:"h-14 w-auto mx-4 my-4 transform duration-75 hover:scale-110",attrs:{src:"/icons/"+t.icon,alt:t.label}}),t._v(" "),o("div",{staticClass:"opacity-0 pointer-events-none absolute left-0 right-0 mx-auto text-center z-10 bg-gray-800 bg-opacity-80 text-white rounded-md p-1 font-bold text-xs",class:t.showTitle?"is-active":null},[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports},250:function(t,n,o){"use strict";o(244)},251:function(t,n,o){var e=o(41)((function(i){return i[1]}));e.push([t.i,".tooltip{\n  transform:scale(0);\n  transform-origin:top center\n}\n.is-active{\n  -webkit-animation:pulse .2s cubic-bezier(0,0,.2,1) forwards;\n  animation:pulse .2s cubic-bezier(0,0,.2,1) forwards\n}\n@-webkit-keyframes pulse{\n0%{\n    transform:scale(0);\n    opacity:0\n}\n50%{\n    transform:scale(.99)\n}\nto{\n    transform:scale(1);\n    opacity:1;\n    visibility:visible\n}\n}\n@keyframes pulse{\n0%{\n    transform:scale(0);\n    opacity:0\n}\n50%{\n    transform:scale(.99)\n}\nto{\n    transform:scale(1);\n    opacity:1;\n    visibility:visible\n}\n}",""]),e.locals={},t.exports=e},252:function(t,n,o){var content=o(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("28d2b336",content,!0,{sourceMap:!1})},273:function(t,n,o){"use strict";o(252)},274:function(t,n,o){var e=o(41),l=o(246),r=o(275),c=e((function(i){return i[1]})),v=l(r);c.push([t.i,".med-blue[data-v-0478bbfd]{\n  background-color:#335480\n}\n.bg-image[data-v-0478bbfd]{\n  background-image:url("+v+");\n  background-size:100%\n}\n@media (min-width:640px){\n.bg-image[data-v-0478bbfd]{\n    background-size:20%\n}\n}\n.title[data-v-0478bbfd]{\n  color:#353f4b;\n  font-weight:700\n}\n.subtitle[data-v-0478bbfd]{\n  margin-bottom:14px\n}\n.exp-list li[data-v-0478bbfd],.subtitle[data-v-0478bbfd]{\n  color:#243453\n}",""]),c.locals={},t.exports=c},275:function(t,n,o){t.exports=o.p+"img/circuit-board.8b78ce0.svg"},283:function(t,n,o){"use strict";o.r(n);var e={components:{ToolIcon:o(247).default}},l=(o(273),o(6)),component=Object(l.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"pb-12 lg:pb-24 med-blue lg:pt-20 bg-image mx-auto p-5 w-full overflow-hidden"},[o("div",{staticClass:"mx-auto my-5 max-w-5xl relative"},[o("div",{staticClass:"bg-white shadow-xl rounded-lg"},[o("div",{staticClass:"px-4 py-5 sm:px-6"},[o("h2",{staticClass:"title mb-4 text-2xl lg:text-4xl",attrs:{id:"skills"}},[t._v("\n          Skills & Experience\n        ")]),t._v(" "),o("div",{staticClass:"flex flex-col lg:flex-row"},[o("div",{staticClass:"flex-grow max-w-lg"},[o("h3",{staticClass:"subtitle text-xl lg:text-3xl"},[t._v("\n              Technologies and tools I use\n            ")]),t._v(" "),o("div",{staticClass:"grid grid-cols-3 sm:grid-cols-4 mr-10"},[o("ToolIcon",{attrs:{label:"HTML5",icon:"html.png"}}),t._v(" "),o("ToolIcon",{attrs:{label:"Javascript ES6",icon:"js.png"}}),t._v(" "),o("ToolIcon",{attrs:{label:"CSS",icon:"css.png"}}),t._v(" "),o("ToolIcon",{attrs:{label:"GraphQL",icon:"graphql.png"}}),t._v(" "),o("ToolIcon",{attrs:{label:"Nuxt JS",icon:"nuxt.png"}}),t._v(" "),o("ToolIcon",{attrs:{label:"Visual Studio C#",icon:"visualstudio.png"}}),t._v(" "),o("ToolIcon",{attrs:{label:"Wordpress",icon:"wordpress.png"}}),t._v(" "),o("ToolIcon",{attrs:{label:"Git",icon:"git.png"}}),t._v(" "),o("ToolIcon",{attrs:{label:"Vue JS",icon:"vuejs.png"}}),t._v(" "),o("ToolIcon",{attrs:{label:"Adobe Illustrator",icon:"illustrator.png"}}),t._v(" "),o("ToolIcon",{attrs:{label:"Adobe Photoshop",icon:"photoshop.png"}}),t._v(" "),o("ToolIcon",{attrs:{label:"Figma",icon:"figma.png"}})],1)]),t._v(" "),t._m(0)])])])])])}),[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"flex-grow lg:border-l lg:pl-10 max-w-xl"},[o("h3",{staticClass:"subtitle mt-10 lg:mt-0 text-xl lg:text-3xl"},[t._v("\n              I am experienced in\n            ")]),t._v(" "),o("ul",{staticClass:"list-disc list-outside ml-5 leading-6 exp-list space-y-3"},[o("li",[t._v("Developing "),o("b",[t._v("full-stack applications")]),t._v(" using modern javascript frameworks")]),t._v(" "),o("li",[t._v("Developing with "),o("b",[t._v("Wordpress")]),t._v(" CMS and "),o("b",[t._v("WooCommerce")])]),t._v(" "),o("li",[t._v("Building "),o("b",[t._v("Visual Studio C#")]),t._v(" desktop applications")]),t._v(" "),o("li",[t._v("Integrating web & desktop applications with "),o("b",[t._v("RESTful API services")])]),t._v(" "),o("li",[t._v("Vector creation in "),o("b",[t._v("Adobe Illustrator")])]),t._v(" "),o("li",[t._v("Photo manipulation & colour correction in "),o("b",[t._v("Adobe Photoshop")])]),t._v(" "),o("li",[t._v("Code & project management using "),o("b",[t._v("Git")])]),t._v(" "),o("li",[t._v("Website performance analysis using "),o("b",[t._v("Google Analytics")])]),t._v(" "),o("li",[t._v("Marketing automation in "),o("b",[t._v("Klaviyo")]),t._v(" & "),o("b",[t._v("Facebook Ads Manager")])]),t._v(" "),o("ul")])])}],!1,null,"0478bbfd",null);n.default=component.exports;installComponents(component,{ToolIcon:o(247).default})}}]);