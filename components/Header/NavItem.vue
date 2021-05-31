<template>
  <div v-if="hasSubMenu && subMenuItems" class="relative">
    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
    <a class="cursor-pointer text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false" @click="isOpen = !isOpen">
      <span>{{ label }}</span>
      <!-- Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
      <ChevronDownIcon class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" />
    </a>
    <button
      v-if="isOpen"
      class="fixed top-0 bottom-0 left-0 right-0 h-full w-full cursor-default focus:outline-none"
      aria--hidden="true"
      @click="isOpen = false"
    />
    <HeaderSubmenu v-if="subMenuItems && isOpen" :items="subMenuItems" />
  </div>
  <div v-else>
    <a
      v-if="!isNavLink"
      :href="path.path"
      target="_blank"
      class="text-base font-medium text-gray-500 hover:text-gray-900"
    > {{ label }}
    </a>
    <nuxt-link
      v-else
      :to="path"
      class="text-base font-medium text-gray-500 hover:text-gray-900"
    >
      {{ label }}
    </nuxt-link>
  </div>
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
    },
    subMenuItems: {
      type: Array,
      required: false,
      default: null
    },
    isNavLink: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  watch: {
    '$route' () {
      // this will close the mobile menu on page change
      this.isOpen = false
    }
  }
}
</script>
