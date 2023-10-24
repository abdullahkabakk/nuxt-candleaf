<template>
  <div class="max-w-screen transition-colors duration-500 relative min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
    <Header />
    <NatureCandle />
    <div class="max-w-4xl lg:max-w-screen-lg mx-auto w-full mt-16">
      <h2 class="text-3xl text-center">Products</h2>
      <p class="mt-2 text-center text-gray-600 dark:text-gray-300">Order it for you or for your beloved ones</p>
      <ProductCard class="mt-12"/>
    </div>
    <div class="bg-card-dark/10 dark:bg-card-dark mt-32">
      <div class="max-w-4xl lg:max-w-screen-lg mx-auto mt-20 px-2">
        <h3 class="text-4xl mb-4">Clean and fragrant soy wax</h3>
        <span class="text-primary">Made for your home and for your wellness</span>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:gap-8">
          <div class="order-last md:order-first	">
            <ul class="mt-4 space-y-2 list-inside list-image-[url(checkmark.png)] dark:list-image-[url(checkmark-dark.png)] text-card-dark dark:text-card-light">
              <li v-for="item in cleanArray" :key="item.id">
                <span class="font-bold">{{ item.title }}:</span> {{ item.description }}
              </li>
            </ul>
            <div class="mt-6 w-full flex">
              <button class="bg-primary mx-auto md:mx-0 text-white px-8 rounded-lg py-2">
                Learn more
              </button>
            </div>
          </div>
          <div class="my-auto ">
            <img src="image.png" alt="image" class="mx-auto mt-10 mb-5 rounded-lg md:mt-0 md:mb-0">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const cleanArray = [
  {
    title: 'Eco-sustainable',
    description: 'All our candles are made with natural soy wax, which is a renewable resource and is biodegradable.',
  },
  {
    title: 'Hypoallergenic',
    description: 'Soy wax is a natural product, so it does not contain any harmful chemicals or toxins.',
  },
  {
    title: 'Longer burning',
    description: 'Soy wax burns slower than paraffin wax, so you can enjoy your candle for longer.',
  },
  {
    title: 'Cleaner burning',
    description: 'Soy wax does not produce black soot, so it does not stain your walls or furniture.',
  },
  {
    title: 'Better fragrance',
    description: 'Soy wax holds fragrance better than paraffin wax, so you can enjoy a more intense scent.',
  },
  {
    title: 'Easy to clean',
    description: 'Soy wax is easy to clean with soap and water, so you can reuse your candle jar.',
  },
  {
    title: 'Handmade',
    description: 'All our candles are handmade with love and care, so you can enjoy a unique product.',
  }
]

// Add meta tags for SEO
onMounted(() => {
  const head = document.head;
  const title = document.createElement('title');
  title.innerText = 'The Nature Candle - Handmade Soy Wax Candles';
  head.appendChild(title);

  const description = document.createElement('meta');
  description.name = 'description';
  description.content = 'Discover handmade soy wax candles at Candleaf. Perfect for your moments of pleasure.';
  head.appendChild(description);

  const ogTitle = document.createElement('meta');
  ogTitle.property = 'og:title';
  ogTitle.content = 'The Nature Candle - Handmade Soy Wax Candles';
  head.appendChild(ogTitle);

  const ogDescription = document.createElement('meta');
  ogDescription.property = 'og:description';
  ogDescription.content = 'Discover handmade soy wax candles at Candleaf. Perfect for your moments of pleasure.';
  head.appendChild(ogDescription);

  const ogImage = document.createElement('meta');
  ogImage.property = 'og:image';
  ogImage.content = 'https://example.com/your-image.jpg'; // Replace with your image URL
  head.appendChild(ogImage);
});
</script>