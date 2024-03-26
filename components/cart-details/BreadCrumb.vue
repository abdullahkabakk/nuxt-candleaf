<script setup lang="ts">
const steps = [
  { name: 'Cart', path: '/cart' },
  { name: 'Details', path: '/cart/details' },
  { name: 'Shipping', path: '/cart/shipping' },
  { name: 'Payment', path: '/cart/payment' }
];

const currentStepIndex = ref(steps.findIndex((step) => step.path === useRouter().currentRoute.value.path));

const stepClass = (stepNumber: number): string => {
  if (currentStepIndex.value === stepNumber) {
    return 'text-gray-600 dark:text-gray-200';
  }

  if (currentStepIndex.value > stepNumber) {
    return 'text-primary';
  } else {
    return 'text-gray-400 dark:text-gray-600';
  }
};

</script>

<template>
  <Container>
    <h1 class="font-bold text-lg sm:text-xl lg:text-2xl overflow-hidden whitespace-nowrap overflow-ellipsis">
      <template v-for="(step, index) in steps" :key="index">
            <span
              :class="stepClass(index)"
              class="hover:cursor-pointer hover:underline transition duration-300 ease-in-out"
            >
              {{ step.name }}
            </span>
        <span v-if="index !== steps.length - 1" class="mx-2">&gt;</span>
      </template>
    </h1>
  </Container>
</template>
