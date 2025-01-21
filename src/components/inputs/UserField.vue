<template>
  <component
    v-model="value"
    :is="props.componentName"
    :error="!!errorMessage"
    :error-message="errorMessage"
    :options="fieldOptions"

    filled
    dense
    inline
    hide-bottom-space

    @update:model-value="onUpdateModelValue"
  />
  
    <div
      v-if="error"
      role="alert"
      class="error"
    >
      {{ errorMessage }}
    </div>
  </template>
    
<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { useValidate, useRenderUI } from '@/composables';
import { UserFieldPropsI } from '@/types';

const props = defineProps<UserFieldPropsI>();

const { errorMessage, value, options } = useValidate(props.fieldName);

// todo: add types.
const fieldOptions = computed<any>(() =>
  (props.componentName === 'q-option-group' || props.componentName === 'q-select') && options
    ? options
    : null,
);
  
const error = computed<boolean>(() => props.fieldName === 'radio' && !!errorMessage);

const onUpdateModelValue = (newValue: string): void => {
  useRenderUI('fullName', newValue);
};
</script>
