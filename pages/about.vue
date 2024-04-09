<script setup lang="ts">
useSeoMeta({
  title: 'Candleaf - About Us',
  ogTitle: 'Candleaf - About Us',
  description:
    'Learn more about Candleaf, your go-to source for premium handcrafted candles that elevate ambiance and soothe the senses.',
  ogDescription:
    'Learn more about Candleaf, your go-to source for premium handcrafted candles that elevate ambiance and soothe the senses.'
});

const { t } = useI18n();
const texts = [t('about.aboutCandleafVision'), t('about.candlesQuality'), t('about.candleCollection')];
</script>

<template>
  <Container>
    <div class="mx-auto max-w-lg py-12">
      <h1 class="text-3xl font-bold text-center mb-4">{{ $t('about.welcomeTitle') }}</h1>
      <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mt-4" v-for="(text, idx) in texts" :key="idx">
        {{ text }}
      </p>
    </div>
  </Container>
</template>
