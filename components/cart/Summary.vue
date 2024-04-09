<script setup lang="ts">
const store = useCartStore();
const { getCartTotal } = storeToRefs(store);
const shipping = 9.99;
const freeShippingThreshold = 50;
const floatFixed = 2;
</script>

<template>
  <div class="col-span-1">
    <h2 class="font-bold text-lg">{{ $t('cart.paymentSummary') }}</h2>
    <div
      class="sticky top-20 dark:border-gray-600 right-0 mt-5 border text-gray-700 dark:text-gray-300 rounded-lg p-4 shadow-md"
    >
      <!-- Payment Details -->
      <div class="flex justify-between mb-3">
        <span>{{ $t('cart.subtotal') }}:</span>
        <span>${{ getCartTotal.toFixed(floatFixed) }}</span>
      </div>
      <div class="flex justify-between mb-3">
        <span>{{ $t('cart.shipping') }}:</span>
        <span>{{ getCartTotal > freeShippingThreshold ? $t('cart.free') : `$${shipping}` }}</span>
      </div>
      <hr class="my-2 border-gray-200 dark:border-gray-600" />
      <div class="flex justify-between font-semibold text-lg">
        <span>{{ $t('cart.total') }}:</span>
        <span
          >${{
            getCartTotal > freeShippingThreshold
              ? getCartTotal.toFixed(floatFixed)
              : (getCartTotal + shipping).toFixed(floatFixed)
          }}</span
        >
      </div>
      <!-- Checkout Button -->
      <NuxtLink to="/cart/details" class="flex">
        <span
          class="mt-4 text-center w-full py-2 bg-primary text-white rounded-md focus:outline-none hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105"
        >
          {{ $t('cart.proceedToCheckout') }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
