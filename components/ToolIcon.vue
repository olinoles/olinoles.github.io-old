<template>
  <div
    class="relative mx-auto my-auto"
    @mouseover="showTitle = true"
    @mouseleave="showTitle = false"
  >
    <img
      class="h-14 w-auto mx-4 my-4"
      :src="`/portfolio/icons/${icon}`"
      alt=""
    ><transition name="slide">
      <p v-show="showTitle" class="absolute mx-auto text-center z-10 bg-gray-400 bg-opacity-80 text-blue-800 rounded-md p-1 font-bold text-sm">
        {{ label }}
      </p>
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
.slide-enter-active {
  animation: menu-slide .1s;
}
.slide-leave-active {
  animation: menu-slide .1s reverse;
}
@keyframes menu-slide {
  from {
    opacity: 0%;
    transform: translatey(-10px);
  }
  to {
    opacity: 100%;
    transform: translatex(0px);
  }
}
</style>
