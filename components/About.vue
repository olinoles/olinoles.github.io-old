<template>
  <div class="pb-4 lg:pb-10 bg-darkblue">
    <div class="flex justify-center flex-col md:flex-row mx-auto lg:flex-row">
      <div class="inline-block max-w-xl lg:py-20 px-4 py-8 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          Hi, I'm Oliver
        </h1>
        <p class="mt-6 max-w-3xl text-xl text-gray-300">
          I'm an Auckland-based tech enthusiast experienced in web technologies, creative projects, and UI design.
        </p><p class="mt-6 max-w-3xl text-xl text-gray-300">
          I am most interested in full-stack development and enjoy working with both front-end and back-end tools. Outside of webdev, I enjoy hobbies that involve robotics and electronics, including 3D printing, building FPV Drones and CAD design.
        </p>
      </div>
      <img
        class="mt-8 lg:mt-24 lg:h-80 lg:w-80 w-52 h-52 mx-auto lg:mx-20  rounded-full ring-4 ring-gray-600 ring-opacity-50"
        src="~/assets/profile.jpg"
        alt=""
      >
    </div>
    <ChevronDownIcon class="text-white text-xl mx-auto h-8 w-8 mt-8" />
  </div>
</template>

<script>
import { ChevronDownIcon } from '@vue-hero-icons/solid'
export default {
  components: {
    ChevronDownIcon
  }
}
</script>

<style scoped>
.bg-darkblue {
  background-color: #14213D;
}
</style>
