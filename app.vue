<template>
  <div class="max-w-screen h-full transition-colors duration-500 relative min-h-screen flex flex-col bg-white dark:bg-background-dark">
    <Header />
    <NatureCandle />
    <div class="max-w-4xl lg:max-w-screen-xl mx-auto  w-full mt-16">
      <h2 class="text-3xl text-center">Products</h2>
      <p class="mt-2 text-center text-gray-600  dark:text-gray-300">Order it for you or for your beloved ones</p>
      <ProductCard class="mt-12 px-4 xl:px-0"/>
    </div>
    <div class="bg-gray-50 dark:bg-card-dark mt-12 py-16">
      <div class="max-w-4xl lg:max-w-screen-xl mx-auto mt-20 px-4 xl:px-0">
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
    <div class="bg-primary/10 dark:bg-background-dark py-20">
      <SectionTitleDescription title="Testimonials" description="Some quotes from our happy customers" />
        <div class="max-w-4xl lg:max-w-screen-xl mx-auto mt-4 px-4 xl:px-0">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div v-for="customer in customers">
            <div class="flex flex-col bg-card-light dark:bg-card-dark p-4 py-6 rounded-lg shadow hover:shadow-md w-full">
                <img :src="customer.avatar" alt="avatar" class="rounded-full h-16 w-16 mx-auto">
              <div class="flex w-full">
                <div class="flex flex-row mt-1 mx-auto">
                    <span class="text-primary space-x-1 mx-auto">
                      <Icon name="mdi:star" class="h-5 w-5" v-for="n in customer.stars" :key="n" />
                    </span>
                  <span class="text-gray-600 mx-auto  dark:text-gray-300">
                      <Icon name="mdi:star-outline" class="ml-1 h-5 w-5" v-for="n in 5 - customer.stars" :key="n" />
                    </span>
                </div>
              </div>
              <p class="mt-4 text-card-dark dark:text-card-light mx-auto w-48 text-center font-bold">"{{ customer.message }}"</p>
                  <h3 class="font-light text-center mt-1 text-gray-400">{{ customer.name }}</h3>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="bg-white dark:bg-card-dark/30 py-20">
      <SectionTitleDescription title="Popular" description="Our top selling product that you may like" />
      <div class="max-w-4xl lg:max-w-screen-xl mx-auto mt-10 px-4 xl:px-0">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="product in 4" :key="product">
            <div class="shadow hover:shadow-md rounded-lg bg-card-light/20 dark:bg-card-dark transition-colors duration-300">
              <div class="bg-primary/10 dark:bg-cardImage-dark mx-auto transition-colors duration-300 rounded-t-lg">
                <img :src="getRandomProduct().img" alt="" class="mx-auto">
              </div>
              <div class="mx-auto p-4">
                <h2 class="hover:underline font-semibold text-background-dark dark:text-background-light text-lg">{{ getRandomProduct().name }}</h2>
                <p class="mt-3 text-card-dark dark:text-card-light">{{ getRandomProduct().description }}</p>
                <div class="flex flex-row pb-2 mt-2">
                  <p class=" my-auto">{{ getRandomProduct().price }}$</p>
                  <button class="ml-auto py-1 bg-primary px-4 text-white rounded-lg">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>

    <footer class="bg-background-dark">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="https://flowbite.com/" class="flex items-center">
              <img src="footer.png" class="" alt="FlowBite Logo" />
            </a>
            <div class="text-white">
              Your natural candle made for your home and for your wellness.
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-primary uppercase dark:text-primary">Discovery</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https://flowbite.com/" class="hover:underline">New Season</a>
                </li>                <li class="mb-4">
                  <a href="https://flowbite.com/" class="hover:underline">Most Searched</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" class="hover:underline">Most Sold</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-primary uppercase dark:text-primary">About</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Help</a>
                </li>
                <li class="mb-4">
                  <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Shipping</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Affiliate</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-primary uppercase dark:text-primary">Legal</h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">Contact Us</a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Candleaf™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
              </svg>
              <span class="sr-only">Discord community</span>
            </a>

            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
              </svg>
              <span class="sr-only">GitHub account</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg  class="w-4 h-4 " xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span class="sr-only">Linkedin account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import SectionTitleDescription from "~/components/SectionTitleDescription.vue";

function getRandomProduct() {
  return products[Math.floor(Math.random() * products.length)];
}

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

const customers = [
  {
    id: 1,
    name: 'John Doe',
    message: 'I Love it! No more air fresheners',
    avatar: 'https://avatars.githubusercontent.com/u/739984?v=4',
    stars: 5,
  },
  {
    id: 2,
    name: 'Jane Doe',
    message: 'Recommend to all my friends',
    avatar: 'https://avatars.githubusercontent.com/u/73995?v=4',
    stars: 5,
  },
  {
    id: 3,
    name: 'James Lane',
    message: 'Looks very natural, the smell is awesome',
    avatar: 'https://avatars.githubusercontent.com/u/739982?v=4',
    stars: 4,
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