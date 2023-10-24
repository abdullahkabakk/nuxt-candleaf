<template>
  <nav class="w-full fixed top-0 left-0 right-0 bg-white transition-colors duration-300 dark:bg-background-dark z-10 flex">
    <div class="mx-auto max-w-screen-xl my-3 h-full w-full flex justify-around">
      <div>
        <nuxt-link to="/">
          <img src="logo.png" alt="logo" />
        </nuxt-link>
      </div>
      <div class="flex flex-row space-x-2 h-full transition-colors duration-300">
        <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }">
          <UButton color="white" label="Discovery" trailing-icon="i-heroicons-chevron-down-20-solid" class="text-md font-normal" variant="ghost" />
        </UDropdown>
        <div class="my-auto space-x-4">
          <nuxt-link to="/home" class="hover:underline transition-colors duration-300">
            About
          </nuxt-link>

          <nuxt-link to="/contact" class="hover:underline transition-colors duration-300">
            Contact
          </nuxt-link>
        </div>
      </div>
      <div>
        <UButton color="none" class=" hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
          <Icon name="iconamoon:profile" class="h-6 w-6 text-black dark:text-white" />
        </UButton>
        <UButton color="transparent" class="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
          <Icon name="mdi:cart-outline" class="h-6 w-6 text-black dark:text-white" />
        </UButton>
        <UButton color="transparent" @click="changeColorMode" class="transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
          <Icon :name="colorMode.value === 'light' ? 'ph:sun' : 'ph:moon'" class="h-6 w-6 text-black dark:text-white" />
        </UButton>
      </div>
    </div>
  </nav>
</template>

<script setup>

const colorMode = useColorMode()

const items = [
  [
    {
      label: 'Profile',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
      },
    },
  ],
];

function changeColorMode() {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';
}

</script>

<style scoped>
/* Add your scoped CSS styles here */
</style>
