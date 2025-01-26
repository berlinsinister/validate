<template>
  <div>
    <q-select
      label="Config select"
      v-model="select"
      :options="options"
      dense
      class="q-mb-sm"
    />

    <p class="q-mb-xl">
      selected values: {{ userSelectedValues }}
    </p>

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
          v-for="({ id, component, isVisible, componentName, fieldName, title, subtitle, titleStyles, subtitleStyles }) in forms"
          :key="id"
        >
          <component
            v-if="isVisible"
            :is="component"
            :component-name="componentName"
            :field-name="fieldName"
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
import { configUI } from '@/config';
import { USER_INTERACTION_FIELDS } from '@/config/constants';
import { UserSelectedValueI, SelectConfigItemI } from '@/types';

import UserCheckbox from '@/components/inputs/UserCheckbox.vue';
import SubmitBtn from '@/components/buttons/SubmitBtn.vue';

const userSelectedValues = ref<UserSelectedValueI>({});

const select = ref<SelectConfigItemI | null>(null);
const options: SelectConfigItemI[] = [
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

  USER_INTERACTION_FIELDS.forEach((item) => {
    userSelectedValues.value[item] = values[item]
  });
});

const forms = computed(() => {
  if (select.value) {
    useRender('style', '', select.value.layout);
  }
  
  const { fullName, radio, dropdown } = configUI.value;

  return [fullName, radio, dropdown].sort((a, b) => a.order - b.order);
});
</script>
