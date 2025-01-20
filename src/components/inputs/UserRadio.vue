<template>
  <user-field
    component-name="q-option-group"
    v-model="value"
    :error-message="errorMessage"
    :options="options"
  />
</template>

<script setup lang="ts">
import { useValidate } from '@/composables';
import UserField from '@/components/inputs/UserField.vue';

const { errorMessage, value, options } = useValidate('radio');
</script>
