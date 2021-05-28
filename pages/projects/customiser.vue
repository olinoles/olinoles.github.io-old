<template>
  <div>
    <div id="header-bg" class="select-none max-w-5xl mx-auto h-32 sm:h-56 object-cover bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white text-4xl sm:text-5xl font-semibold pl-10 flex items-center">
      3D DRONE CUSTOMISER
    </div>
    <div class="flex flex-col sm:flex-row mx-auto my-5 max-w-5xl relative">
      <div id="summary" class="flex-shrink-0 border-b-2 mx-5 sm:mx-0 sm:border-b-0 sm:border-r-2 border-gray-300 pr-10 pl-5 sm:pl-10 pb-5 sm:py-5">
        <a rel="noreferrer" target="_blank" href="https://www.kiwiquads.co.nz/customiser/">
          <img
            src="~/static/images/customiser-logo.jpg"
            class="w-48 h-auto mb-6 hidden sm:block rounded-md cursor-pointer"
          >
        </a><div class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-md font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4 mr-auto">
          <a target="_blank" rel="noreferrer" href="https://www.kiwiquads.co.nz/customiser/">
            Visit Live Site
          </a>
        </div>
        <h3>
          Case Study
        </h3>
        <p>3D Drone Customiser</p>
        <p>KiwiQuads, Auckland</p>
        <h3>
          Type
        </h3>
        <p>Digital Interactive Tool</p>
        <h3>
          Tools used
        </h3>
        <p>ReactJS</p>
        <p>BabylonJS</p>
        <p>Solidworks CAD</p>
        <p>Blender</p>
      </div>
      <article id="content" class="px-10 pb-5">
        <div class="iframe-container my-5 sm:my-3">
          <iframe
            id="iframe2"
            src="https://www.youtube.com/embed/rBYK4YvNQ8U"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
          />
        </div>
        <h3>
          Goal
        </h3>
        <p>
          To develop an interactive tool which allows customers to create their unique racing drone specification
        </p>
        <h3>
          What is the KiwiQuads Customiser?
        </h3>
        <p>
          KiwiQuads retails many different components for their racing drones. These include various propellers, canopies, motors, and other electronics which can be changed and upgraded to affect flight performance. KiwiQuads wanted a way for customers to test and customise their dream racing drone prior to purchasing online. I built this tool using a 3D javascript framework to render any drone combination in real time.
        </p>
        <h3>
          My Experience
        </h3>
        <p>
          I began this project by creating some sketches of the customisation panel and taking inspiration from other customiser tools online. I started thinking about what components could be customised in the racing drones and started putting together some 3D models of the drone to be customised.
          <br><br>
        </p>
        <img class="block w-full h-auto py-5" src="~/static/images/customiser-concept.jpg">
        <p style="font-size:1rem" class="text-center mb-5 italic">
          KiwiQuads Customiser Concept Art
        </p><p>
          Originally I wanted to allow customers to customise and purchase their drone through the tool but decided against it as the maintenance required would be intensive as new products were added and others removed from the store. I settled on 6 different components that could be customised and finished creating all the 3D components in Solidworks. This allowed for over 100,000 different combinations of racing drone designs.
          <br><br>
          Once the models were completed, I exported them into .obj format, applied textures and reflection maps to them in Blender. Then imported the models to a new project with BabylonJS. I hadn’t used Babylon before, so it was a great experience learning to create 3D scenes and customise the environment. Once the models were tested and presenting correctly in Babylon, I created a colour and model switching system for each component by exposing a function that the React customiser panel could call.
          <br><br>
          I created a new React project to build the UI and imported the Babylon scene as a component. Once the UI was all finished, I exported the entire project as a static site and imported it into the KiwiQuads website built on Wordpress. This was preferred so that the customiser app was consistent with the rest of the website and looked native.
        </p>
        <img class="w-full h-auto py-5" src="~/static/images/drone-render.jpg">
        <p style="font-size:1rem" class="text-center mb-5 italic">
          Drone Assembly Render in Solidworks
        </p>
        <h3>
          Challenges
        </h3>
        <p>
          The first challenge for me was building the difficult shapes of the drone components in Solidworks. Many of the components have complicated curves such as the canopy and propellers. I brushed up on a few Solidworks tutorials and learnt 3D surfacing to create the curved surfaces used in the models now. I’m really pleased I pursued to learn surfacing as it is an advanced feature of modelling but can create some very dynamic models.<br><br>
          The second biggest challenge was building a 3D scene in BabylonJS. Not having done much 3D work before, a game engine built in pure Javascript was daunting to learn. I read thoroughly through the Babylon documentation and used a tutorial scene to get me started with importing models and customising lighting. After several days of fiddling with the lighting placement and model positions, I was happy with the scene created. I later added a circular landing pad and some tools in the background for effect.
        </p>
        <h3>
          Conclusion
        </h3>
        <p>
          The drone customiser was a difficult project for me because of the amount of learning required to use the tools needed. Overall, I am really happy with the finished product and it has been used by several thousand visitors to the KiwiQuads website. I look forward to working with more 3D engines in the future and would like to learn Three.js too.
        </p>
      </article>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'project',
  head () {
    return {
      title: 'Oliver Noles - 3D Drone Customiser Project',
      description: 'Oliver Noles Portfolio. 3D Drone Customiser Project'
    }
  }
}
</script>

<style scoped>
#header-bg {
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.768), rgba(126, 126, 126, 0.494)),
    url(~/assets/customiser-1.jpg);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
#content p, #summary p {
    font-size: 1.25rem/* 20px */;
    line-height: 1.75rem/* 28px */;
}
#content h3, #summary h3 {
    font-size: 1.24rem/* 20px */;
    line-height: 1.75rem/* 28px */;
    font-weight:600;
    margin-top: 1.25rem;
    margin-bottom:0.75rem;
}
#summary h3 {
    text-transform:uppercase;
    text-decoration: underline;
}
.iframe-container {
  overflow: hidden;
  /* 16:9 aspect ratio */
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
   border: 0;
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
}
p a {
  color: orangered
}
</style>
