<template>
  <div>
    <h2 :style="titleStyles">
      {{ title }}
    </h2>
    <h5 :style="subtitleStyles">
      {{ subtitle }}
    </h5>
    <slot />
  </div>
</template>
  
<script setup lang="ts">
import { useAttributes } from '@/composables';
const { title, subtitle, titleStyles, subtitleStyles } = useAttributes();
</script>
