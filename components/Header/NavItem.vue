<template>
  <div v-if="hasSubMenu" class="relative">
    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
    <nuxt-link :to="path" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
      <span>{{ label }}</span>
      <!-- Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
      <ChevronDownIcon class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" />
    </nuxt-link>
    <!-- <HeaderSubmenu /> -->
  </div>

  <nuxt-link v-else :to="path" class="text-base font-medium text-gray-500 hover:text-gray-900">
    {{ label }}
  </nuxt-link>
</template>

<script>
import { ChevronDownIcon } from '@vue-hero-icons/solid'
export default {
  components: {
    ChevronDownIcon
  },
  props: {
    label: {
      type: String,
      required: true
    },
    path: {
      type: [String, Object],
      required: true
    },
    hasSubMenu: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
