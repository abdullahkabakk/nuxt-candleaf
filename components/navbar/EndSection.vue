<script setup lang="ts">
const colorMode = useColorMode();
const colorModeIcon = computed(() => (colorMode.value === 'light' ? 'i-heroicons-sun' : 'i-heroicons-moon'));
const changeColorMode = () => (colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light');

const store = useCartStore();
</script>

<template>
  <UButton
    color="link"
    aria-label="Profile"
    id="profile"
    class="hover:bg-gray-100 dark:hover-bg-gray-800 dark:hover:bg-gray-600"
  >
    <Icon name="iconamoon:profile" class="h-6 w-6 text-black dark:text-white" />
  </UButton>
  <NuxtLink to="/cart">
    <UButton
      id="cart"
      aria-label="Cart"
      color="link"
      class="hover:bg-gray-100 dark:hover-bg-gray-800 dark:hover:bg-gray-600"
    >
      <UChip :text="store.getCartLength" size="lg">
        <Icon name="mdi:cart-outline" class="h-6 w-6 text-black dark:text-white" />
      </UChip>
    </UButton>
  </NuxtLink>
  <UButton @click="changeColorMode" size="lg" color="white" :icon="colorModeIcon" variant="ghost" />
</template>
