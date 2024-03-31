<template>
  <Container>
    <div class="grid grid-cols-1 my-5 md:grid-cols-2 gap-10" v-if="!isLoading">
      <!-- Left Side: Customer Information -->
      <div>
        <!-- Customer Information Form -->
        <div>
          <h2 class="text-xl font-semibold mb-3">{{ $t('cartDetails.contact') }}</h2>
          <FormTheInput placeholder="Email or mobile phone number" />
          <div class="mt-2 mb-8">
            <input type="checkbox" id="newsletter" class="mr-2" />
            <label for="newsletter">{{ $t('cartDetails.addToNewsletterForDiscount') }}</label>
          </div>
          <CartDetailsShippingForm />
          <!-- Proceed to Shipping and Back to Cart -->
          <div class="flex flex-row">
            <NuxtLink to="/cart" class="text-primary my-auto underline hover:no-underline">{{$t('cartDetails.backToCart')}}</NuxtLink>
            <button
              @click="proceedToShipping"
              class="w-1/2 md:w-1/3 ml-auto py-2 bg-primary text-white rounded-md focus:outline-none hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105"
            >
              {{$t('cartDetails.goToShipping')}}
            </button>
          </div>
        </div>
      </div>
      <!-- Right Side: Cart Summary -->
      <CartDetailsRightSection />
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

definePageMeta({
  layout: 'payment'
});

onBeforeMount(() => {
  !store.getCartLength && useRouter().push('/cart');
  isLoading.value = false;
});

function proceedToShipping() {}
</script>
