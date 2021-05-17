<template>
  <div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
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

    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <div v-if="isMobileMenuOpen" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
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
  </div>
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
      links: [{ label: 'About', path: { path: '/', hash: 'about' } },
        { label: 'Skills', path: { path: '/', hash: 'skills' } },
        { label: 'Interests', path: { path: '/', hash: 'interests' } },
        {
          label: 'Projects',
          hasSubMenu: true,
          path: { path: '/', hash: 'projects' },
          subItems: [{ label: 'Project 1', path: '/project1' },
            { label: 'Project 2', path: '/project2' },
            { label: 'Project 3', path: '/project3' }
          ]
        },
        { label: 'Contact', path: { path: '/', hash: 'contact' } }
      ]
    }
  }
}
</script>
