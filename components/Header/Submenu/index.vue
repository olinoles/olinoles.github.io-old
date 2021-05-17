<template>
  <!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
  <div ref="submenu" class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
        <HeaderSubmenuLink v-for="item in items" :key="`SubmenuLink-${item.label}`" :label="item.label" :path="item.path" />
      </div>
      <!-- Bottom bar -->
      <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
        <div class="flow-root">
          <nuxt-link :to="{path:'/', hash:'projects'}" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
            <ChevronDoubleRightIcon class="flex-shrink-0 h-6 w-6 text-gray-400" />
            <span class="ml-3">All projects</span>
            </nuxt-linkj>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDoubleRightIcon } from '@vue-hero-icons/solid'
export default {
  components: {
    ChevronDoubleRightIcon
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
