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
import { computed, getCurrentInstance } from 'vue';
import type { StyleValue } from 'vue';

const instance = getCurrentInstance();
const attrs = instance?.attrs;

const title = computed<string>(() => attrs?.['title'] as string || '');
const subtitle = computed<string>(() => attrs?.['subtitle'] as string || '');
const titleStyles = computed<StyleValue>(() => attrs?.['title-styles'] as StyleValue || {});
const subtitleStyles = computed<StyleValue>(() => attrs?.['subtitle-styles'] as StyleValue || {});
</script>
