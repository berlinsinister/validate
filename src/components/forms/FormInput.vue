<template>
  <form-wrapper>
    <user-input v-bind="$attrs" />
  </form-wrapper>
</template>

<script setup lang="ts">
import UserInput from '@/components/inputs/UserInput.vue';
</script>
