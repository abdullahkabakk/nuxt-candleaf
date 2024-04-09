<script setup lang="ts">
import type CartInfo from '~/types/cartInfo';
import type { Product } from '~/types/product';

const { cart } = defineProps<{ cart: CartInfo[] }>();
const store = useProductStore();
const { getProduct } = storeToRefs(store);
</script>

<template>
  <!-- Cart Items -->
  <div class="md:col-span-2">
    <h2 class="font-bold text-lg mb-5">{{ $t('cartDetails.cart') }}</h2>
    <div
      v-for="(item, idx) in cart"
      :key="idx"
      class="flex my-5 flex-col md:flex-row border dark:border-gray-600 rounded-lg p-4 gap-5 shadow-md"
    >
      <CartProductCard :count="item.count" :product="getProduct(item.id) ?? ({} as Product)" />
    </div>
  </div>
</template>
