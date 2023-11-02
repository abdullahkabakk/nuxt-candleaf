<script setup lang="ts">
const colorMode = useColorMode();

const colorModeText = computed(() =>colorMode.value === "light" ? "Light Mode" : "Dark Mode")
const colorModeIcon = computed(() => colorMode.value === "light" ? "i-heroicons-sun" : "i-heroicons-moon")

function changeColorMode() {
  colorMode.value = colorMode.value === "light" ? "dark" : "light"
}
</script>

<template>
  <UPopover id="hamburger-button" aria-label="Hamburger Popover">
    <UButton id="hamburger-menu" aria-label="Hamburger Menu" color="white" variant="link" trailing-icon="i-heroicons-bars-3-solid" />
    <template #panel>
      <div class="flex flex-col w-40 ml-auto space-y-2">
        <NuxtLink to="/home">
          <UButton label="About" size="lg" icon="i-heroicons-newspaper" color="primary" variant="ghost" class="dark:hover-bg-gray-800 pl-2 pr-0 gap-x-3 transition-colors w-full hover:bg-primary" />
        </NuxtLink>
        <NuxtLink to="/contact">
          <UButton label="Contact" size="lg" icon="i-heroicons-phone" color="primary" variant="ghost" class="hover:bg-gray-100 pl-2 pr-0 gap-x-3 dark:hover-bg-gray-800 transition-colors" />
        </NuxtLink>
        <UButton label="Profile" size="lg" icon="i-heroicons-user" color="primary" variant="ghost" class="hover:bg-gray-100 pl-2 pr-0 gap-x-3 dark:hover-bg-gray-800 transition-colors" />
        <UButton label="Cart" size="lg" icon="i-heroicons-shopping-cart" color="primary" variant="ghost" class="hover:bg-gray-100 pl-2 pr-0 gap-x-3 dark:hover-bg-gray-800 transition-colors" />
        <hr class="mt-2 dark:bg-gray-600 dark:border-slate-700" />
        <UButton @click="changeColorMode" :label="colorModeText" size="lg" :icon="colorModeIcon" color="primary" variant="ghost" class="transition-colors pl-2 pr-0 gap-x-3 text-black duration-300 w-full hover:bg-gray-100 whitespace-nowrap dark:hover-bg-gray-800" />
      </div>
    </template>
  </UPopover>
</template>