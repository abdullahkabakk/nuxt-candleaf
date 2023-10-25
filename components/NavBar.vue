<template>
  <nav class="fixed top-0 w-full bg-white dark:bg-background-dark transition duration-300 z-10 flex">
    <div class="mx-4 flex justify-between max-w-screen-xl my-3 h-full w-full xl:mx-auto">
      <NuxtLink to="/">
        <NuxtImg src="/logo.png" width="126" height="34" />
      </NuxtLink>
      <div class="hidden md:flex space-x-2 h-full">
        <MidSection />
      </div>
      <div class="md:hidden">
        <HamburgerMenu />
      </div>
      <div class="hidden md:flex space-x-2">
        <EndSection />
      </div>
    </div>
  </nav>
</template>

<script setup>
import HamburgerMenu from "~/components/navbar/HamburgerMenu.vue";
import EndSection from "~/components/navbar/EndSection.vue";
import MidSection from "~/components/navbar/MidSection.vue";
</script>
