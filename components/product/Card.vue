<script setup lang="ts">
import type { Product } from '~/types/product';

// Define props
const { product } = defineProps<{ product: Product }>();

// Initialize variables
const store = useCartStore();
const count = ref(store.getCartItemById(product.id)?.count || 0);

// Watch for changes in count
watch(() => store.getCartItemById(product.id)?.count, (value) => count.value = value || 0)

// Function to add item to cart
const addItem = () => store.addToCart({ id: product.id, count: 1, option: '' })

// Function to update item count
const updateItem = (isIncrease: boolean) => store.updateCart(product.id, count.value + (isIncrease ? 1 : -1))
</script>

<template>
  <!-- Product Card -->
  <Card class="flex flex-col hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-primary/20 dark:hover:bg-primary/20 hover:scale-105">    <!-- Product Image -->
    <div class="bg-gray-200 rounded-t-lg">
      <NuxtImg :src="`/${product.img}`" format="webp" sizes="20vw" alt="Product Image" class="mx-auto rounded-t-lg" />
    </div>
    <!-- Product Details -->
    <div class="mx-auto p-4 h-full flex flex-col">
      <!-- Product Name -->
      <NuxtLink
        :to="`/product/${product.id}`"
        class="hover:underline font-semibold text-background-dark dark:text-background-light text-lg"
        >{{ product.name }}</NuxtLink>
      <!-- Product Description -->
      <p class="mt-3 text-card-dark dark:text-card-light">{{ product.description }}</p>
      <!-- Product Price and Add to Cart Button -->
      <div class="flex mt-auto justify-between items-center pt-2">
        <!-- Product Price -->
        <p class="text-my-auto">{{ product.price }}$</p>
        <!-- Add to Cart Button -->
        <Button name="Add to cart" @click="addItem" v-if="count == 0" />
        <!-- Item Count and Increment/Decrement Buttons -->
        <div class="flex items-center" v-else>
          <Button name="-" @click="updateItem(false)" />
          <p class="mx-2">{{ count }}</p>
          <Button name="+" @click="updateItem(true)" />
        </div>
      </div>
    </div>
  </Card>
</template>
