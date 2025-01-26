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
import { useComponentData } from '@/composables';

const props = defineProps<{ fieldName: string }>();

const { title, subtitle, titleStyles, subtitleStyles } = useComponentData(props.fieldName);
</script>
