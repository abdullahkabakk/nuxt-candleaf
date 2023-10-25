<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <h2 class="text-3xl text-center">{{ props.title }}</h2>
  <p class="mt-2 text-center text-gray-600 dark:text-gray-300">{{ props.description }}</p>
</template>
