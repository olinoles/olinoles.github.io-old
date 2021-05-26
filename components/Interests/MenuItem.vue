<template>
  <div class="pl-2 pr-14 py-2 my-2 rounded-lg item cursor-pointer">
    <img :src="`/icons/interests/${icon}`" class="h-8 w-auto inline-block">
    <div class="inline-block ml-3">
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
  }
}
</script>

<style scoped>
.item {
    color: #CFE2F3;
}
.item:hover {
    background-color: #254268;
}
</style>
