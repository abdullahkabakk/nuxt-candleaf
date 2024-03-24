<script setup lang="ts">
import type { SocialLink } from '~/types/socialLink';
defineProps<SocialLink>();
</script>

<template>
  <nuxt-link :to="link" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
    <Icon :name="icon" class="h-5 w-5" />
    <span class="sr-only">{{ sr }}</span>
  </nuxt-link>
</template>
