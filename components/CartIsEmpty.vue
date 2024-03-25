<template>
  <div>
    <SectionTitleDescription
      title="Your cart is empty"
      description="Looks like you haven't added any items to your cart yet. Start shopping now!"
    />
    <div class="w-full mx-auto flex">
      <NuxtLink
        to="/"
        class="mx-auto px-4 py-2 bg-primary text-white rounded-md focus:outline-none hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105"
      >
        Start Shopping
      </NuxtLink>
    </div>
  </div>
</template>
