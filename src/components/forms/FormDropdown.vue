<template>
  <form-wrapper>
    <user-dropdown v-bind="$attrs" />
  </form-wrapper>
</template>

<script setup lang="ts">
import UserDropdown from '@/components/inputs/UserDropdown.vue';
</script>
