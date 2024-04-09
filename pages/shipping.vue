<template>
  <Container>
    <div class="container max-w-2xl mx-auto py-12">
      <h1 class="text-3xl font-bold text-center mb-8">{{ $t('shipping.title') }}</h1>
      <div class="flex flex-col md:flex-row items-center justify-center">
        <div class="md:pl-8">
          <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            {{ $t('shipping.description') }}
          </p>
          <h2 class="text-xl font-bold mt-8">{{ $t('shipping.shippingMethods') }}</h2>
          <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
            {{ $t('shipping.shippingMethodsDescription') }}:
          </p>
          <ul class="list-disc pl-6">
            <li v-for="(val, idx) in shippingTypes" :key="idx">
              <span class="font-semibold">{{ val.type }}: </span>
              <span>{{ val.description }}</span>
            </li>
          </ul>
          <span>{{ $t('shipping.shippingNote') }}</span>
          <div v-for="(val, idx) in shippingTitlesDesc" :key="idx">
            <h2 class="text-xl font-bold mt-8">{{ val.title }}</h2>
            <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
              {{ val.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Candleaf - Shipping Information',
  ogTitle: 'Candleaf - Shipping Information',
  description: "Learn about Candleaf's shipping policies and procedures, including shipping methods and rates.",
  ogDescription: "Learn about Candleaf's shipping policies and procedures, including shipping methods and rates."
});

const { t } = useI18n();

const shippingTypes = [
  {
    type: t('shipping.shippingTypes.standard'),
    description: t('shipping.shippingTypes.standardDescription')
  },
  {
    type: t('shipping.shippingTypes.expedited'),
    description: t('shipping.shippingTypes.expeditedDescription')
  },
  {
    type: t('shipping.shippingTypes.express'),
    description: t('shipping.shippingTypes.expressDescription')
  }
];

const shippingTitlesDesc = [
  {
    title: t('shipping.shippingRates'),
    description: t('shipping.shippingRatesDescription')
  },
  {
    title: t('shipping.orderProcessing'),
    description: t('shipping.orderProcessingDescription')
  },
  {
    title: t('shipping.trackingOrder'),
    description: t('shipping.trackingOrderDescription')
  }
];
</script>
