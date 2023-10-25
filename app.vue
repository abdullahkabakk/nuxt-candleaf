<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
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