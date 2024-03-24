<template>
  <div
    class="mx-4 lg:w-1/2 xl:w-1/3 bg-white/70 dark:bg-card-dark/50 text-black dark:text-white text-center rounded-lg flex flex-col p-16"
  >
    <h1 class="text-4xl">
      &#127793; <br />
      {{ $t('home.marketingCard.title') }}
    </h1>
    <p class="mt-2">{{ $t('home.marketingCard.description') }}</p>
    <Button class="md:w-2/3 mx-auto mt-10 whitespace-nowrap" :name="$t('home.marketingCard.button')" />
  </div>
</template>
