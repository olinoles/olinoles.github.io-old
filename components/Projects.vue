<template>
  <div class="pb-10 bg-light-blue lg:pt-20 bg-image mx-auto p-5 w-full">
    <div class="mx-auto my-5 max-w-5xl relative lg:pl-6">
      <h2 id="projects" class="title mb-10 text-2xl lg:text-4xl">
        Featured Projects
      </h2>
      <ProjectSummary
        title="ASColour Colourmatic Critic"
        cta="Watch Video"
        cta-link="https://vimeo.com/312834441"
        description="This creative project for ASColour used a camera and visuals to recommend t-shirts to customers. The display was featured outside the Customs Street store in Auckland CBD."
        link="ascolour"
        image="ascolour.png"
      />
      <ProjectSummary
        title="KiwiQuads 3D Drone Customiser"
        cta="Live Site"
        cta-link="https://kiwiquads.co.nz/customiser"
        description="A 3D drone customiser tool built for KiwiQuads allows real-time customisation of a drone to visualise different components and colours.
Built using Babylon.js framework and React."
        link="customiser"
        image="customiser.jpg"
      />
      <ProjectSummary title="KiwiQuads Order Dispatch System" description="KiwiQuads needed a dispatching system to handle a large quantity of orders efficiently. I built this web application to combine order picking with the NZ Post API for shipping." link="dispatch" image="dispatch.jpg" />
    </div>
  </div>
</template>
<script>
import ProjectSummary from './Projects/ProjectSummary.vue'

export default {
  components: {
    ProjectSummary
  }
}
</script>

<style scoped>
.bg-light-blue {
    background-color:#F2F9FF;
}
.title {
  color: #49638A;
  font-weight:bold;
}
</style>
