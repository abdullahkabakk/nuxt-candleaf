<template>
  <Container>
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-semibold text-center mb-2">{{ $t('register.title') }}</h1>
      <p class="text-center text-gray-600 dark:text-gray-200 mb-6">{{ $t('register.description') }}</p>
      <VForm @submit="handleSubmit" :validation-schema="registerSchema">
        <Builder :form-fields="registerFields" button-text="Register" class="w-full">
          <template #beforeButton>
            <div class="mt-4 flex ml-auto text-sm md:text-base justify-end flex-row">
              <p class="text-gray-600 dark:text-gray-200">{{ $t('register.alreadyHaveAccount') }}</p>
              <nuxt-link to="/login" class="text-primary hover:underline ml-1">{{
                $t('register.clickHereToLogin')
              }}</nuxt-link>
            </div>
          </template>
        </Builder>
      </VForm>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { registerFields, registerSchema } from '~/forms/register';

useSeoMeta({
  title: 'Register - Candleaf',
  ogTitle: 'Register - Candleaf',
  description: 'Register to Candleaf to get access to exclusive deals and discounts.',
  ogDescription: 'Register to Candleaf to get access to exclusive deals and discounts.'
});

const handleSubmit = (val: any, resetForm: any) => {
  console.log(val);
  // Handle form submission here
};
</script>
