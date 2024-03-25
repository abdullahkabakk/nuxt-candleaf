<template>
  <nav class="sticky top-0 w-full bg-white dark:bg-background-dark transition duration-300 z-10 flex">
    <div class="mx-4 flex justify-between max-w-screen-xl my-3 h-full w-full xl:mx-auto">
      <NuxtLink to="/" aria-label="Candleaf Logo">
        <NuxtImg src="/logo.png" alt="Candleaf Logo" format="webp" width="126" height="34" />
      </NuxtLink>
      <div class="hidden md:flex space-x-2 h-full">
        <NavbarMidSection />
      </div>
      <div class="md:hidden">
        <NavbarHamburgerMenu />
      </div>
      <div class="hidden md:flex space-x-2">
        <NavbarEndSection />
      </div>
    </div>
  </nav>
</template>
