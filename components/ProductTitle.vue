<script setup lang="ts">
defineProps<{ name: string; description: string }>();
</script>

<template>
  <h1 class="text-2xl font-semibold">{{name}}</h1>
  <p>{{description}}</p>
</template>
