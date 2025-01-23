<template>
  <form-wrapper v-bind="$attrs">
    <user-input />
  </form-wrapper>
</template>

<script setup lang="ts">
import FormWrapper from '@/components/forms/FormWrapper.vue';
import UserInput from '@/components/inputs/UserInput.vue';
</script>
