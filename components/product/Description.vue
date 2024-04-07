<script setup lang="ts">
const { price, id } = defineProps<{ price: number; id: number }>();

const purchaseOption = ref('');
const store = useCartStore();
const count = ref(store.getCart.find((item) => item.id === id)?.count || 1);

function changeCount(type: string): void {
  type == 'decrease' ? count.value-- : count.value++;
  count.value <= 0 ? (count.value = 1) : count;
}

function onSubmit() {
  const item = {
    id: id,
    count: count.value,
    option: purchaseOption.value
  };
  store.addToCart(item);
}

const isSelected = (value: string) =>
  purchaseOption.value == value ? 'border rounded-lg delay-50 duration-300 ease-in-out' : '';
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
    <div class="col-span-1">
      <p class="text-primary font-bold text-xl">${{ price }}</p>
      <div class="mt-5">
        <span>{{ $t('productDetail.quantity') }}</span>
        <div class="flex items-center mt-2">
          <button
            :disabled="count <= 1"
            @click="changeCount('decrease')"
            class="border border-gray-300 rounded-l-lg px-3 py-2 dark:text-gray-200 dark:hover:bg-gray-700 text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            -
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
            +
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-1 lg:col-span-2">
      <form @submit.prevent="onSubmit">
        <div class="p-4 flex items-center" :class="isSelected('one-time')">
          <input type="radio" id="one-time" v-model="purchaseOption" name="purchase" value="one-time" />
          <label for="one-time" class="text-gray-700 dark:text-gray-200 ml-2">{{
            $t('productDetail.oneTimePurchase')
          }}</label>
        </div>
        <div :class="isSelected('subscription')" class="p-4 flex flex-col lg:flex-row lg:flex-wrap">
          <div class="flex items-center w-full">
            <input type="radio" id="subscription" v-model="purchaseOption" name="purchase" value="subscription" />
            <label for="subscription" class="text-gray-700 dark:text-gray-200 ml-2">
              {{ $t('productDetail.subscribeAndDeliverEvery') }}
            </label>
            <select
              v-if="purchaseOption == 'subscription'"
              name="delivery"
              id="delivery"
              class="border border-gray-300 rounded-md w-24 ml-auto focus:outline-none"
            >
              <option value="1">{{ $t('productDetail.everyMonth') }}</option>
              <option value="2">{{ $t('productDetail.everyTwoMonths') }}</option>
              <option value="3">{{ $t('productDetail.everyThreeMonths') }}</option>
            </select>
          </div>
          <div class="mt-2 lg:w-full" v-if="purchaseOption == 'subscription'">
            {{ $t('productDetail.subscribeGetDiscount') }}. {{ $t('productDetail.discountWillAppliedCheckout') }}.
            <span class="text-primary hover:underline hover:cursor-pointer">{{ $t('productDetail.seeDetails') }}</span>
          </div>
        </div>
        <button
          type="submit"
          class="w-full bg-primary hover:border hover:border-primary hover:text-primary hover:bg-transparent text-white py-3 rounded-lg mt-10"
        >
          {{ $t('productDetail.addToCart') }}
        </button>
      </form>
    </div>
  </div>
</template>
