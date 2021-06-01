<template>
  <div>
    <img :src="src" class="cursor-pointer w-full h-auto mx-auto" @click="isLightboxOpen = true">
    <div v-if="isLightboxOpen" class="z-50 h-screen w-screen flex fixed top-0 left-0" @click="isLightboxOpen = false">
      <div class="fixed top-0 left-0 bg-gray-800 h-full w-full opacity-80" />
      <img :src="src" class="z-50 m-auto p-10 shadow-md max-h-screen">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isLightboxOpen: false
    }
  }
}
</script>

<style>

</style>
