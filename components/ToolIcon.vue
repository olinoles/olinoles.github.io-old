<template>
  <div
    class="relative mx-auto my-auto"
    @mouseover="showTitle = true"
    @focus="showTitle = true"
    @blur="showTitle = false"
    @mouseleave="showTitle = false"
  >
    <img
      class="h-14 w-auto mx-4 my-4 transform duration-75 hover:scale-110"
      :src="`/portfolio/icons/${icon}`"
      alt=""
    >
    <transition name="fade">
      <div v-show="showTitle" class="pointer-events-none absolute left-0 right-0 mx-auto text-center z-10 bg-gray-800 bg-opacity-80 text-white rounded-md p-1 font-bold text-xs">
        {{ label }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showTitle: false
    }
  }
}
</script>

<style>
.fade-enter-active {
  animation: fade .1s;
}
.fade-leave-active {
  animation: fade .1s reverse;
}
@keyframes fade {
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
}
</style>
