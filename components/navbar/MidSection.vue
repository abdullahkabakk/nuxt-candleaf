<template>
  <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }">
    <UButton
      color="white"
      :label="$t('home.nav.discovery')"
      trailing-icon="i-heroicons-chevron-down-20-solid"
      class="text-md font-normal"
      variant="ghost"
    />
  </UDropdown>
  <div class="my-auto space-x-4">
    <NuxtLink v-for="link in ['', 'contact', 'about']" :to="`/${link}`" class="hover:underline">{{
      link === "" ? $t('home.nav.home') :$t(`home.nav.${link}`)
    }}</NuxtLink>
  </div>
</template>
