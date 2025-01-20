<template>
  <form-wrapper v-bind="$attrs">
    <user-radio />
  </form-wrapper>
</template>

<script setup lang="ts">
import FormWrapper from '@/components/forms/FormWrapper.vue';
import UserRadio from '@/components/inputs/UserRadio.vue';
</script>
