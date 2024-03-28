<script setup lang="ts">
const colorMode = useColorMode();
const colorModeIcon = computed(() => (colorMode.value === 'light' ? 'i-heroicons-sun' : 'i-heroicons-moon'));
const changeColorMode = () => (colorMode.value = colorMode.value === 'light' ? 'dark' : 'light');
</script>

<template>
  <div class="flex">
    <UButton @click="changeColorMode" size="lg" color="white" :icon="colorModeIcon" variant="ghost" />
    <UDropdown :items="hamburgerMenu" mode="hover" :popper="{ placement: 'bottom-start' }">
      <UButton color="white" trailing-icon="i-heroicons-bars-3-solid" class="text-md font-normal" variant="ghost" />
    </UDropdown>
  </div>
</template>
