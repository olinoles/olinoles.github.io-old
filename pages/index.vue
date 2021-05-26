<template>
  <div>
    <about />
    <skills />
    <projects />
    <interests />
    <contact />
  </div>
</template>

<script>
import About from '~/components/About.vue'
import Contact from '~/components/Contact.vue'
import Projects from '~/components/Projects.vue'
export default { components: { About, Projects, Contact } }
</script>
