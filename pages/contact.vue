<template>
  <Container>
    <div class="container mx-auto py-12">
      <h1 class="text-3xl font-bold text-center mb-8">{{ $t('contact.title') }}</h1>

      <div class="flex flex-col md:flex-row items-center justify-center">
        <div class="md:w-1/2 md:pl-8">
          <p class="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            {{ $t('contact.description') }}
          </p>

          <!-- Contact Form -->
          <form @submit.prevent="submitForm" class="mt-8">
            <div class="mb-4">
              <label for="name" class="block text-gray-700 dark:text-gray-200 text-lg font-semibold">{{
                $t('contact.form.name')
              }}</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="mt-1 block border w-full border-gray-300 dark:border-gray-700 dark:bg-gray-700 p-3 focus:border-blue-400 focus:outline-none focus:ring dark:text-gray-200 rounded-md shadow-sm"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 dark:text-gray-200 text-lg font-semibold">{{
                $t('contact.form.email')
              }}</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="mt-1 p-3 border block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-700 focus:border-blue-400 focus:outline-none focus:ring dark:text-gray-200 rounded-md shadow-sm"
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-700 dark:text-gray-200 text-lg font-semibold">{{
                $t('contact.form.message')
              }}</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                required
                class="mt-1 block border w-full border-gray-300 dark:border-gray-700 dark:bg-gray-700 p-3 focus:border-blue-400 focus:outline-none focus:ring dark:text-gray-200 rounded-md shadow-sm"
              ></textarea>
            </div>
            <div class="flex">
              <button
                type="submit"
                class="py-3 px-8 mt-5 mx-auto bg-primary hover:bg-primary-600 text-white rounded-md focus:outline-none focus:bg-blue-600"
              >
                {{ $t('contact.form.submit') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Candleaf - Contact Us',
  ogTitle: 'Candleaf - Contact Us',
  description: "Contact Candleaf to get in touch with us. We'd love to hear from you!",
  ogDescription: "Contact Candleaf to get in touch with us. We'd love to hear from you!"
});

const formData = ref({
  name: '',
  email: '',
  message: ''
});

function submitForm() {
  console.log('Form submitted:', formData);
  formData.value = {
    name: '',
    email: '',
    message: ''
  };
}
</script>
