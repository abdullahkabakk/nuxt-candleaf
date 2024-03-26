<script setup lang="ts">
const store = useCartStore();
const cart = store.getCart;
const getItem = (id: number) => products.find((p) => p.id === id)!;

const calculateSubtotal = () => cart.reduce((total, item) => total + getItem(item.id).price * item.count, 0);

const calculateTotal = () => calculateSubtotal();
</script>

<template>
  <div>
    <div class="mb-4 max-h-[25em] pt-5 overflow-y-auto">
      <div v-for="item in cart" :key="item.id" class="flex items-center justify-between mb-4">
        <div class="flex items center">
          <UChip :text="item.count" size="2xl">
            <NuxtImg
              :src="`${getItem(item.id).img}`"
              format="webp"
              sizes="5vw"
              alt="Product Image"
              class="rounded-lg h-24 object-cover"
            />
          </UChip>
          <div class="ml-4">
            <h2 class="text-xl font-semibold mb-3">{{ getItem(item.id).name }}</h2>
            <p class="text-lg text-primary font-semibold">{{ `$${getItem(item.id).price}` }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-5 border-t pt-4">
      <label class="block mb-2">Coupon code</label>
      <div class="flex">
        <input
          type="text"
          class="w-full border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Coupon code"
        />
        <button
          class="bg-gray-300 whitespace-nowrap rounded-r-md px-4 py-2 text-gray-700 hover:bg-gray-400 transition-colors duration-300"
        >
          Add code
        </button>
      </div>
    </div>
    <div class="border-t pt-4">
      <div class="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>${{ calculateSubtotal().toFixed(2) }}</span>
      </div>
      <div class="flex justify-between mb-2">
        <span>Shipping:</span>
        <span>Calculated at the next step</span>
      </div>
      <hr class="my-2 border-gray-200" />
      <div class="flex justify-between font-semibold text-lg">
        <span>Total:</span>
        <span>${{ calculateTotal().toFixed(2) }}</span>
      </div>
    </div>
  </div>
</template>
