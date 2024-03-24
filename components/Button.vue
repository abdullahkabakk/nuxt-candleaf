<script setup lang="ts">
defineProps(['name']);

const emits = defineEmits(['button-click']);
const onClick = () => emits('button-click');
</script>

<template>
  <button
    name="button"
    class="py-2 px-4 bg-primary hover:bg-transparent hover:border hover:border-primary hover:text-primary text-white rounded-lg"
    @click="onClick"
  >
    <slot name="icon" />
    {{ name }}
  </button>
</template>
