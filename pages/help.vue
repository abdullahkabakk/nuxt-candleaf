<template>
  <Container>
    <div class="container mx-auto mb-10">
      <h1 class="text-3xl font-bold text-center mb-8">{{ $t('help.title') }}</h1>
      <div class="max-w-lg mx-auto">
        <h2 class="text-xl font-bold">{{ $t('help.faq') }}</h2>
        <!-- FAQ Section -->
        <div class="mt-4 space-y-4">
          <div v-for="(item, index) in faqList" :key="index">
            <button
              @click="toggleAnswer(index)"
              class="w-full p-4 flex border rounded-lg justify-between items-center text-gray-600 dark:text-gray-200 focus:outline-none"
            >
              <span class="font-semibold">{{ item.question }}</span>
              <span v-if="!item.isOpen">&#43;</span>
              <span v-else>&#45;</span>
            </button>
            <div v-if="item.isOpen" class="p-4">
              <p class="text-gray-700 dark:text-gray-300">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Candleaf - Help Center',
  ogTitle: 'Candleaf - Help Center',
  description: "Find answers to frequently asked questions and get support at Candleaf's Help Center.",
  ogDescription: "Find answers to frequently asked questions and get support at Candleaf's Help Center."
});

const { t } = useI18n();

let faqList = ref([
  {
    question: t('help.questions.howToOrder'),
    answer: t('help.answers.howToOrder'),
    isOpen: true
  },
  {
    question: t('help.questions.paymentMethods'),
    answer: t('help.answers.paymentMethods'),
    isOpen: false
  },
  {
    question: t('help.questions.trackOrder'),
    answer: t('help.answers.trackOrder'),
    isOpen: false
  },
  {
    question: t('help.questions.shipping'),
    answer: t('help.answers.shipping'),
    isOpen: false
  },
  {
    question: t('help.questions.returnPolicy'),
    answer: t('help.answers.returnPolicy'),
    isOpen: false
  },
  {
    question: t('help.questions.customerSupport'),
    answer: t('help.answers.customerSupport'),
    isOpen: false
  }
]);

const toggleAnswer = (index: number) => (faqList.value[index].isOpen = !faqList.value[index].isOpen);
</script>
