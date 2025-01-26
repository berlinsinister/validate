<template>
  <user-field
    :label="''"
    :component-name="Q_COMPONENTS_NAMES.Q_OPTION_GROUP"
    :field-name="FIELDS_NAMES.CHECKBOX"
  />
</template>

<script setup lang="ts">
import { Q_COMPONENTS_NAMES, FIELDS_NAMES } from '@/config/constants';
</script>
