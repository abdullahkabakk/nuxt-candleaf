<script setup lang="ts">
import type { Customer } from '~/types/customer';

defineProps<{ customer: Customer }>();
</script>

<template>
  <Card class="flex flex-col p-4 py-6 w-full">
    <img :src="customer.avatar" alt="avatar" class="rounded-full h-16 w-16 mx-auto" />
    <div class="flex w-full">
      <div class="flex flex-row mt-1 mx-auto">
        <span class="text-primary space-x-1 mx-auto">
          <Icon name="mdi:star" class="h-5 w-5" v-for="star in customer.stars" :key="star" />
        </span>
        <span class="text-gray-600 mx-auto dark:text-gray-300">
          <Icon name="mdi:star-outline" class="ml-1 h-5 w-5" v-for="star in 5 - customer.stars" :key="star" />
        </span>
      </div>
    </div>
    <p class="mt-4 text-card-dark dark:text-card-light mx-auto w-48 text-center font-bold">"{{ customer.message }}"</p>
    <h3 class="font-light text-center mt-1 text-gray-400">{{ customer.name }}</h3>
  </Card>
</template>
