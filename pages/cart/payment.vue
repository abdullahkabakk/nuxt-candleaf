<template>
  <Container>
    <div class="flex flex-wrap-reverse my-5 gap-10" v-if="!isLoading">
      <!-- Left Side: Customer Information -->
      <div class="md:basis-1/2">
        <CartPaymentForm />
      </div>
      <!-- Right Side: Cart Summary -->
      <CartDetailsSummary :shipping="price" />
    </div>
  </Container>
</template>

<script setup lang="ts">
const { $locally } = useNuxtApp();

useSeoMeta({
  title: 'Checkout - Payment',
  description: 'Review your cart items and provide payment information',
  ogTitle: 'Checkout - Payment',
  ogDescription: 'Review your cart items and provide payment information'
});

const store = useCartStore();
const isLoading = ref(true);
const price = ref($locally.getItem('shippingPrice') ?? '0');

definePageMeta({ layout: 'payment' });

onBeforeMount(() => {
  !store.getCartLength && useRouter().push('/cart');
  isLoading.value = false;
});
</script>
