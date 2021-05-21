<template>
  <div>
    <about />
    <skills />
    <projects />
    <interests />
  </div>
</template>

<script>
import About from '~/components/About.vue'
import Projects from '~/components/Projects.vue'
export default { components: { About, Projects } }
</script>
