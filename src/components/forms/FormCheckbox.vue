<template>
  <form-wrapper>
    <user-checkbox v-bind="$attrs" />
  </form-wrapper>
</template>

<script setup lang="ts">
import UserCheckbox from '@/components/inputs/UserCheckbox.vue';
</script>
