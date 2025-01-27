<template>
  <div>
    <q-select
      label="Config select"
      v-model="selectConfigModel"
      :options="selectConfigOptions"
      dense
      class="q-mb-sm"
    />

    <p class="q-mb-xl">
      selected values: {{ userSelectedValues }}
    </p>

    <q-form @submit="onSubmit">
      <div class="user-form">
        <template
          v-for="({ id, component, isVisible, label, componentName, fieldName, title, subtitle, titleStyles, subtitleStyles }) in forms"
          :key="id"
        >
          <component
            v-if="isVisible"
            :is="component"
            :label="label"
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
import { configUI, selectConfigOptions } from '@/config';
import { USER_INTERACTION_FIELDS } from '@/config/constants';
import { UserSelectedValueI, SelectConfigItemI } from '@/types';

import SubmitBtn from '@/components/buttons/SubmitBtn.vue';

const userSelectedValues = ref<UserSelectedValueI>({});
const selectConfigModel = ref<SelectConfigItemI | null>(null);

const { handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
  USER_INTERACTION_FIELDS.forEach((item) => {
    userSelectedValues.value[item] = values[item]
  });
});

const forms = computed(() => {
  if (selectConfigModel.value) {
    useRender('style', '', selectConfigModel.value.layout);
  }
  
  const { checkbox, fullName, radio, dropdown } = configUI.value;

  return [checkbox, fullName, radio, dropdown].sort((a, b) => a.order - b.order);
});
</script>
