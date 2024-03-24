<script setup lang="ts">
import footerLinks from '~/utils/footerLinks';
</script>

<template>
  <div v-for="column in footerLinks">
    <h2 class="mb-6 text-sm font-semibold text-primary uppercase dark:text-primary">{{ column.title }}</h2>
    <ul class="text-gray-500 dark:text-gray-400 font-medium">
      <li class="mb-4" v-for="link in column.links">
        <nuxt-link :to="link.link" class="hover:underline">{{ link.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
