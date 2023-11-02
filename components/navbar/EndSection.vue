<script setup lang="ts">
const colorMode = useColorMode();

const colorModeIcon = computed(() => colorMode.value === "light" ? "i-heroicons-sun" : "i-heroicons-moon")

function changeColorMode() {
  colorMode.value = colorMode.value === "light" ? "dark" : "light"
}
</script>

<template>
  <UButton color="link" aria-label="Profile" id="profile" class="hover:bg-gray-100 dark:hover-bg-gray-800 dark:hover:bg-gray-600">
    <Icon name="iconamoon:profile" class="h-6 w-6 text-black dark:text-white" />
  </UButton>
  <UButton id="cart" aria-label="Cart" color="link" class="hover:bg-gray-100 dark:hover-bg-gray-800 dark:hover:bg-gray-600">
    <Icon name="mdi:cart-outline" class="h-6 w-6 text-black dark:text-white" />
  </UButton>
  <UButton id="colorSwitcher" aria-label="Light & Dark Mode" color="link" @click="changeColorMode" class="hover:bg-gray-100 dark:hover-bg-gray-800 dark:hover:bg-gray-600">
    <Icon :name="colorModeIcon" class="h-6 w-6 text-black dark:text-white" />
  </UButton>
</template>