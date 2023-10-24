<script setup lang="ts">
const products = [
  {
    img: 'image1.png',
    name: 'Spiced Mint',
    price: 9.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    id: 1,
  },
  {
    img: 'image1-1.png',
    name: 'Sweet Strawberry',
    price: 9.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    id: 2,
  },
  {
    img: 'image1-2.png',
    name: 'Cool Blueberries',
    price: 9.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    id: 3,
  },
  {
    img: 'image1-3.png',
    name: 'Fresh Lemon',
    price: 9.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    id: 4,
  },
  {
    img: 'image1-4.png',
    name: 'Juicy Orange',
    price: 9.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    id: 5,
  },
  {
    img: 'image1-5.png',
    name: 'Sweet Cherry',
    price: 9.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    id: 6,
  },
  {
    img: 'image1-6.png',
    name: 'Fresh Apple',
    price: 9.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    id: 7,
  },
  {
    img: 'image1-7.png',
    name: 'Sweet Peach',
    price: 9.99,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    id: 8,
  },
]
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10">
    <div v-for="product in products" :key="product.id">
      <div class="shadow-lg hover:shadow-2xl rounded-lg bg-card-light dark:bg-card-dark transition-colors duration-300">
        <div class="bg-primary/10 dark:bg-cardImage-dark mx-auto transition-colors duration-300 rounded-t-lg">
          <img :src="product.img" alt="" class="mx-auto">
        </div>
        <div class="mx-auto">
          <h2 class="pt-2 hover:underline text-background-dark dark:text-background-light text-lg ml-2">{{ product.name }}</h2>
          <p class="mt-3 text-center text-card-dark dark:text-card-light">{{ product.description }}</p>
          <p class="mt-3 text-right mr-2 pb-2">{{ product.price }}$</p>
        </div>
      </div>
    </div>
  </div>
</template>
