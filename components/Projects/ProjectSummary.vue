<template>
  <div class="flex justify-start">
    <nuxt-link :to="`projects/` + link">
      <div class="flex flex-col sm:flex-row bg-white w-auto hover:shadow-md shadow-sm rounded-lg overflow-hidden mb-12 cursor-pointer">
        <img :src="`/portfolio/projects/${image}`" class="w-auto sm:h-auto sm:w-72">
        <div class="flex flex-col ml-10">
          <div class="text-xl my-4">
            {{ title }}
          </div>
          <div class="text-sm mb-4 mr-10 max-w-prose">
            {{ description }}
          </div>
          <div v-if="cta" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4 mr-auto">
            <a target="_blank" :href="ctaLink">
              {{ cta }}
            </a>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    cta: {
      type: String,
      required: false,
      default: null
    },
    ctaLink: {
      type: String,
      required: false,
      default: null
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
