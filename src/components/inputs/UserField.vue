<template>
  <component
    :is="props.componentName"
    v-model="localValue"
    :error="!!errorMessage"
    :error-message="errorMessage"
    :label="label"
    :filled="props.componentName === 'q-input' || props.componentName === 'q-select'"

    :options="options"

    hide-bottom-space
    dense
    inline
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
import { ref, watch, defineProps, defineEmits, computed } from 'vue';
import { useRenderUI } from '@/composables';
import { PropsI, OptionI } from '@/types';

const props = defineProps<PropsI>();
const emit = defineEmits(['update:modelValue']);

const localValue = ref<string>(props.modelValue);

// watch for changes in localValue and sync with parent
watch(localValue, (newValue) => {
  emit('update:modelValue', newValue);

  useRenderUI('fullName', newValue);
});

// IS NEEDED?
// watch for changes in modelValue and sync with localValue
// watch(
//   () => props.modelValue,
//   (newValue) => {
//     localValue.value = newValue;
//   },
// );

const options = computed<OptionI[] | string[] | null>(() =>
  (props.componentName === 'q-option-group' || props.componentName === 'q-select') && props.options
    ? props.options
    : null,
);

const error = computed<boolean>(() => props.componentName === 'q-option-group' && !!props.errorMessage);
</script>
