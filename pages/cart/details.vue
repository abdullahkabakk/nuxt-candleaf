<template>
  <Container>
    <div class="flex flex-wrap-reverse my-5 gap-10" v-if="!isLoading">
      <!-- Left Side: Customer Information -->
      <CartDetailsContactForm />
      <!-- Right Side: Cart Summary -->
      <CartDetailsSummary />
    </div>
  </Container>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Checkout - Details',
  description: 'Review your cart items and provide customer information',
  ogTitle: 'Checkout - Details',
  ogDescription: 'Review your cart items and provide customer information',
  ogLocale: 'en_US'
});

const store = useCartStore();
const isLoading = ref(true);

definePageMeta({ layout: 'payment' });

onBeforeMount(() => {
  !store.getCartLength && useRouter().push('/cart');
  isLoading.value = false;
});
</script>
