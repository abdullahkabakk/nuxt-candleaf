<script setup lang="ts">
const getRandomProduct = () => products[Math.floor(Math.random() * products.length)];
</script>

<template>
  <div class="bg-gray-50 dark:bg-card-dark/50 py-10">
    <Container>
      <SectionTitleDescription
        :title="$t('home.popularProducts.title')"
        :description="$t('home.popularProducts.description')"
      />
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10">
        <ProductCard v-for="index in 4" :key="index" :product="getRandomProduct()" />
      </div>
    </Container>
  </div>
</template>
