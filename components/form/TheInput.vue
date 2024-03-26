<script setup lang="ts">
defineProps<{
  placeholder: string;
  icon?: string;
}>();
</script>

<template>
  <div class="relative">
    <input
      type="text"
      :placeholder="placeholder"
      class="w-full border border-gray-300 rounded-md py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <div v-if="icon" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <Icon :name="icon" class="h-5 w-5 text-gray-400" />
    </div>
  </div>
</template>
