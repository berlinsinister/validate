<template>
  <div class="q-pa-sm">
    <div>
      <p class="title">{{ title }}</p>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
    <div>
      <component
        :is="quasarComponent"
        v-model="value"
        :options="options"
        :label="label"
        :type="type"
        :error="!!errorMessage"
        :error-message="errorMessage"
        filled
        dense
        inline
        hide-bottom-space
        @update:model-value="(val: ModelT) => onUpdateModelValue(fieldName, val)"
      />
    </div>
    <div
      v-if="error"
      role="alert"
      class="error"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useState, useValidate } from '@/composables';
import { ModelT } from '@/types';
import { FIELDS_NAMES } from '@/config/constants';

const props = defineProps<{ uid: string }>();

const { errorMessage, value, options, fieldName, quasarComponent, label, title, subtitle } = useValidate(props.uid);
const { setState } = useState();

const error = computed<boolean>(() =>
  (fieldName === FIELDS_NAMES.RADIO || fieldName === FIELDS_NAMES.CHECKBOX) && !!errorMessage);

const type = computed<string>(() =>
  (fieldName === FIELDS_NAMES.PASSWORD || fieldName === FIELDS_NAMES.RADIO) && fieldName || '');

const onUpdateModelValue = (fieldName: string, newValue: ModelT): void => {
  setState(fieldName, newValue);
};
</script>
