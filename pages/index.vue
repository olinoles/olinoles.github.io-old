<template>
  <div>
    <about />
    <skills />
    <projects />
    <contact />
  </div>
</template>

<script>
import About from '~/components/About.vue'
import Contact from '~/components/Contact.vue'
import Projects from '~/components/Projects.vue'
export default {
  components: { About, Projects, Contact },
  head () {
    return {
      title: 'Oliver Noles',
      description: 'Oliver Noles Portfolio. Full-stack web developer.'
    }
  }
}
</script>

<style>
  h2::before {
    display:block;
    content: " ";
    margin-top: -150px;
    height: 150px;
    visibility: hidden;
    pointer-events: none;
  }
</style>
