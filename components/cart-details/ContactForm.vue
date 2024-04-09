<script setup lang="ts">
function proceedToShipping() {}
</script>

<template>
  <div class="md:basis-1/2">
    <!-- Customer Information Form -->
    <div>
      <CartDetailsShippingForm />
      <!-- Proceed to Shipping and Back to Cart -->
      <div class="flex flex-row">
        <NuxtLink to="/cart" class="text-primary my-auto underline hover:no-underline">{{
          $t('cartDetails.backToCart')
        }}</NuxtLink>
        <button
          @click="proceedToShipping"
          class="w-1/2 md:w-1/3 ml-auto py-2 bg-primary text-white rounded-md focus:outline-none hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105"
        >
          {{ $t('cartDetails.goToShipping') }}
        </button>
      </div>
    </div>
  </div>
</template>
