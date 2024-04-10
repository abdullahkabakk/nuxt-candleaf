<template>
  <div class="mb-3">
    <label :for="name" class="block text-lg font-semibold mb-2">{{ label }}</label>
    <div class="relative">
      <div v-if="leadingIcon" class="absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon :name="leadingIcon" class="h-5 w-5 text-gray-400" />
      </div>
      <VField
        :name="name"
        :placeholder="placeholder"
        as="select"
        class="w-full border rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        :class="leadingIcon ? 'pl-10' : 'pl-4'"
      >
        <option value="" disabled selected>{{ $t('common.selectOption') }}</option>
        <option v-for="option in options" :key="option[valueKey ?? 'value']" :value="option[valueKey ?? 'value']">
          {{ option[labelKey ?? 'label'] }}
        </option>
      </VField>
      <div v-if="trailingIcon" class="absolute inset-y-0 right-0 flex items-center pr-3">
        <Icon :name="trailingIcon" class="h-5 w-5 text-gray-400" />
      </div>
    </div>
    <div class="mt-1 text-red-500">
      <VErrorMessage :name="name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type SelectProps } from '~/types/formProps';

defineProps<SelectProps>();
</script>
