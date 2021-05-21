<template>
  <div id="interests" class="pb-32 bg-light-blue bg-image mx-auto p-5 w-full overflow-hidden">
    <div class="mx-auto my-5 max-w-5xl relative lg:pl-6">
      <h2 class="title mb-10 text-2xl lg:text-4xl">
        Interests
      </h2>
      <div class="flex flex-col sm:flex-row bg-white w-auto shadow-sm rounded-lg mb-8">
        <div class="interest-menu rounded-r-none rounded-lg last pb-24">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedID: 0,
      interests: [
        { id: 1, label: '3D Printing', icon: '3dprinter.svg' },
        { id: 2, label: 'Electronics', icon: 'electronics.svg' },
        { id: 3, label: 'FPV Racing Drones', icon: 'drone.svg' },
        { id: 4, label: 'Arcade Machines', icon: 'joystick.svg' },
        { id: 5, label: 'CAD Modelling', icon: 'cad.svg' }
      ]
    }
  },
  methods: {
    selectInterest (itemId) {
      this.selectedID = itemId
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
