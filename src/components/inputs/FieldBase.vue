<template>
  <div style="border: 1px solid lightcoral; padding: 20px">
    <div>
      <component
        :is="quasarComponent"
        v-model="value"
        :options="options"
        :label="label"
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
      class="error-txt"
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

const { errorMessage, value, options, fieldName, quasarComponent, label } = useValidate(props.uid);
const { setState } = useState();

const error = computed<boolean>(() => (fieldName === FIELDS_NAMES.RADIO || fieldName === FIELDS_NAMES.CHECKBOX) && !!errorMessage);

const onUpdateModelValue = (fieldName: string, newValue: ModelT): void => {
  setState(fieldName, newValue);
};
</script>
