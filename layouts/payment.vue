<template>
  <div class="flex flex-col max-w-screen min-h-screen transition-colors duration-500 bg-white dark:bg-background-dark">
    <div class="mx-4 flex justify-between max-w-screen-xl my-3 w-full xl:mx-auto">
      <NuxtLink to="/" aria-label="Candleaf Logo">
        <NuxtImg src="/logo.png" alt="Candleaf Logo" format="webp" width="126" height="34" />
      </NuxtLink>
    </div>
    <div>
      <CartDetailsBreadCrumb/>
      <NuxtPage />
    </div>
  </div>
</template>
