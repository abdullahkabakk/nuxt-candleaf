<template>
  <Container>
    <div class="container max-w-2xl mx-auto py-12">
      <h1 class="text-3xl font-bold text-center mb-8">{{ $t('privacyPolicy.title') }}</h1>
      <div class="flex flex-col md:flex-row items-center justify-center">
        <div class="md:pl-8">
          <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            {{ $t('privacyPolicy.description') }}
          </p>
          <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
            {{ $t('privacyPolicy.policyDescription') }}
          </p>
          <h2 class="text-xl font-bold mt-8">{{ $t('privacyPolicy.informationWeCollect') }}</h2>
          <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
            {{ $t('privacyPolicy.informationWeCollectDescription') }}
          </p>

          <h2 class="text-xl font-bold mt-8">{{ $t('privacyPolicy.howWeCollect') }}</h2>
          <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
            {{ $t('privacyPolicy.howWeCollectDescription') }}:
          </p>
          <ul class="list-disc pl-6">
            <li v-for="(val, idx) in howWeCollectList" :key="idx">{{ val }}</li>
          </ul>
          <h2 class="text-xl font-bold mt-8">{{ $t('privacyPolicy.sharingPersonalInfo') }}</h2>
          <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
            {{ $t('privacyPolicy.sharingPersonalInfoDesc') }}
          </p>

          <h2 class="text-xl font-bold mt-8">{{ $t('privacyPolicy.changesPrivacyPolicy') }}</h2>
          <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
            {{ $t('privacyPolicy.changesPrivacyPolicyDesc') }}
          </p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Candleaf - Privacy Policy',
  ogTitle: 'Candleaf - Privacy Policy',
  description:
    "Read Candleaf's privacy policy to understand how we collect, use, and protect your personal information.",
  ogDescription:
    "Read Candleaf's privacy policy to understand how we collect, use, and protect your personal information."
});

const { t } = useI18n();

const howWeCollectList = [
  t('privacyPolicy.howWeCollectList.improveCustomerService'),
  t('privacyPolicy.howWeCollectList.personalizeUserExp'),
  t('privacyPolicy.howWeCollectList.processTransition')
];
</script>
