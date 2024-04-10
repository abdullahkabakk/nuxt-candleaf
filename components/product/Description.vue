<script setup lang="ts">
const toast = useToast();

const { price, id } = defineProps<{ price: number; id: number }>();

const store = useCartStore();
const count = ref(store.getCart.find((item) => item.id === id)?.count || 1);
const { t } = useI18n();

function changeCount(type: string): void {
  type == 'decrease' ? count.value-- : count.value++;
  count.value <= 0 ? (count.value = 0) : count;

  store.updateCart(id, count.value);
  toast.add({ title: t('success.itemUpdatedSuccessfully') });
}
</script>

<template>
  <div class="grid grid-cols-1 mt-4">
    <div>
      <p class="text-primary font-bold text-xl">${{ price }}</p>
      <div class="mt-5">
        <span>{{ $t('productDetail.quantity') }}</span>
        <div class="flex items-center mt-2">
          <button
            :disabled="count <= 1"
            @click="changeCount('decrease')"
            class="border border-gray-300 rounded-l-lg px-3 py-2 dark:text-gray-200 dark:hover:bg-gray-700 text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            &#8722;
          </button>
          <input
            disabled
            class="w-16 py-2 text-center border-t border-b border-gray-300 focus:outline-none"
            v-model="count"
          />
          <button
            @click="changeCount('increase')"
            class="border border-gray-300 rounded-r-lg px-3 py-2 dark:text-gray-200 dark:hover:bg-gray-700 text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            &#43;
          </button>
        </div>
      </div>
      <button
        type="submit"
        class="w-full bg-primary hover:border hover:border-primary hover:text-primary hover:bg-transparent text-white py-3 rounded-lg mt-10"
      >
        {{ $t('productDetail.addToCart') }}
      </button>
    </div>
  </div>
</template>
