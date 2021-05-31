<template>
  <div v-if="hasSubMenu && subMenuItems" class="relative">
    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
    <a class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false" @click="isOpen = !isOpen">
      <span>{{ label }}</span>
      <!-- Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
      <ChevronDownIcon class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" />
    </a>
    <transition name="slide">
      <div v-if="subMenuItems && isOpen" class="grid gap-y-8 mt-6 ml-4">
        <div v-for="item in subMenuItems" :key="item.label" :v-key="`subitem-${item.label}`" class="text-base font-medium text-gray-500 hover:text-gray-900">
          <nuxt-link :to="item.path">
            {{ item.label }}
          </nuxt-link>
        </div>
      </div>
    </transition>
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
  }
}
</script>

<style>
.slide-enter-active {
  animation: menu-slide .5s;
}
.slide-leave-active {
  animation: menu-slide .5s reverse;
}
@keyframes menu-slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
