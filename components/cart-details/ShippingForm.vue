<template>
  <div class="mb-6">
    <h2 class="text-xl font-semibold mb-2">Shipping Address</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <FormTheInput placeholder="Name" icon="material-symbols:person" />
      <FormTheInput placeholder="Second Name" icon="material-symbols:person" />
    </div>
    <FormTheInput placeholder="Address and number" icon="material-symbols:home" class="mb-4" />
    <FormTheInput placeholder="Shipping note (optional)" icon="material-symbols:notes" class="mb-4" />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <FormTheInput placeholder="City" icon="material-symbols:location-city" />
      <FormTheInput placeholder="Postal Code" icon="material-symbols:local-post-office" />
      <div class="relative">
        <select
          class="w-full border border-gray-300 rounded-md py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
        >
          <option>Select Province</option>
          <!-- Add province options -->
        </select>
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <Icon name="lucide:chevrons-up-down" class="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
    <div class="relative mb-4">
      <select
        class="w-full border border-gray-300 rounded-md py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
      >
        <option>Country/Region: Italy</option>
        <!-- Add country/region options -->
      </select>
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <Icon name="material-symbols:location-on" class="h-5 w-5 text-gray-400" />
      </div>
    </div>
    <div class="flex items-center mb-4">
      <input id="save-info" type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
      <label for="save-info" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">
        Save this informations for a future fast checkout
      </label>
    </div>
  </div>
</template>
