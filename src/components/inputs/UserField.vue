<template>
  <div>
    <div :class="errorBg">
      <component
        v-model="value"
        :is="props.componentName"
        :label="props.label"
        :type="type"
        :options="fieldOptions"
        :error="!!errorMessage"
        :error-message="errorMessage"
        :bg-color="errorBg"
        filled
        dense
        inline
        hide-bottom-space
        @update:model-value="onUpdateModelValue"
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
import { useValidate, useRender } from '@/composables';
import { UserFieldPropsI, FieldOptionI } from '@/types';
import { FIELDS_NAMES, Q_COMPONENTS_NAMES } from '@/config/constants';

const props = defineProps<UserFieldPropsI>();

const { errorMessage, value, options } = useValidate(props.fieldName);

const fieldOptions = computed<FieldOptionI[] | string[] | null>(() =>
  (props.componentName === Q_COMPONENTS_NAMES.Q_OPTION_GROUP || props.componentName === Q_COMPONENTS_NAMES.Q_SELECT) && options
    ? options
    : null,
);

const type = computed<string>(() => (props.fieldName === FIELDS_NAMES.RADIO || props.fieldName === FIELDS_NAMES.CHECKBOX)
  ? props.fieldName
  : '',
);

const error = computed<boolean>(() => (props.fieldName === FIELDS_NAMES.RADIO || props.fieldName === FIELDS_NAMES.CHECKBOX) && !!errorMessage);

const errorBg = computed<string>(() => {
  if (!errorMessage.value) return '';
  if (props.fieldName === FIELDS_NAMES.RADIO || props.fieldName === FIELDS_NAMES.CHECKBOX) return 'error-bg';
  return 'negative';
});

const onUpdateModelValue = (newValue: string | string[]): void => {
  if (props.fieldName === FIELDS_NAMES.CHECKBOX) {
    useRender('visibility', newValue);
  }
};
</script>
