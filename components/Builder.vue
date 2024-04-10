<template>
  <div class="flex flex-wrap">
    <div
      v-for="(field, index) in formFields"
      :key="index"
      class="my-2"
      :class="[getDynamicSizeClass(field.size), calculateDynamicClasses(field, index)]"
    >
      <component :is="getComponentByType(field.type)" v-bind="field.props" />
    </div>
  </div>
  <slot name="beforeButton" />
  <Button v-if="buttonText" :name="buttonText" usage="submit" class="my-5 w-1/2 flex mx-auto justify-center" />
</template>

<script setup lang="ts">
import { FormSize, getComponentByType } from '~/types/FormBuilder';

interface BuilderProps {
  formFields: any[];
  buttonText?: string;
}

const { formFields } = defineProps<BuilderProps>();

const sizeWidths: Record<FormSize, string> = {
  [FormSize.Full]: 'w-full',
  [FormSize.Half]: 'w-full md:w-1/2 lg:w-1/2 xl:w-1/2',
  [FormSize.Third]: 'w-full md:w-1/3 lg:w-1/3 xl:w-1/3',
  [FormSize.Quarter]: 'md:w-1/4 lg:w-1/4 xl:w-1/4',
  [FormSize.Fifth]: 'md:w-1/5 lg:w-1/5 xl:w-1/5',
  [FormSize.Sixth]: 'w-1/6',
  [FormSize.Auto]: ''
};

const getDynamicSizeClass = (size: FormSize) => sizeWidths[size];

function calculateDynamicClasses(field: any, index: number) {
  const classes = [];
  const isFirstField = index === 0;
  const isLastField = index === formFields.length - 1;

  if (isHalfSize(field.size) && !isLastField && formFields[index + 1].size === FormSize.Half) {
    classes.push('md:pr-4');
  }

  if (field.size === FormSize.Sixth) {
    if (isFirstField || formFields[index - 1].size !== FormSize.Sixth) {
      classes.push('pr-1');
    } else if (isLastField || formFields[index + 1].size !== FormSize.Sixth) {
      classes.push('pl-1');
    } else {
      classes.push('px-1');
    }
  } else if (field.size !== FormSize.Full) {
    const isPreviousFieldFull = !isFirstField && formFields[index - 1].size === FormSize.Full;
    const isNextFieldFull = !isLastField && formFields[index + 1].size === FormSize.Full;

    if (isFirstField || isPreviousFieldFull) {
      classes.push('md:pr-1.5');
    } else if (isLastField || isNextFieldFull) {
      classes.push('md:pl-1.5');
    } else {
      classes.push('md:px-1.5');
    }
  }

  return classes;
}

const isHalfSize = (size: FormSize) => size === FormSize.Half;
</script>
