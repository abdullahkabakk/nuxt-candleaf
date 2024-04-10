<script setup lang="ts">
const { $locally } = useNuxtApp();
import { shippingFields, shippingSchema } from '~/forms/cart-details';
import axios from 'axios';

const countries = ref([]);
const cityOptions = ref([]);
const isLoading = ref(true);
const isSelected = ref(false);
const isCitySelected = ref(false);
const { t } = useI18n();
const toast = useToast();

async function fetchCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  return data.map((country: any) => ({
    name: country.name.common,
    code: country.cca2
  }));
}

async function fetchCities(country: string) {
  isCitySelected.value = false;
  const response = await axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
    country: country
  });

  cityOptions.value = response.data.data.map((city: any) => ({
    name: city,
    value: city
  }));

  isSelected.value = true;
  isCitySelected.value = true;
}

onMounted(() => {
  fetchCountries().then((data) => {
    countries.value = data;
  });

  isLoading.value = false;
});

function proceedToShipping(val: any, resetForm: any) {
  // save to local storage
  $locally.setItem('shipping', JSON.stringify(val));
  // reset form
  resetForm.resetForm();

  toast.add({ title: t('common.processSuccess') });
  // redirect to shipping page
  setInterval(() => {
    useRouter().push('/cart/shipping');
  }, 1500);
}
</script>

<template>
  <div class="mb-6">
    <h2 class="text-xl font-semibold mb-2">{{ $t('shippingForm.title') }}</h2>
    <VForm @submit="proceedToShipping" :validation-schema="shippingSchema">
      <Builder :form-fields="shippingFields" />
      <FormSelect
        v-if="!isLoading"
        @change="fetchCities($event.target.value)"
        name="country"
        value-key="name"
        label-key="name"
        :options="countries"
        :placeholder="$t('shippingForm.form.country.placeholder')"
        :label="$t('shippingForm.form.country.label')"
      />
      <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-2" v-if="isSelected">
        <FormSelect
          :disabled="isCitySelected"
          label-key="name"
          value-key="value"
          name="city"
          :options="cityOptions"
          :placeholder="$t('shippingForm.form.city.placeholder')"
          :label="$t('shippingForm.form.city.label')"
        />
        <FormInput
          name="state"
          type="text"
          :placeholder="$t('shippingForm.form.state.placeholder')"
          :label="$t('shippingForm.form.state.label')"
        />
        <FormInput
          name="zip"
          type="text"
          :placeholder="$t('shippingForm.form.zip.placeholder')"
          :label="$t('shippingForm.form.zip.label')"
        />
      </div>
      <FormInput
        name="note"
        type="text"
        :placeholder="$t('shippingForm.form.note.placeholder')"
        :label="$t('shippingForm.form.note.label')"
      />
      <!-- Proceed to Shipping and Back to Cart -->
      <div class="flex flex-row">
        <NuxtLink to="/cart" class="text-primary my-auto underline hover:no-underline">{{
          $t('cartDetails.backToCart')
        }}</NuxtLink>
        <button
          class="w-1/2 md:w-1/3 ml-auto py-2 bg-primary text-white rounded-md focus:outline-none hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105"
        >
          {{ $t('cartDetails.goToShipping') }}
        </button>
      </div>
    </VForm>
  </div>
</template>
