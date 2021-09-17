<template>
  <div class="pb-4 lg:pb-10 bg-darkblue">
    <div class="mt-4 right-4 space-x-3 hidden sm:inline absolute">
      <a rel="noreferrer" href="https://github.com/olinoles" target="_blank"><img alt="Github" src="/icons/github.svg" class="inline-block h-8 w-auto hover:scale-110 transform duration-75 cursor-pointer opacity-70 hover:opacity-100"></a>
      <a rel="noreferrer" href="https://www.linkedin.com/in/oliver-noles-2390a8178/" target="_blank"><img alt="LinkedIn" src="/icons/linkedin.svg" class="inline-block h-8 w-auto hover:scale-110 transform duration-75 cursor-pointer opacity-70 hover:opacity-100"></a>
    </div>
    <div class="flex justify-center flex-col md:flex-row mx-auto lg:flex-row">
      <div class="inline-block max-w-xl lg:pt-20 pb-16 px-4 py-8 sm:px-6 lg:px-8">
        <h2 id="about" class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          Hi, I'm Oliver
        </h2>
        <p class="mt-6 max-w-3xl text-xl text-gray-300">
          I'm an Auckland-based tech enthusiast experienced in web technologies, creative projects, and UI design.
          <br><br>
          Currently I am a Front-end Engineer at <a rel="noreferrer" href="https://www.themarket.co.nz" target="_blank">TheMarket NZ</a><br><br>
          I am most interested in full-stack development and enjoy working with both front-end and back-end tools. Outside of webdev, I enjoy hobbies that involve robotics and electronics, including 3D printing, building FPV Drones and CAD design.
        </p>
        <div ref="readmore" class="transition-height duration-300 ease-out overflow-hidden h-0">
          <p class="mt-6 max-w-3xl text-xl text-gray-300">
            My favourite projects currently involve developing clean and functional front-end software, but I'm not afraid of working on back-end applications either. My philosophy towards coding is <i>the right tool for the job</i>. Having a strong passion for learning new tools allows me to solve problems efficiently.<br><br>When I'm not working on projects I love to socialise with board games, try new craft beers, and travel.
          </p>
        </div>

        <div class="mt-3 text-xl text-gray-300 underline cursor-pointer" @click="slideDown()">
          {{ isReadMoreOpen ? "Read less" : "Read more" }}
        </div>
      </div>
      <img
        class="mt-8 lg:mt-24 lg:h-80 lg:w-80 w-52 h-52 mx-auto lg:mx-20  rounded-full ring-4 ring-gray-600 ring-opacity-50"
        src="~/assets/profile.jpg"
        alt=""
      >
    </div>
    <a href="#skills" class="pointer-cursor w-10 mx-auto block">
      <ChevronDownIcon class="text-white text-xl mx-auto h-8 w-8 mt-8" />
    </a>
  </div>
</template>

<script>
import { ChevronDownIcon } from '@vue-hero-icons/solid'
export default {
  components: {
    ChevronDownIcon
  },
  data () {
    return {
      isReadMoreOpen: false
    }
  },
  methods: {
    slideDown () {
      const element = this.$refs.readmore
      if (!this.isReadMoreOpen) {
        element.style.height = `${element.scrollHeight}px`
      } else {
        element.style.height = 0
      }
      this.isReadMoreOpen = !this.isReadMoreOpen
    }
  }
}
</script>

<style scoped>
.bg-darkblue {
  background-color: #14213D;
}
</style>
