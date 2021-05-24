(window.webpackJsonp=window.webpackJsonp||[]).push([[9,10],{242:function(t,e,r){var content=r(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("6d03d0ae",content,!0,{sourceMap:!1})},253:function(t,e,r){"use strict";r.r(e);var o={props:{title:{type:String,required:!0},description:{type:String,required:!0},link:{type:String,required:!0},cta:{type:String,required:!1,default:null},ctaLink:{type:String,required:!1,default:null},image:{type:String,required:!0}}},n=r(9),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-start"},[r("nuxt-link",{attrs:{to:"projects/"+t.link}},[r("div",{staticClass:"flex flex-col sm:flex-row bg-white w-auto hover:shadow-md shadow-sm rounded-lg overflow-hidden mb-12 cursor-pointer"},[r("img",{staticClass:"w-auto sm:h-auto sm:w-72",attrs:{src:"/portfolio/projects/"+t.image}}),t._v(" "),r("div",{staticClass:"flex flex-col ml-10"},[r("div",{staticClass:"text-xl my-4"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),r("div",{staticClass:"text-sm mb-4 mr-10 max-w-prose"},[t._v("\n          "+t._s(t.description)+"\n        ")]),t._v(" "),t.cta?r("div",{staticClass:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4 mr-auto"},[r("a",{attrs:{target:"_blank",href:t.ctaLink},on:{click:function(t){t.stopPropagation()}}},[t._v("\n            "+t._s(t.cta)+"\n          ")])]):t._e()])])])],1)}),[],!1,null,null,null);e.default=component.exports},262:function(t,e,r){"use strict";r(242)},263:function(t,e,r){var o=r(40)((function(i){return i[1]}));o.push([t.i,".bg-light-blue[data-v-118c77a1]{\n  background-color:#f2f9ff\n}\n.title[data-v-118c77a1]{\n  color:#49638a;\n  font-weight:700\n}",""]),t.exports=o},271:function(t,e,r){"use strict";r.r(e);var o={components:{ProjectSummary:r(253).default}},n=(r(262),r(9)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pb-10 bg-light-blue lg:pt-20 bg-image mx-auto p-5 w-full",attrs:{id:"projects"}},[r("div",{staticClass:"mx-auto my-5 max-w-5xl relative lg:pl-6"},[r("h2",{staticClass:"title mb-10 text-2xl lg:text-4xl"},[t._v("\n        Featured Projects\n      ")]),t._v(" "),r("ProjectSummary",{attrs:{title:"ASColour Colourmatic Critic",cta:"Watch Video","cta-link":"https://vimeo.com/312834441",description:"This creative project for ASColour used a camera and visuals to recommend t-shirts to customers. The display was featured outside the Customs Street store in Auckland CBD.",link:"ascolour",image:"ascolour.png"}}),t._v(" "),r("ProjectSummary",{attrs:{title:"KiwiQuads 3D Drone Customiser",cta:"Live Site","cta-link":"https://kiwiquads.co.nz/customiser",description:"A 3D drone customiser tool built for KiwiQuads allows real-time customisation of a drone to visualise different components and colours.\nBuilt using Babylon.js framework and React.",link:"customiser",image:"customiser.jpg"}}),t._v(" "),r("ProjectSummary",{attrs:{title:"KiwiQuads Order Dispatch System",description:"KiwiQuads needed a dispatching system to handle a large quantity of orders efficiently. I built this web application to combine order picking with the NZ Post API for shipping.",link:"dispatch",image:"dispatch.jpg"}})],1)])}),[],!1,null,"118c77a1",null);e.default=component.exports}}]);