<script setup lang="ts">
const items = [
  {
    label: "Profile",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/739984?v=4",
    },
  },
];
</script>

<template>
  <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" label="Discovery" trailing-icon="i-heroicons-chevron-down-20-solid" class="text-md font-normal" variant="ghost" />
  </UDropdown>
  <div class="my-auto space-x-4">
    <NuxtLink to="/home" class="hover:underline">About</NuxtLink>
    <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
  </div>
</template>