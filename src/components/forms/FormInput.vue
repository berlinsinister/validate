<!-- <template>
  <div class="form-group">
    <h2 :style="props.titleStyles">Enter full name</h2>
    <h5 :style="props.subtitleStyles">subtitle txt</h5>
    <user-input />
  </div>
</template> -->

<!-- <script setup lang="ts">
import { defineProps } from 'vue';
import UserInput from '../inputs/UserInput.vue';

interface PropsI {
  titleStyles: any;
  subtitleStyles: any;
}

const props = defineProps<PropsI>();
</script> -->

<template>
  <form-wrapper v-bind="$attrs">
    <user-input />
  </form-wrapper>
</template>

<script setup lang="ts">
import FormWrapper from '@/components/forms/FormWrapper.vue';
import UserInput from '@/components/inputs/UserInput.vue';
</script>
