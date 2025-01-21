<template>
  <q-form @submit="onSubmit">

    <div class="user-form">
      
      <!-- TODO: maybe use UserDropdown component and use alias for useValidate, e.g. usepopulate -->
      <!-- and populate the field with required data, just without rules and validation stuff -->
      <q-select
        v-model="model"
        :options="options"
        filled
        dense
        multiple
        option-value="component"
        option-label="label"
        @update:model-value="onUpdateModelValue"
        class="q-mb-xl"
      />

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
import { ref, computed } from 'vue';
import { useForm } from 'vee-validate';

import { ConfigDisplayItemI } from '@/types';
import { configDisplay } from '@/config/configDisplay';
import { configUI } from '@/config/configUI';

import SubmitBtn from '@/components/buttons/SubmitBtn.vue';

const { handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
  console.log('FORM', values);
});

const forms = computed(() => {
  const { fullName, radio, dropdown } = configUI.value;

  return [fullName, radio, dropdown];
});

// const model = ref<ConfigDisplayItemI[]>([]);
const model = ref<string[]>([]);
const options = computed(() => configDisplay.options);

// TODO: add order for forms?
const onUpdateModelValue = (selectedItems: ConfigDisplayItemI[]) => {
  // console.log('selected', selectedItems);
  const visibleForms = selectedItems.map((item) => item.component);
  
  Object.keys(configUI.value).forEach((key) => {
    // set isVisible to true if the key is in visibleForms, otherwise false
    configUI.value[key].isVisible = visibleForms.includes(key);
  });
};
</script>
