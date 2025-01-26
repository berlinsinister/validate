<template>
  <user-field
    :label="label"
    :component-name="componentName"
    :field-name="fieldName"
  />
</template>

<script setup lang="ts">
import { useAttributes } from '@/composables';
const { label, componentName, fieldName } = useAttributes();
</script>
