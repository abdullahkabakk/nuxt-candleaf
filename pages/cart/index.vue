<template>
  <Container>
    <!-- Cart is empty -->
    <CartIsEmpty v-if="!cart.length" />
    <!-- Cart has items -->
    <div class="grid grid-cols-1 md:grid-cols-3 my-5 gap-10" v-else>
      <!-- Cart Items -->
      <div class="md:col-span-2">
        <h2 class="font-bold text-lg mb-5">Your Cart</h2>
        <div
          v-for="(item, idx) in cart"
          :key="idx"
          class="flex my-5 flex-col md:flex-row border dark:border-gray-600 rounded-lg p-4 gap-5 shadow-md"
        >
          <NuxtImg
            :src="`${getItem(item.id).img}`"
            format="webp"
            sizes="5vw"
            alt="Product Image"
            class="rounded-lg h-24 object-cover"
          />
          <div class="flex flex-col justify-between w-full">
            <div>
              <div class="flex">
                <NuxtLink :to="`/product/${item.id}`" class="hover:underline font-semibold">
                  <span class="text-2xl font-semibold w-40 md:w-1/2">{{ getItem(item.id).name }}</span>
                </NuxtLink>
                <div class="text-primary ml-auto my-auto text-lg font-semibold">
                  ${{ getItem(item.id).price * item.count }}
                </div>
              </div>
              <div class="flex flex-col md:flex-row">
                <div class="flex flex-col text-gray-600 text-sm dark:text-gray-300 flex-wrap justify-between">
                  <span
                    v-for="(val, idx) in [
                      getItem(item.id).burning_time,
                      getItem(item.id).dimension,
                      getItem(item.id).weight
                    ]"
                    :key="idx"
                  >
                    {{ $t(labels[idx] as string) }}: {{ val }}
                  </span>
                </div>
                <div class="flex items-center mx-auto md:mr-0 mt-4 md:mt-0 md:ml-auto">
                  <button
                    @click="updateItemCount(item.id, 'decrease')"
                    class="hover:cursor-pointer rounded-full hover:bg-red-300 hover:text-red-600 bg-gray-200 text-gray-600 px-2 py-1 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    <Icon name="material-symbols:remove" class="my-auto" />
                  </button>
                  <input disabled class="w-12 text-center bg-transparent focus:outline-none" v-model="item.count" />
                  <button
                    @click="updateItemCount(item.id, 'increase')"
                    class="hover:cursor-pointer rounded-full bg-gray-200 hover:bg-green-300 hover:text-green-700 text-gray-600 px-2 py-1 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    <Icon name="material-symbols:add" class="my-auto" />
                  </button>
                  <button
                    @click="removeItem(item.id)"
                    class="hover:cursor-pointer rounded-full bg-gray-200 text-gray-600 ml-2 hover:bg-red-300 hover:text-red-700 px-2 py-1 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    <Icon name="material-symbols:delete-outline-sharp" class="my-auto" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Payment Summary -->
      <div class="col-span-1">
        <h2 class="font-bold text-lg">Payment Summary</h2>
        <div
          class="sticky top-20 dark:border-gray-600 right-0 mt-5 border text-gray-700 dark:text-gray-300 rounded-lg p-4 shadow-md"
        >
          <!-- Payment Details -->
          <div class="flex justify-between mb-3">
            <span class="">Subtotal:</span>
            <span class="font-semibold">${{ calculateSubtotal().toFixed(2) }}</span>
          </div>
          <div class="flex justify-between mb-3">
            <span class="">Shipping:</span>
            <span>Free</span>
          </div>
          <hr class="my-2 border-gray-200 dark:border-gray-600" />
          <div class="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>${{ calculateTotal().toFixed(2) }}</span>
          </div>
          <!-- Checkout Button -->
          <button
            @click="$router.push('/cart/details')"
            class="mt-4 w-full py-2 bg-primary text-white rounded-md focus:outline-none hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Cart',
  description: 'Your cart items',
  ogTitle: 'Cart',
  ogDescription: 'Your cart items',
  ogLocale: 'en_US'
});

const store = useCartStore();
const cart = store.getCart;
const getItem = (id: number) => products.find((p) => p.id === id)!;
const labels = ['productDetail.labels.burnTime', 'productDetail.labels.dimensions', 'productDetail.labels.weight'];

function updateItemCount(id: number, type: string): void {
  const item = cart.find((item) => item.id === id)!;
  if (type === 'decrease') item.count -= 1;
  else item.count += 1;
  if (item.count <= 0) removeItem(id);
}

const removeItem = (id: number) => store.removeFromCart(id);
const calculateSubtotal = () => cart.reduce((total, item) => total + getItem(item.id).price * item.count, 0);
const calculateTotal = () => calculateSubtotal();
</script>
