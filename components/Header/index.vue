<template>
  <header>
    <div class="sticky top-0 z-50 bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img id="logo" class="h-8 w-auto sm:h-10" src="~/static/icons/oliver.png" alt="Oliver Noles">
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false" @click="isMobileMenuOpen = true">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" />
            </button>
          </div>
          <nav class="hidden md:flex space-x-10">
            <HeaderNavItem
              v-for="link in links"
              :key="`linkitem-${link.label}`"
              :label="link.label"
              :path="link.path"
              :has-sub-menu="link.hasSubMenu"
              :sub-menu-items="link.subItems"
            />
          </nav>
        </div>
      </div>
      <button
        v-if="isMobileMenuOpen"
        class="fixed top-0 bottom-0 left-0 right-0 h-full w-full cursor-default focus:outline-none"
        aria--hidden="true"
        @click="isMobileMenuOpen = false"
      />
      <transition name="flyout">
        <div v-if="isMobileMenuOpen" class="absolute z-50 top-0 inset-x-0 p-2 transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div>
                  <img id="logo" class="h-8 w-auto" src="~/static/icons/oliver.png" alt="Oliver Noles">
                </div>
                <div class="-mr-2">
                  <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" @click="isMobileMenuOpen = false">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <HeaderNavItemMobile
                    v-for="link in links"
                    :key="`linkitem-${link.label}`"
                    :label="link.label"
                    :path="link.path"
                    :has-sub-menu="link.hasSubMenu"
                    :sub-menu-items="link.subItems"
                  />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
<script>
import { MenuIcon, XIcon } from '@vue-hero-icons/solid'
export default {
  components: {
    MenuIcon,
    XIcon
  },
  data () {
    return {
      isMobileMenuOpen: false,
      links: [{ label: 'About', path: { path: '/', hash: '' } },
        { label: 'Skills', path: { path: '/', hash: 'skills' } },
        {
          label: 'Projects',
          hasSubMenu: true,
          path: { path: '', hash: '' },
          subItems: [{ label: 'ASColour Colourmatic', path: '/projects/ascolour' },
            { label: '3D Drone Customiser', path: '/projects/customiser' },
            { label: 'Order Dispatch System', path: '/projects/dispatch' }
          ]
        },
        { label: 'Interests', path: { path: '/', hash: 'interests' } },
        { label: 'Contact', path: { path: '/', hash: 'contact' } }
      ]
    }
  },
  watch: {
    '$route' () {
      // this will close the mobile menu on page change
      this.isMobileMenuOpen = false
    }
  }
}
</script>

<style>
.flyout-enter-active, .flyout-leave-active {
  @apply duration-200 ease-in-out;
}
.flyout-enter-to, .flyout-leave {
  @apply translate-x-0 opacity-100;
}
.flyout-leave-to, .flyout-enter {
  @apply translate-x-5 opacity-0;
}
</style>
