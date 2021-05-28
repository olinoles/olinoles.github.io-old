(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{248:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},270:function(e,t,n){e.exports=n.p+"img/colourmatic-2.b74dad1.jpg"},271:function(e,t,n){e.exports=n.p+"img/colourmatic-3.8263c0f.jpg"},285:function(e,t,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(40).default)("49f4ac14",content,!0,{sourceMap:!1})},294:function(e,t,n){e.exports=n.p+"img/customiser-logo.84877f5.jpg"},295:function(e,t,n){e.exports=n.p+"img/customiser-2.84d7c81.jpg"},296:function(e,t,n){"use strict";n(285)},297:function(e,t,n){var o=n(39),r=n(248),d=n(298),c=o((function(i){return i[1]})),l=r(d);c.push([e.i,"#header-bg[data-v-1658798c]{\n  background-image:linear-gradient(180deg,rgba(0,0,0,.768),hsla(0,0%,49.4%,.494)),url("+l+");\n  background-size:100%;\n  background-position:50%;\n  background-repeat:no-repeat\n}\n#content p[data-v-1658798c],#summary p[data-v-1658798c]{\n  font-size:1.25rem;\n  line-height:1.75rem\n}\n#content h3[data-v-1658798c],#summary h3[data-v-1658798c]{\n  font-size:1.24rem;\n  line-height:1.75rem;\n  font-weight:600;\n  margin-top:1.25rem;\n  margin-bottom:.75rem\n}\n#summary h3[data-v-1658798c]{\n  text-transform:uppercase;\n  text-decoration:underline\n}\n.iframe-container[data-v-1658798c]{\n  overflow:hidden;\n  padding-top:56.25%;\n  position:relative\n}\n.iframe-container iframe[data-v-1658798c]{\n  border:0;\n  height:100%;\n  left:0;\n  position:absolute;\n  top:0;\n  width:100%\n}\np a[data-v-1658798c]{\n  color:#ff4500\n}",""]),c.locals={},e.exports=c},298:function(e,t,n){e.exports=n.p+"img/customiser-1.cd21dde.jpg"},302:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"select-none max-w-5xl mx-auto h-32 sm:h-56 object-cover bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white text-4xl sm:text-5xl font-semibold pl-10 flex items-center",attrs:{id:"header-bg"}},[e._v("\n    3D DRONE CUSTOMISER\n  ")]),e._v(" "),o("div",{staticClass:"flex flex-col sm:flex-row mx-auto my-5 max-w-5xl relative"},[o("div",{staticClass:"flex-shrink-0 border-b-2 mx-5 sm:mx-0 sm:border-b-0 sm:border-r-2 border-gray-300 pr-10 pl-5 sm:pl-10 pb-5 sm:py-5",attrs:{id:"summary"}},[o("img",{staticClass:"w-48 h-auto mb-12 hidden sm:block rounded-md",attrs:{src:n(294)}}),e._v(" "),o("h3",[e._v("\n        Case Study\n      ")]),e._v(" "),o("p",[e._v("3D Drone Customiser")]),e._v(" "),o("p",[e._v("KiwiQuads, Auckland")]),e._v(" "),o("h3",[e._v("\n        Type\n      ")]),e._v(" "),o("p",[e._v("Digital Interactive Tool")]),e._v(" "),o("h3",[e._v("\n        Tools used\n      ")]),e._v(" "),o("p",[e._v("ReactJS")]),e._v(" "),o("p",[e._v("BabylonJS")]),e._v(" "),o("p",[e._v("Solidworks CAD")]),e._v(" "),o("p",[e._v("Blender")])]),e._v(" "),o("article",{staticClass:"px-10 pb-5",attrs:{id:"content"}},[o("img",{staticClass:"max-h-72 py-5",attrs:{src:n(295)}}),e._v(" "),o("h3",[e._v("\n        Goal\n      ")]),e._v(" "),o("p",[e._v("\n        To develop an interactive tool which allows customers to create their unique racing drone specification\n      ")]),e._v(" "),o("h3",[e._v("\n        What is the KiwiQuads Customiser?\n      ")]),e._v(" "),o("p",[e._v("\n        KiwiQuads retails many different components for their racing drones. These include various propellers, canopies, motors, and other electronics which can be changed and upgraded to affect flight performance. KiwiQuads wanted a way for customers to test and customise their dream racing drone prior to purchasing online. I built this tool using a 3D javascript framework to render any drone combination in real time.\n      ")]),e._v(" "),o("h3",[e._v("\n        My Experience\n      ")]),e._v(" "),o("p",[e._v("\n        I began this project by creating some sketches of the customisation panel and taking inspiration from other customiser tools online. I started thinking about what components could be customised in the racing drones and started putting together some 3D models of the drone to be customised.\n        "),o("br"),o("br"),e._v("\n        Originally I wanted to allow customers to customise and purchase their drone through the tool but decided against it as the maintenance required would be intensive as new products were added and others removed from the store. I settled on 6 different components that could be customised and finished creating all the 3D components in Solidworks. This allowed for over 100,000 different combinations of racing drone designs.\n        "),o("br"),o("br"),e._v("\n        Once the models were completed, I exported them into .obj format, applied textures and reflection maps to them in Blender. Then imported the models to a new project with BabylonJS. I hadn’t used Babylon before, so it was a great experience learning to create 3D scenes and customise the environment. Once the models were tested and presenting correctly in Babylon, I created a colour and model switching system for each component by exposing a function that the React customiser panel could call.\n        "),o("br"),o("br"),e._v("\n        I created a new React project to build the UI and imported the Babylon scene as a component. Once the UI was all finished, I exported the entire project as a static site and imported it into the KiwiQuads website built on Wordpress. This was preferred so that the customiser app was consistent with the rest of the website and looked native.\n      ")]),e._v(" "),o("img",{staticClass:"w-full h-auto py-5 sm:hidden",attrs:{align:"right",src:n(270)}}),e._v(" "),o("h3",[e._v("\n        Challenges\n      ")]),e._v(" "),o("p",[e._v("\n        The first challenge for me was building the difficult shapes of the drone components in Solidworks. Many of the components have complicated curves such as the canopy and propellers. I brushed up on a few Solidworks tutorials and learnt 3D surfacing to create the curved surfaces used in the models now. I’m really pleased I pursued to learn surfacing as it is an advanced feature of modelling but can create some very dynamic models."),o("br"),o("br"),e._v("\n        The second biggest challenge was building a 3D scene in BabylonJS. Not having done much 3D work before, a game engine built in pure Javascript was daunting to learn. I read thoroughly through the Babylon documentation and used a tutorial scene to get me started with importing models and customising lighting. After several days of fiddling with the lighting placement and model positions, I was happy with the scene created. I later added a circular landing pad and some tools in the background for effect.\n      ")]),e._v(" "),o("h3",[e._v("\n        Conclusion\n      ")]),e._v(" "),o("p",[e._v("\n        The drone customiser was a difficult project for me because of the amount of learning required to use the tools needed. Overall, I am really happy with the finished product and it has been used by several thousand visitors to the KiwiQuads website. I look forward to working with more 3D engines in the future and would like to learn Three.js too.\n      ")]),e._v(" "),o("img",{staticClass:"w-full h-auto py-5 sm:hidden",attrs:{align:"right",src:n(271)}})])])])}],r={layout:"project",head:function(){return{title:"Oliver Noles - 3D Drone Customiser Project",description:"Oliver Noles Portfolio. 3D Drone Customiser Project"}}},d=(n(296),n(6)),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),o,!1,null,"1658798c",null);t.default=component.exports}}]);