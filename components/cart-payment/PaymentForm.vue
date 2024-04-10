<template>
  <div class="flex items-center justify-center">
    <div class="w-full mx-auto p-8 bg-white dark:bg-gray-800 shadow-xl rounded-lg">
      <div class="mb-6">
        <h2 class="text-3xl font-semibold mb-6 text-center">{{ $t('payment.title') }}</h2>
        <div class="relative">
          <form @submit.prevent="submitPayment">
            <div class="mb-6">
              <label for="cardHolder" class="block font-medium dark:text-gray-100 text-gray-700">{{
                $t('payment.cardHolder')
              }}</label>
              <input
                v-model="cardHolder"
                type="text"
                id="cardHolder"
                placeholder="John Doe"
                class="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700"
              />
            </div>
            <div class="mb-6">
              <label for="cardNumber" class="block font-medium dark:text-gray-100 text-gray-700">{{
                $t('payment.cardNumber')
              }}</label>
              <input
                v-model="cardNumber"
                maxlength="19"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                class="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700"
              />
            </div>
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label for="expiryDate" class="block font-medium dark:text-gray-100 text-gray-700">{{
                  $t('payment.expirationDate')
                }}</label>
                <input
                  v-model="expiryDate"
                  type="text"
                  id="expiryDate"
                  placeholder="MM/YY"
                  maxlength="5"
                  class="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700"
                />
              </div>
              <div>
                <label for="cvv" class="block font-medium dark:text-gray-100 text-gray-700">{{
                  $t('payment.cvv')
                }}</label>
                <input
                  v-model="cvv"
                  type="text"
                  id="cvv"
                  placeholder="123"
                  class="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700"
                />
              </div>
            </div>
            <button
              type="submit"
              class="w-full py-3 bg-primary text-white font-semibold rounded-md transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              {{ $t('payment.payNow') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const toast = useToast();
const cardNumber = ref('');
const expiryDate = ref('');
const cardHolder = ref('');
const cvv = ref('');
const { t } = useI18n();

watch(
  () => cardNumber.value,
  (value) => {
    let eliminatedNonDigit = value.replace(/\D/g, '');

    if (eliminatedNonDigit === '') {
      cardNumber.value = '';
      return;
    }
    let realNumber = eliminatedNonDigit.replace(/-/gi, '');

    // Generate dashed number
    let dashedNumber = realNumber.match(/.{1,4}/g);
    // Replace the dashed number with the real one

    cardNumber.value = dashedNumber.join(' ');
  }
);

watch(
  () => expiryDate.value,
  (value) => {
    let eliminatedNonDigit = value.replace(/\D/g, '');

    if (eliminatedNonDigit === '') {
      expiryDate.value = '';
      return;
    }
    let realNumber = eliminatedNonDigit.replace(/-/gi, '');

    // Month has to be smaller than 13
    if (parseInt(realNumber.substring(0, 2)) > 12) {
      expiryDate.value = realNumber.substring(0, 1);
      return;
    }

    // Generate dashed number
    let dashedNumber = realNumber.match(/.{1,2}/g);

    // Replace the dashed number with the real one
    expiryDate.value = dashedNumber.join('/');
  }
);

watch(
  () => cvv.value,
  (value) => {
    let eliminatedNonDigit = value.replace(/\D/g, '');

    if (eliminatedNonDigit === '') {
      cvv.value = '';
      return;
    }
    cvv.value = eliminatedNonDigit;
  }
);

function submitPayment() {
  if (cardNumber.value === '' || expiryDate.value === '' || cardHolder.value === '' || cvv.value === '') {
    alert(t('payment.pleaseFillAllFields'));
    return;
  }

  toast.add({ title: t('payment.processingPayment') });

  const store = useCartStore();

  store.clearCart();

  setInterval(() => {
    window.location.href = '/';
  }, 2000);
}
</script>
