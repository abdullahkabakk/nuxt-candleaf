<script setup lang="ts">
defineProps(['title', 'description']);
</script>

<template>
  <div class="mb-5">
    <h2 class="text-3xl text-center">{{ title }}</h2>
    <p class="mt-2 text-center text-gray-600 dark:text-gray-300">{{ description }}</p>
  </div>
</template>
