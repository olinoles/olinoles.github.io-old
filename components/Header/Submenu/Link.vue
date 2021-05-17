<template>
  <nuxt-link :to="path" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
    <div class="ml-4">
      <p class="text-base font-medium text-gray-900">
        {{ label }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    path: {
      type: [String, Object],
      required: true
    }
  }
}
</script>
