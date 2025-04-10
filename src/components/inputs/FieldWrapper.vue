<template>
  <component
    v-if="visibleField"
    :is="FieldBase"
    :uid="props.input.uid"
  />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { validate } from 'vee-validate';

import { useState } from '@/composables';
import { InputConfigI } from '@/types';
import { transformIsVisible } from '@/helpers';

import FieldBase from '@/components/inputs/FieldBase.vue';

const props = defineProps<{ input: InputConfigI }>();

const { state, resetState } = useState();

const visibleField = ref<boolean>(false);

watchEffect(async () => {
  const rule = transformIsVisible(props.input.isVisible);
  const { valid } = await validate('', rule, {
    name: props.input.fieldName,
    values: state.value,
  });

  visibleField.value = valid;

  if (!visibleField.value) {
    resetState(props.input.fieldName);
  }
});
</script>
