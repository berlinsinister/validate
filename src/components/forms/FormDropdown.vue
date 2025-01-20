<template>
  <form-wrapper v-bind="$attrs">
    <user-dropdown />
  </form-wrapper>
</template>

<script setup lang="ts">
import FormWrapper from '@/components/forms/FormWrapper.vue';
import UserDropdown from '@/components/inputs/UserDropdown.vue';
</script>
