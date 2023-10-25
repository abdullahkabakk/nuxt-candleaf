<script setup lang="ts">

import products from "~/utils/products";
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10">
    <div v-for="product in products" :key="product.id">
      <div class="shadow-lg hover:shadow-2xl rounded-lg bg-card-light/20 dark:bg-card-dark transition-colors duration-300">
        <div class="bg-primary/10 dark:bg-cardImage-dark mx-auto transition-colors duration-300 rounded-t-lg">
          <img :src="product.img" alt="" class="mx-auto">
        </div>
        <div class="mx-auto p-4">
          <h2 class="hover:underline font-semibold text-background-dark dark:text-background-light text-lg">{{ product.name }}</h2>
          <p class="mt-3 text-card-dark dark:text-card-light">{{ product.description }}</p>
          <div class="flex flex-row pb-2 mt-2">
          <p class=" my-auto">{{ product.price }}$</p>
          <button class="ml-auto py-1 bg-primary px-4 text-white rounded-lg">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
