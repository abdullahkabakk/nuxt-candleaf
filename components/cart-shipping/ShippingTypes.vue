<template>
  <div class="container mx-auto py-6">
    <h2 class="text-3xl font-semibold mb-6">{{ $t('shippingDetails.title') }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Shipping Details -->
      <div class="bg-white dark:bg-gray-800 rounded-md shadow-md p-6">
        <h3 class="text-lg font-semibold mb-4">{{ $t('shippingDetails.shippingTo') }}</h3>
        <div v-for="(val, key, idx) in shipTo" :key="idx" class="mb-4">
          <span class="font-semibold dark:text-gray-200 text-gray-600">{{ labels[idx] }}: </span>
          <span>{{ val }}</span>
        </div>
      </div>
      <!-- Shipping Options -->
      <div class="bg-white dark:bg-gray-800 rounded-md shadow-md p-6">
        <h3 class="text-lg font-semibold mb-4">{{ $t('shippingDetails.shippingOptions') }}</h3>
        <ul>
          <li v-for="(shipping, type) in shippingTypes" :key="type" class="mb-4">
            <button
              @click="selectShippingOption(shipping.price)"
              class="w-full border hover:border-blue-500 hover:bg-gray-50 hover:shadow-md dark:hover:bg-gray-700 dark:hover:border-blue-600 rounded-md py-2 px-4 text-left focus:outline-none focus:border-blue-500 transition duration-150 ease-in-out"
            >
              <h4 class="text-base font-semibold mb-2">{{ shipping.name }}</h4>
              <p class="text-sm dark:text-gray-100 text-gray-600">{{ shipping.description }}</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const toast = useToast();

const { $locally } = useNuxtApp();

const shipTo = ref(JSON.parse($locally.getItem('shipping') || '{}'));

const { t } = useI18n();

const labels = [
  t('shippingForm.form.name.label'),
  t('shippingForm.form.surname.label'),
  t('shippingForm.form.address.label'),
  t('shippingForm.form.country.label'),
  t('shippingForm.form.city.label'),
  t('shippingForm.form.state.label'),
  t('shippingForm.form.zip.label')
];

const shippingTypes = [
  {
    name: 'Standard Shipping',
    description: 'Delivery within 5-7 business days.',
    price: 5
  },
  {
    name: 'Expedited Shipping',
    description: 'Delivery within 2-3 business days.',
    price: 10
  },
  {
    name: 'Express Shipping',
    description: 'Delivery within 1-2 business days.',
    price: 20
  }
];

const selectShippingOption = (price: number) => {
  $locally.setItem('shippingPrice', price.toString());

  toast.add({ title: t('common.processSuccess') });
  createToast(t('common.processSuccess'), { type: 'success' });
  // redirect to shipping page
  setInterval(() => {
    useRouter().push('/cart/payment');
  }, 1500);
};
</script>
