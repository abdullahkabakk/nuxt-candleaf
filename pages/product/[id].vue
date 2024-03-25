<script setup lang="ts">
import type { Product } from '~/types/product';

const id = ref(useRoute().params.id);
const product = ref(products.find((p) => p.id === parseInt(id.value as string)) as Product);
const details = [
  product.value.wax,
  product.value.fragrance,
  [product.value.burning_time, product.value.dimension, product.value.weight]
];

const labels = [
  'productDetail.labels.wax',
  'productDetail.labels.fragrance',
  ['productDetail.labels.burnTime', 'productDetail.labels.dimensions', 'productDetail.labels.weight']
];

useSeoMeta({
  title: product.value.name,
  ogTitle: product.value.name,
  description: product.value.description,
  ogDescription: product.value.description,
  ogImage: product.value.img
});
</script>

<template>
  <Container class="py-5 lg:py-10">
    <div class="grid grid-cols-1 mb-10 md:grid-cols-2 gap-10">
      <ProductImageDetails :img="product.img" />
      <div>
        <ProductTitle :name="product.name" :description="product.description" />
        <ProductDescription :price="product.price" :id="product.id" />
        <ProductDetails :details="details" :labels="labels" />
      </div>
    </div>
  </Container>
</template>
