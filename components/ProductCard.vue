<script setup lang="ts">
import type {Product} from "~/utils/products";
import type {PropType} from "vue";

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});
</script>

<template>
  <Card>
    <div class="bg-primary/10 dark:bg-cardImage-dark mx-auto rounded-t-lg">
      <NuxtImg :src="`/${props.product?.img}` ?? ''" format="webp" sizes="20vw" alt="Product Image" class="mx-auto"/>
    </div>
    <div class="mx-auto p-4">
      <NuxtLink :to="`/product/${props.product?.id}`" class="hover:underline font-semibold text-background-dark dark:text-background-light text-lg">{{ props.product?.name }}</NuxtLink>
      <p class="mt-3 text-card-dark dark:text-card-light">{{ props.product?.description }}</p>
      <div class="flex items-center justify-between mt-2">
        <p class="text-my-auto">{{ props.product?.price }}$</p>
        <Button name="Add to cart"/>
      </div>
    </div>
  </Card>
</template>
