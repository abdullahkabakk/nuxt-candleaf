<script setup lang="ts">
import { loginFields, loginSchema } from '~/forms/login';

useSeoMeta({
  title: 'Login - Candleaf',
  ogTitle: 'Login - Candleaf',
  description: 'Login to Candleaf to get access to exclusive deals and discounts.',
  ogDescription: 'Login to Candleaf to get access to exclusive deals and discounts.'
});

const handleSubmit = (val: any, resetForm: any) => {
  console.log(val);
  // Handle form submission here
};
</script>

<template>
  <Container>
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-semibold text-center mb-2">{{ $t('login.title') }}</h1>
      <p class="text-center text-gray-600 dark:text-gray-200 mb-6">{{ $t('login.description') }}</p>
      <VForm @submit="handleSubmit" :validation-schema="loginSchema">
        <Builder :form-fields="loginFields" button-text="Login" class="w-full">
          <template #beforeButton>
            <div class="mt-4 flex ml-auto justify-end flex-row">
              <p class="text-gray-600 dark:text-gray-200">{{ $t('login.dontHaveAccount') }}</p>
              <nuxt-link to="/register" class="text-primary hover:underline ml-1">{{
                $t('login.clickHereToRegister')
              }}</nuxt-link>
            </div>
          </template>
        </Builder>
      </VForm>
    </div>
  </Container>
</template>
