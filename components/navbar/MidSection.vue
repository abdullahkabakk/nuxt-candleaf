<template>
  <div class="my-auto mt-1 space-x-4">
    <NuxtLink v-for="link in ['', 'contact', 'about']" :to="`/${link}`" class="hover:underline">{{
      link === '' ? $t('home.nav.home') : $t(`home.nav.${link}`)
    }}</NuxtLink>
  </div>
</template>
