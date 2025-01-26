<template>
  <div>
    <div :class="errorBg">
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

        :type="type"

        :bg-color="errorBg"

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
import { computed, onMounted } from 'vue';
import { useValidate, useRender } from '@/composables';
import { UserFieldPropsI, OptionI } from '@/types';
import { FIELDS_NAMES, Q_COMPONENTS_NAMES } from '@/config/constants';

const props = defineProps<UserFieldPropsI>();

onMounted(() => {console.log('mounted', props.fieldName)});

const { errorMessage, value, options } = useValidate(props.fieldName);

const fieldOptions = computed<OptionI[] | string[] | null>(() =>
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
