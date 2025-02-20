<template>
  <div>
    <q-select
      v-model="selectConfigModel"
      :options="selectConfigOptions"
      label="Config select"
      dense
      class="q-mb-xl"
    />

    <!-- <p class="q-mb-xl">
      selected values: {{ userSelectedValues }}
    </p> -->

    <q-form @submit="onSubmit">
      <template
        v-for="input in render"
        :key="input.uid"
      >
        <field-base :uid="input.uid" />
      </template>
      <submit-btn />
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useForm } from 'vee-validate';

import { useState } from '@/composables';
import { selectConfigOptions } from '@/config';
// import { USER_INTERACTION_FIELDS } from '@/config/constants';
import { UserSelectedValueI, SelectConfigItemI } from '@/types';

import SubmitBtn from '@/components/buttons/SubmitBtn.vue';
import FieldBase from '@/components/inputs/FieldBase.vue';

const userSelectedValues = ref<UserSelectedValueI>({});
// const selectConfigModel = ref<SelectConfigItemI | null>(null);
const selectConfigModel = ref<any | null>(selectConfigOptions[0]);

const { handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
  console.log('values', values);
  // USER_INTERACTION_FIELDS.forEach((item) => {
  //   userSelectedValues.value[item] = values[item]
  // });
});

// NEW
const render = ref<any>(null);
const { state } = useState();

watch(
  [
    () => selectConfigModel.value,
    () => state.value,
  ],
  ([selectConfigModelValue, stateValue]) => {
    // console.log('**** SELECT:', selectConfigModelValue);
    // console.log('STATE:', stateValue);
    // render.value = selectConfigModelValue.inputs;

    const radioValue = stateValue.radio;

    const filteredInputs = selectConfigModelValue.inputs.filter((input: any) => {
      if (input.controlElement === 'dropdown' && input.isVisible === 'radio === a') {
        return radioValue === 'a'; // show the dropdown if radio is "a"
      }
      return input.isVisible === true; // show other elements that are visible
    });

    render.value = filteredInputs;
  },
  { immediate: true, deep: true },
);
</script>
