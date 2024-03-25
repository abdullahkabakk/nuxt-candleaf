<script setup lang="ts">
defineProps<{details: (string | string[])[]; labels: (string | string[])[]}>();
</script>

<template>
  <div class="border rounded-lg p-4 mt-10">
    <div v-for="(detail, idx) in details" :key="idx" class="flex text-gray-600 dark:text-gray-400 justify-between">
      <p v-if="typeof detail == 'string'">
        <span class="font-semibold text-gray-900 dark:text-gray-200">{{$t(labels[idx] as string)}}: </span>
        {{detail}}
      </p>
      <div class="flex flex-row space-x-2" v-else>
        <p v-for="(d, i) in detail" :key="i">
          <span class="font-semibold text-gray-900 dark:text-gray-200">{{$t(labels[idx][i])}}: </span>
          {{d}}
        </p>
      </div>
    </div>
  </div>
</template>
