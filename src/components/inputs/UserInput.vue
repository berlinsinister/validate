<template>
  <user-field
    component-name="q-input"
    v-model="value"
    :error-message="errorMessage"
    label="Full Name"
  />
</template>

<script setup lang="ts">
import { useValidate } from '@/composables';
import UserField from '@/components/inputs/UserField.vue';

const { errorMessage, value } = useValidate('fullName');
</script>
