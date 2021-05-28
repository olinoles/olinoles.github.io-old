(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"h-8 w-auto sm:h-10",attrs:{id:"logo",src:n(153),alt:"Oliver Noles"}})])])}],r=n(15),o={components:{MenuIcon:r.h,XIcon:r.j},data:function(){return{isMobileMenuOpen:!1,links:[{label:"About",path:{path:"/",hash:""}},{label:"Skills",path:{path:"/",hash:"skills"}},{label:"Projects",hasSubMenu:!0,path:{path:"",hash:""},subItems:[{label:"ASColour Colourmatic",path:"/projects/ascolour"},{label:"3D Drone Customiser",path:"/projects/customiser"},{label:"Order Dispatch System",path:"/projects/dispatch"}]},{label:"Interests",path:{path:"/",hash:"interests"}},{label:"Contact",path:{path:"/",hash:"contact"}}]}},watch:{$route:function(){this.isMobileMenuOpen=!1}}},c=(n(219),n(6)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",[l("div",{staticClass:"sticky top-0 z-50 bg-white shadow-md"},[l("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6"},[l("div",{staticClass:"flex justify-between items-center py-6 md:justify-start md:space-x-10"},[t._m(0),t._v(" "),l("div",{staticClass:"-mr-2 -my-2 md:hidden"},[l("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{type:"button","aria-expanded":"false"},on:{click:function(e){t.isMobileMenuOpen=!0}}},[l("span",{staticClass:"sr-only"},[t._v("Open menu")]),t._v(" "),l("MenuIcon",{staticClass:"h-6 w-6"})],1)]),t._v(" "),l("nav",{staticClass:"hidden md:flex space-x-10"},t._l(t.links,(function(link){return l("HeaderNavItem",{key:"linkitem-"+link.label,attrs:{label:link.label,path:link.path,"has-sub-menu":link.hasSubMenu,"sub-menu-items":link.subItems}})})),1)])]),t._v(" "),t.isMobileMenuOpen?l("button",{staticClass:"fixed top-0 bottom-0 left-0 right-0 h-full w-full cursor-default focus:outline-none",attrs:{"aria--hidden":"true"},on:{click:function(e){t.isMobileMenuOpen=!1}}}):t._e(),t._v(" "),l("transition",{attrs:{name:"flyout"}},[t.isMobileMenuOpen?l("div",{staticClass:"absolute z-50 top-0 inset-x-0 p-2 transform origin-top-right md:hidden"},[l("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"},[l("div",{staticClass:"pt-5 pb-6 px-5"},[l("div",{staticClass:"flex items-center justify-between"},[l("div",[l("img",{staticClass:"h-8 w-auto",attrs:{id:"logo",src:n(153),alt:"Oliver Noles"}})]),t._v(" "),l("div",{staticClass:"-mr-2"},[l("button",{staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{type:"button"},on:{click:function(e){t.isMobileMenuOpen=!1}}},[l("span",{staticClass:"sr-only"},[t._v("Close menu")]),t._v(" "),l("XIcon",{staticClass:"h-6 w-6"})],1)])]),t._v(" "),l("div",{staticClass:"mt-6"},[l("nav",{staticClass:"grid gap-y-8"},t._l(t.links,(function(link){return l("HeaderNavItemMobile",{key:"linkitem-"+link.label,attrs:{label:link.label,path:link.path,"has-sub-menu":link.hasSubMenu,"sub-menu-items":link.subItems}})})),1)])])])]):t._e()])],1)])}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderNavItem:n(242).default,HeaderNavItemMobile:n(245).default,Header:n(111).default})},112:function(t,e,n){"use strict";n.r(e);var l={},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"bg-gray-900 p-5 text-center text-gray-600"},[t._v("\n    © Oliver Noles "+t._s((new Date).getFullYear())),n("br"),t._v("\n    I built this website myself! You can view the "),n("a",{staticClass:"text-gray-500 hover:underline",attrs:{rel:"noreferrer",target:"_blank",href:"https://github.com/olinoles/olinoles.github.io"}},[t._v("source here")]),t._v(" on GitHub.\n  ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(112).default})},153:function(t,e,n){t.exports=n.p+"img/oliver.9b8dc1e.png"},154:function(t,e,n){var content=n(220);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("3f2c2002",content,!0,{sourceMap:!1})},155:function(t,e,n){var content=n(222);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("43de553f",content,!0,{sourceMap:!1})},156:function(t,e,n){var content=n(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("35a65942",content,!0,{sourceMap:!1})},171:function(t,e,n){"use strict";var l=n(6),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("Nuxt"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:n(111).default,Footer:n(112).default})},172:function(t,e,n){"use strict";var l=n(6),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("Nuxt",{staticClass:"mb-52"}),t._v(" "),n("Contact"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:n(111).default,Contact:n(173).default,Footer:n(112).default})},173:function(t,e,n){"use strict";n.r(e);var l=n(15),r={components:{MailIcon:l.g,LinkIcon:l.f,UsersIcon:l.i,CodeIcon:l.e}},o=(n(223),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"parent"},[n("svg",{staticClass:"bg-curve h-16 sm:h-32 -mb-px",attrs:{id:"curveUpColor",xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[n("path",{attrs:{"stroke-width":"6",d:"M 0 100 C 51 93 51 6 100 100 Z"}})]),t._v(" "),n("div",{staticClass:"pb-12 bg-darkblue bg-image mx-auto p-5 w-full overflow-hidden"},[n("div",{staticClass:"mx-auto my-5 max-w-5xl relative lg:pl-6"},[n("div",{staticClass:"flex flex-col sm:flex-row"},[t._m(0),t._v(" "),n("div",{staticClass:"ml-5"},[n("ul",{staticClass:"list-none space-y-4"},[n("li",{staticClass:"text-white text-2xl"},[n("MailIcon",{staticClass:"social-icon"}),t._v(" "),n("a",{attrs:{el:"noreferrer",target:"_blank",href:"mailto:oliver@noles.nz"}},[t._v("oliver@noles.nz")])],1),t._v(" "),n("li",{staticClass:"text-white text-2xl"},[n("CodeIcon",{staticClass:"social-icon"}),t._v(" "),n("a",{attrs:{rel:"noreferrer",target:"_blank",href:"https://www.github.com/olinoles"}},[t._v("On Github")])],1),t._v(" "),n("li",{staticClass:"text-white text-2xl"},[n("LinkIcon",{staticClass:"social-icon"}),t._v(" "),n("a",{attrs:{rel:"noreferrer",target:"_blank",href:"https://www.linkedin.com/in/oliver-noles-2390a8178/"}},[t._v("On LinkedIn")])],1),t._v(" "),n("li",{staticClass:"text-white text-2xl"},[n("UsersIcon",{staticClass:"social-icon"}),t._v(" "),n("a",{attrs:{rel:"noreferrer",target:"_blank",href:"https://www.facebook.com/oliver.noles/"}},[t._v("On Facebook")])],1)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sm:mr-24 md:mr-56"},[n("h2",{staticClass:"font-bold text-white mb-10 mt-5 text-3xl sm:text-4xl",attrs:{id:"contact"}},[t._v("\n            Let's work together!\n          ")]),t._v(" "),n("h3",{staticClass:"font-bold text-gray-200 mb-10 text-xl lg:text-2xl"},[t._v("\n            Have a project you'd like to discuss?\n          ")])])}],!1,null,"a3e80780",null);e.default=component.exports},174:function(t,e,n){n(175),t.exports=n(176)},217:function(t,e,n){var content=n(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("1f2e28e4",content,!0,{sourceMap:!1})},218:function(t,e,n){var l=n(39)((function(i){return i[1]}));l.push([t.i,"html{\n  scroll-behavior:smooth\n}",""]),l.locals={},t.exports=l},219:function(t,e,n){"use strict";n(154)},220:function(t,e,n){var l=n(39)((function(i){return i[1]}));l.push([t.i,".flyout-enter-active, .flyout-leave-active{\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:200ms\n}\n.flyout-enter-to, .flyout-leave{\n  opacity:1;\n  --tw-translate-x:0px\n}\n.flyout-enter, .flyout-leave-to{\n  opacity:0;\n  --tw-translate-x:1.25rem\n}",""]),l.locals={},t.exports=l},221:function(t,e,n){"use strict";n(155)},222:function(t,e,n){var l=n(39)((function(i){return i[1]}));l.push([t.i,".slide-enter-active{\n  -webkit-animation:menu-slide .5s;\n          animation:menu-slide .5s\n}\n.slide-leave-active{\n  animation:menu-slide .5s reverse\n}\n@-webkit-keyframes menu-slide{\n0%{\n    transform:translateX(-100%)\n}\nto{\n    transform:translateX(0)\n}\n}\n@keyframes menu-slide{\n0%{\n    transform:translateX(-100%)\n}\nto{\n    transform:translateX(0)\n}\n}",""]),l.locals={},t.exports=l},223:function(t,e,n){"use strict";n(156)},224:function(t,e,n){var l=n(39)((function(i){return i[1]}));l.push([t.i,".social-icon[data-v-a3e80780]{\n  height:25px;\n  width:auto;\n  display:inline-block;\n  margin-right:5px\n}\n.bg-darkblue[data-v-a3e80780]{\n  background-color:#14213d\n}\n.parent[data-v-a3e80780]{\n  margin-top:-130px\n}\n.bg-curve[data-v-a3e80780]{\n  fill:#14213d;\n  stroke:#14213d\n}",""]),l.locals={},t.exports=l},242:function(t,e,n){"use strict";n.r(e);var l={components:{ChevronDownIcon:n(15).b},props:{label:{type:String,required:!0},path:{type:[String,Object],required:!0},hasSubMenu:{type:Boolean,required:!1,default:!1},subMenuItems:{type:Array,required:!1,default:null}},data:function(){return{isOpen:!1}},watch:{$route:function(){this.isOpen=!1}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hasSubMenu&&t.subMenuItems?n("div",{staticClass:"relative"},[n("a",{staticClass:"cursor-pointer text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{"aria-expanded":"false"},on:{click:function(e){t.isOpen=!t.isOpen}}},[n("span",[t._v(t._s(t.label))]),t._v(" "),n("ChevronDownIcon",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"})],1),t._v(" "),t.isOpen?n("button",{staticClass:"fixed top-0 bottom-0 left-0 right-0 h-full w-full cursor-default focus:outline-none",attrs:{"aria--hidden":"true"},on:{click:function(e){t.isOpen=!1}}}):t._e(),t._v(" "),t.subMenuItems&&t.isOpen?n("HeaderSubmenu",{attrs:{items:t.subMenuItems}}):t._e()],1):n("nuxt-link",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{to:t.path}},[t._v("\n  "+t._s(t.label)+"\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderSubmenu:n(243).default})},243:function(t,e,n){"use strict";n.r(e);var l={components:{ChevronDoubleRightIcon:n(15).a},props:{items:{type:Array,required:!0}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"submenu",staticClass:"absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"},[n("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[n("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},t._l(t.items,(function(t){return n("HeaderSubmenuLink",{key:"SubmenuLink-"+t.label,attrs:{label:t.label,path:t.path}})})),1),t._v(" "),n("div",{staticClass:"px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"},[n("div",{staticClass:"flow-root"},[n("nuxt-link",{staticClass:"-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100",attrs:{to:{path:"/",hash:"projects"}}},[n("ChevronDoubleRightIcon",{staticClass:"flex-shrink-0 h-6 w-6 text-gray-400"}),t._v(" "),n("span",{staticClass:"ml-3"},[t._v("All projects")])],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderSubmenuLink:n(244).default})},244:function(t,e,n){"use strict";n.r(e);var l={props:{label:{type:String,required:!0},path:{type:[String,Object],required:!0}}},r=n(6),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",attrs:{to:t.path}},[n("div",{staticClass:"ml-4"},[n("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("\n      "+t._s(t.label)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},245:function(t,e,n){"use strict";n.r(e);var l={components:{ChevronDownIcon:n(15).b},props:{label:{type:String,required:!0},path:{type:[String,Object],required:!0},hasSubMenu:{type:Boolean,required:!1,default:!1},subMenuItems:{type:Array,required:!1,default:null}},data:function(){return{isOpen:!1}}},r=(n(221),n(6)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hasSubMenu&&t.subMenuItems?n("div",{staticClass:"relative"},[n("a",{staticClass:"text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{"aria-expanded":"false"},on:{click:function(e){t.isOpen=!t.isOpen}}},[n("span",[t._v(t._s(t.label))]),t._v(" "),n("ChevronDownIcon",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"})],1),t._v(" "),n("transition",{attrs:{name:"slide"}},[t.subMenuItems&&t.isOpen?n("div",{staticClass:"grid gap-y-8 mt-6 ml-4"},t._l(t.subMenuItems,(function(e){return n("div",{key:e.label,staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{"v-key":"subitem-"+e.label}},[n("nuxt-link",{attrs:{to:e.path}},[t._v("\n          "+t._s(e.label)+"\n        ")])],1)})),0):t._e()])],1):n("nuxt-link",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{to:t.path}},[t._v("\n  "+t._s(t.label)+"\n")])}),[],!1,null,null,null);e.default=component.exports}},[[174,17,1,18]]]);