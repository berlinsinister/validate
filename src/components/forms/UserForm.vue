<template>
  <q-form @submit="onSubmit">
    <div class="user-form">
      <div>
        <p>
          <strong>
            * Start creating a form by selectin forms' elements
          </strong>
        </p>
        <user-checkbox />
      </div>

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
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useForm } from 'vee-validate';

import { configUI } from '@/config/configUI';

import UserCheckbox from '@/components/inputs/UserCheckbox.vue';
import SubmitBtn from '@/components/buttons/SubmitBtn.vue';

const { handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
  // now with checkboxes the values include checkboxes values as well.
  console.log('FORM', values);
});

const forms = computed(() => {
  const { fullName, radio, dropdown } = configUI.value;

  // return [fullName, radio, dropdown];
  return [fullName, radio, dropdown].sort((a, b) => a.order - b.order);
});

// TODO: add order for forms?
// TODO: add red bg for errors
</script>
