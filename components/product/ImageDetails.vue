<script setup lang="ts">
defineProps(['img']);
</script>

<template>
  <div>
    <NuxtImg :src="img" :alt="img" />
    <div class="text-lg text-center mt-5">{{ $t('productDetail.productsHandmade') }}</div>
    <div class="text-lg text-primary font-bold mt-2 text-center">{{ $t('productDetail.freeShipping') }}</div>
  </div>
</template>
