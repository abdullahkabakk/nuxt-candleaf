<script setup lang="ts">
import type { Product } from '~/types/product';

const { product } = defineProps<{ product: Product }>();

const store = useCartStore();

function addToCart() {
  const request = {
    id: product.id,
    count: 1,
    option: ''
  };
  store.addToCart(request);
}
</script>

<template>
  <Card class="flex flex-col h-full">
    <div class="bg-primary/10 dark:bg-cardImage-dark mx-auto rounded-t-lg">
      <NuxtImg :src="`/${product.img}` ?? ''" format="webp" sizes="20vw" alt="Product Image" class="mx-auto" />
    </div>
    <div class="mx-auto p-4 h-full flex flex-col">
      <NuxtLink
        :to="`/product/${product.id}`"
        class="hover:underline font-semibold text-background-dark dark:text-background-light text-lg"
        >{{ product.name }}</NuxtLink
      >
      <p class="mt-3 text-card-dark dark:text-card-light">{{ product.description }}</p>
      <div class="flex mt-auto justify-between items-center">
        <p class="text-my-auto">{{ product.price }}$</p>
        <Button name="Add to cart" @click="addToCart" />
      </div>
    </div>
  </Card>
</template>
