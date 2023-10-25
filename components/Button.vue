<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button class="py-2 px-4 bg-primary hover:bg-transparent hover:border
   hover:border-primary hover:text-primary text-white rounded-lg">
    {{props.name}}
  </button>
</template>
