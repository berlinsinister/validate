<template>
  <user-field
    :component-name="componentName"
    :field-name="fieldName"
  />
</template>

<script setup lang="ts">
import { useAttributes } from '@/composables';
const { componentName, fieldName } = useAttributes();
</script>
