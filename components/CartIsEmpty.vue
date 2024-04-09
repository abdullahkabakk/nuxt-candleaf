<template>
  <div>
    <SectionTitleDescription :title="$t('cart.cartEmpty.title')" :description="$t('cart.cartEmpty.description')" />
    <div class="w-full mx-auto flex">
      <NuxtLink
        to="/"
        class="mx-auto px-4 py-2 bg-primary text-white rounded-md focus:outline-none hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105"
      >
        {{ $t('cart.cartEmpty.button') }}
      </NuxtLink>
    </div>
  </div>
</template>
