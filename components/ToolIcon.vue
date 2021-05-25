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
      :alt="label"
    >
    <div :class="showTitle ? 'is-active':null" class="opacity-0 pointer-events-none absolute left-0 right-0 mx-auto text-center z-10 bg-gray-800 bg-opacity-80 text-white rounded-md p-1 font-bold text-xs">
      {{ label }}
    </div>
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
.tooltip {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: top center;
    transform-origin: top center;
}

.is-active {
    -webkit-animation: pulse 200ms cubic-bezier(0,0,.2,1)forwards;
    animation: pulse 200ms cubic-bezier(0,0,.2,1)forwards
}
@-webkit-keyframes pulse {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 0
    }

    50% {
        -webkit-transform: scale(.99);
        transform: scale(.99)
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
        visibility: visible
    }
}

@keyframes pulse {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 0
    }

    50% {
        -webkit-transform: scale(.99);
        transform: scale(.99)
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
        visibility: visible
    }
}
</style>
