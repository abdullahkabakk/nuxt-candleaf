<template>
  <Container>
    <div class="flex flex-wrap-reverse my-5 gap-10">
      <CartShippingTypes />
    </div>
  </Container>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Checkout - Shipping',
  description: 'Select a shipping method for your cart items',
  ogTitle: 'Checkout - Shipping',
  ogDescription: 'Select a shipping method for your cart items'
});

const store = useCartStore();

definePageMeta({ layout: 'payment' });

onBeforeMount(() => {
  !store.getCartLength && useRouter().push('/cart');
});
</script>
