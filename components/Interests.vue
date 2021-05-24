<template>
  <div id="interests" class="pb-32 bg-light-blue bg-image mx-auto p-5 w-full overflow-hidden">
    <div class="mx-auto my-5 max-w-5xl relative lg:pl-6">
      <h2 class="title mb-10 text-2xl lg:text-4xl">
        Interests
      </h2>
      <div class="bg-white w-auto shadow-sm rounded-lg mb-8">
        <div
          class="flex flex-col sm:flex-row"
        >
          <div
            class="interest-menu rounded-b-none sm:rounded-r-none rounded-lg sm:rounded-lg last sm:pb-24 flex-shrink-0"
          >
            <div class="text-white p-2 pr-2">
              <InterestsMenuItem
                v-for="item in interests"
                :key="`item-${item.id}`"
                :label="item.label"
                :icon="item.icon"
                :class="selectedID === item.id ? 'active-menu-item':null"
                @click.native="selectInterest(item.id)"
              />
            </div>
          </div>
          <div
            class="p-5"
          >
            <h3 class="text-3xl mb-4">
              {{ interests[selectedID].label }}
            </h3>
            <Interests3DPrinting v-if="selectedID==0" />
            <InterestsElectronics v-if="selectedID==1" />
            <InterestsFPVRacingDrones v-if="selectedID==2" />
            <InterestsArcadeMachines v-if="selectedID==3" />
            <div id="interests-nav" class="m-3 mt-6 cursor-pointer">
              <ChevronLeftIcon class="inline-block w-10 mr-2 h-auto bg-gray-200 text-gray-600 active:bg-gray-300 rounded-md" @click="cycleInterests(-1)" />
              <ChevronRightIcon class="inline-block w-10 ml-2 h-auto bg-gray-200 text-gray-600 active:bg-gray-300 rounded-md" @click="cycleInterests(1)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from '@vue-hero-icons/solid'
export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon
  },
  data () {
    return {
      selectedID: 0,
      interests: [
        { id: 0, label: '3D Printing', icon: '3dprinter.svg' },
        { id: 1, label: 'Electronics', icon: 'electronics.svg' },
        { id: 2, label: 'FPV Racing Drones', icon: 'drone.svg' },
        { id: 3, label: 'Arcade Machines', icon: 'joystick.svg' },
        { id: 4, label: 'CAD Modelling', icon: 'cad.svg' }
      ]
    }
  },
  methods: {
    selectInterest (itemId) {
      this.selectedID = itemId
    },
    cycleInterests (direction) {
      this.selectedID += direction
      if (this.selectedID < 0) {
        this.selectedID = this.interests.length - 1
      } else if (this.selectedID > this.interests.length - 1) {
        this.selectedID = 0
      }
    }
  }
}
</script>

<style scoped>
.bg-light-blue {
    background-color:#F2F9FF;
}
.title {
  color: #49638A;
  font-weight:bold;
}
.interest-menu {
    background-color: #335480;
}
.active-menu-item {
    background-color: #254268;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
