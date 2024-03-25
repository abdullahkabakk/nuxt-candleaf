<script setup lang="ts">
defineProps<{ price: number }>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
    <div class="col-span-1">
      <p class="text-primary font-bold text-xl">${{price}}</p>
      <div class="mt-5">
        <span>{{$t('productDetail.quantity')}}</span>
        <div class="flex items-center mt-2">
          <button class="border border-gray-300 rounded-l-lg px-3 py-2 dark:text-gray-200 dark:hover:bg-gray-700 text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">-</button>
          <input class="w-16 py-2 text-center border-t border-b border-gray-300 focus:outline-none" value="1" />
          <button class="border border-gray-300 rounded-r-lg px-3 py-2 dark:text-gray-200 dark:hover:bg-gray-700 text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">+</button>
        </div>
      </div>
    </div>
    <div class="col-span-1 lg:col-span-2">
      <div class="p-4 flex items-center">
        <input type="radio" id="one-time" name="one-time" value="one-time" />
        <label for="one-time" class="text-gray-700 dark:text-gray-200 ml-2">{{$t('productDetail.oneTimePurchase')}}</label>
      </div>
      <div class="border rounded-lg p-4 flex flex-col lg:flex-row lg:flex-wrap">
        <div class="flex items-center w-full">
          <input type="radio" id="subscription" name="subscription" value="subscription" />
          <label for="subscription" class="text-gray-700 dark:text-gray-200 ml-2">
            {{$t('productDetail.subscribeAndDeliverEvery')}}
          </label>
          <select name="delivery" id="delivery" class="border border-gray-300 rounded-md w-24 ml-auto focus:outline-none">
            <option value="1">{{$t('productDetail.everyMonth')}}</option>
            <option value="2">{{$t('productDetail.everyTwoMonths')}}</option>
            <option value="3">{{$t('productDetail.everyThreeMonths')}}</option>
          </select>
        </div>
        <div class="mt-2 lg:w-full">
          {{$t('productDetail.subscribeGetDiscount')}}. {{$t('productDetail.discountWillAppliedCheckout')}}. <span class="text-primary hover:underline hover:cursor-pointer">{{$t('productDetail.seeDetails')}}</span>
        </div>
      </div>
      <button class="w-full bg-primary hover:border hover:border-primary hover:text-primary hover:bg-transparent text-white py-3 rounded-lg mt-10">{{$t('productDetail.addToCart')}}</button>
    </div>
  </div>
</template>
