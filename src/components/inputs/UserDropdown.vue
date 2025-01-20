<template>
  <user-field
    component-name="q-select"
    v-model="value"
    :error-message="errorMessage"
    :options="options"
    label="Styles"
  />
</template>

<script setup lang="ts">
import { useValidate } from '@/composables';
import UserField from '@/components/inputs/UserField.vue';

const { errorMessage, value, options } = useValidate('dropdown');
</script>
