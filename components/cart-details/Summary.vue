<script setup lang="ts">
const store = useCartStore();
const cart = store.getCart;
const getItem = (id: number) => products.find((p) => p.id === id)!;

const { getCartTotal } = storeToRefs(store);
const floatFixed = 2;
</script>

<template>
  <div class="grow">
    <div class="mb-4 max-h-[25em] pt-5 overflow-y-auto">
      <div v-for="item in cart" :key="item.id" class="flex items-center justify-between mb-4">
        <div class="flex items center">
          <UChip :text="item.count" size="2xl">
            <NuxtImg
              :src="`${getItem(item.id).img}`"
              format="webp"
              sizes="5vw"
              alt="Product Image"
              class="rounded-lg h-24 object-cover"
            />
          </UChip>
          <div class="ml-4">
            <h2 class="text-xl font-semibold mb-3">{{ getItem(item.id).name }}</h2>
            <p class="text-lg text-primary font-semibold">${{ item.count * getItem(item.id).price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-5 border-t pt-4">
      <label class="block mb-2">{{ $t('cartDetails.couponCode') }}</label>
      <div class="flex">
        <input
          type="text"
          class="w-full border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          :placeholder="$t('cartDetails.couponCode')"
        />
        <button
          class="bg-gray-300 whitespace-nowrap rounded-r-md px-4 py-2 text-gray-700 hover:bg-gray-400 transition-colors duration-300"
        >
          {{ $t('cartDetails.addCode') }}
        </button>
      </div>
    </div>
    <div class="border-t pt-4">
      <div class="flex justify-between mb-2">
        <span>{{ $t('cartDetails.subTotal') }}:</span>
        <span>${{ getCartTotal.toFixed(floatFixed) }}</span>
      </div>
      <div class="flex justify-between mb-2">
        <span>{{ $t('cartDetails.shipping') }}:</span>
        <span>{{ $t('cartDetails.shippingWillBeCalculatedNextStep') }}</span>
      </div>
      <hr class="my-2 border-gray-200" />
      <div class="flex justify-between font-semibold text-lg">
        <span>{{ $t('cartDetails.total') }}:</span>
        <span>${{ getCartTotal.toFixed(floatFixed) }}</span>
      </div>
    </div>
  </div>
</template>
