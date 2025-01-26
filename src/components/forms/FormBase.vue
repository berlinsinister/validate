<template>
  <form-wrapper
    :field-name="props.fieldName"
  >
    <user-field
      :label="label"
      :field-name="fieldName"
      :component-name="componentName"
    />
  </form-wrapper>
</template>

<script setup lang="ts">
import { useComponentData } from '@/composables';
import FormWrapper from '@/components/forms/FormWrapper.vue';
import UserField from '@/components/inputs/UserField.vue';

const props = defineProps<{ fieldName: string }>();

const { label, fieldName, componentName } = useComponentData(props.fieldName);
</script>