<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const emits = defineEmits(['button-click'])

function onClick() {
  emits('button-click')
}
</script>

<template>
  <button class="py-2 px-4 bg-primary hover:bg-transparent hover:border
   hover:border-primary hover:text-primary text-white rounded-lg" @click="onClick">
    <slot name="icon"/>
    {{props.name}}
  </button>
</template>
