<script setup lang="ts">
const props = defineProps(['product', 'count']);

const store = useCartStore();
const value = ref((store.getCartItemById(props.product.id) ?? { count: 0 }).count);
const labels = ['productDetail.labels.burnTime', 'productDetail.labels.dimensions', 'productDetail.labels.weight'];

const updateItem = (isIncrease: boolean) => {
  value.value += isIncrease ? 1 : -1;
  if (value.value === 0) {
    removeItem();
  } else {
    store.updateCart(props.product.id, value.value);
  }
};

const removeItem = () => store.removeFromCart(props.product.id);
</script>

<template>
  <NuxtImg :src="`${product.img}`" format="webp" sizes="5vw" alt="Product Image" class="rounded-lg h-24 object-cover" />
  <div class="flex flex-col justify-between w-full">
    <div>
      <div class="flex">
        <NuxtLink :to="`/product/${product.id}`" class="hover:underline font-semibold">
          <span class="text-2xl font-semibold w-40 md:w-1/2">{{ product.name }}</span>
        </NuxtLink>
        <div class="text-primary ml-auto my-auto text-lg font-semibold">${{ product.price * count }}</div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col text-gray-600 text-sm dark:text-gray-300 flex-wrap justify-between">
          <span v-for="(val, idx) in [product.burning_time, product.dimension, product.weight]" :key="idx">
            {{ $t(labels[idx] as string) }}: {{ val }}
          </span>
        </div>
        <div class="flex items-center mx-auto md:mr-0 mt-4 md:mt-0 md:ml-auto">
          <button
            @click="updateItem(false)"
            class="hover:cursor-pointer rounded-full hover:bg-red-300 hover:text-red-600 bg-gray-200 text-gray-600 px-2 py-1 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
          >
            <Icon name="material-symbols:remove" class="my-auto" />
          </button>
          <input disabled class="w-12 text-center bg-transparent focus:outline-none" :placeholder="count" />
          <button
            @click="updateItem(true)"
            class="hover:cursor-pointer rounded-full bg-gray-200 hover:bg-green-300 hover:text-green-700 text-gray-600 px-2 py-1 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
          >
            <Icon name="material-symbols:add" class="my-auto" />
          </button>
          <button
            @click="removeItem()"
            class="hover:cursor-pointer rounded-full bg-gray-200 text-gray-600 ml-2 hover:bg-red-300 hover:text-red-700 px-2 py-1 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
          >
            <Icon name="material-symbols:delete-outline-sharp" class="my-auto" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
