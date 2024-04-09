<template>
  <Container>
    <!-- Cart is empty -->
    <CartIsEmpty v-if="!getCart.length" />
    <!-- Cart has items -->
    <div class="grid grid-cols-1 md:grid-cols-3 my-5 gap-10" v-else>
      <!-- Cart Items -->
      <CartProducts :cart="getCart" />
      <!-- Payment Summary -->
      <CartSummary />
    </div>
  </Container>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Cart',
  description: 'Your cart items',
  ogTitle: 'Cart',
  ogDescription: 'Your cart items',
  ogLocale: 'en_US'
});

const store = useCartStore();
const { getCart } = storeToRefs(store);
</script>
