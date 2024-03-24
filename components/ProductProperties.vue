<script setup lang="ts">
import productProperties from '~/utils/productProperties';
</script>

<template>
  <div class="bg-gray-50 dark:bg-card-dark mt-12 py-16">
    <Container>
      <h3 class="text-4xl mb-4">{{ $t('home.productProperties.title') }}</h3>
      <span class="text-primary">{{ $t('home.productProperties.description') }}</span>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:gap-8">
        <div class="order-last md:order-first">
          <ul
            class="mt-4 space-y-2 list-inside list-image-[url(checkmark.png)] dark:list-image-[url(checkmark-dark.png)] text-card-dark dark:text-card-light"
          >
            <li v-for="item in productProperties" :key="item.id">
              <span class="font-bold">{{ item.title }}:</span> {{ item.description }}
            </li>
          </ul>
          <Button :name="$t('home.productProperties.button')" class="w-1/4 mt-6" />
        </div>
        <div class="my-auto">
          <NuxtImg
            src="/image.png"
            alt="Product Image"
            format="webp"
            class="mx-auto mt-10 mb-5 rounded-lg md:mt-0 md:mb-0"
            width="434"
            height="301"
          />
        </div>
      </div>
    </Container>
  </div>
</template>
