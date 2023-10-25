<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  sr: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <nuxt-link :to="props.link" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
    <Icon :name="props.icon ?? '' " class="h-5 w-5" />
    <span class="sr-only">{{ props.sr }}</span>
  </nuxt-link>
</template>