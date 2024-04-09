<template>
  <Container>
    <div class="container max-w-2xl mx-auto py-12">
      <h1 class="text-3xl font-bold text-center mb-8">{{ $t('termsConditions.title') }}</h1>

      <div class="flex flex-col md:flex-row items-center justify-center">
        <div class="md:pl-8">
          <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            {{ $t('termsConditions.description') }}
          </p>
          <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
            {{ $t('termsConditions.byAccessingWebsite') }}
          </p>
          <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
            {{ $t('termsConditions.followingTerminology') }}
          </p>

          <h2 class="text-xl font-bold mt-8">{{ $t('termsConditions.license') }}</h2>
          <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
            {{ $t('termsConditions.licenseDescription') }}
          </p>

          <h2 class="text-xl font-bold mt-8">{{ $t('termsConditions.variationTerms') }}</h2>
          <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
            {{ $t('termsConditions.variationTermsDescription') }}
          </p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Candleaf - Terms & Conditions',
  ogTitle: 'Candleaf - Terms & Conditions',
  description:
    "Read Candleaf's terms and conditions to understand the rules and guidelines for using our website and services.",
  ogDescription:
    "Read Candleaf's terms and conditions to understand the rules and guidelines for using our website and services."
});
</script>
