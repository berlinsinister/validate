<template>
  <q-form @submit="onSubmit">
    
    <template
      v-for="({ component, isVisible, title, subtitle, titleStyles, subtitleStyles }, idx) in forms"
      :key="idx"
    >
      <component
        v-if="isVisible"
        :is="component"
        :title="title"
        :subtitle="subtitle"
        :title-styles="titleStyles"
        :subtitle-styles="subtitleStyles"
      />
    </template>

    <submit-btn />
  </q-form>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useForm } from 'vee-validate';
import { configUI } from '@/config/configUI';

import SubmitBtn from '@/components/buttons/SubmitBtn.vue';

const { handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
  console.log('FORM', values);
});

const forms = computed(() => {
  const { fullName, radio, dropdown } = configUI.value;
  // const arr = [fullName, radio, dropdown];
  // console.log('arr', arr);
  
  return [fullName, radio, dropdown];
});
</script>
