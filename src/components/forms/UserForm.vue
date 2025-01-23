<template>
  <div>
    <q-select
      label="Config select"
      v-model="select"
      :options="options"
      class="q-mb-lg"
    />

    <q-form @submit="onSubmit">
      <div class="user-form">
        <div>
          <p>
            <strong>
              Start creating a form by selectin forms' elements
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useForm } from 'vee-validate';

import { useRender } from '@/composables';
import { configUI } from '@/config/configUI';

import UserCheckbox from '@/components/inputs/UserCheckbox.vue';
import SubmitBtn from '@/components/buttons/SubmitBtn.vue';

const select = ref<any>(null);
const options = [
  {
    label: 'config-1',
    layout: {
      styles: {
        fontSize: '24px',
        color: '#ffffff',
        backgroundColor: 'mediumseagreen',
      },
      order: {
        fullName: 1,
        radio: 2,
        dropdown: 3,
      },
    },
  },
  {
    label: 'config-2',
    layout: {
      styles: {
        fontSize: '12px',
        color: '#000',
        backgroundColor: 'magenta',
      },
      order: {
        fullName: 3,
        radio: 1,
        dropdown: 2,
      },
    },
  },
]

const { handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
  console.log('FORM', values);
});

const forms = computed(() => {
  if (select.value) useRender('style', '', '', select.value.layout)
  
  const { fullName, radio, dropdown } = configUI.value;

  return [fullName, radio, dropdown].sort((a, b) => a.order - b.order);
});

// TODO: add red bg for errors
</script>
