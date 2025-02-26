<template>
  <div style="width: 300px">
    <div class="flex items-center q-mb-xl">
      <q-icon
        name="info"
        color="primary"
        size="24px"
        class="q-mr-sm"
      />
      <span>
        Select a config to start creating a form
      </span>
    </div>

    <p style="border: 1px solid blue">checkbox: {{ state.checkbox }}</p>
    <p style="border: 1px solid cyan">dropdown: {{ state.dropdown }}</p>
    <p style="border: 1px solid lime">fullname: {{ state.fullName }}</p>

    <q-select
      v-model="selectConfigModel"
      :options="config"
      label="Config select"
      dense
      class="q-mb-xl"
    />

    <!-- <p class="q-mb-xl">
      selected values: {{ userSelectedValues }}
    </p> -->

    <q-form @submit="onSubmit">
      <template
        v-for="input in computedRender"
        :key="input.uid"
      >
        <field-base :uid="input.uid" />
      </template>
      <submit-btn v-if="selectConfigModel" />
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useForm } from 'vee-validate';

import { useState } from '@/composables';
import { config } from '@/config';
// import { USER_INTERACTION_FIELDS } from '@/config/constants';
import { ConfigI, InputConfigI, UserSelectedValueI } from '@/types';
import { filterInputs } from '@/helpers';

import SubmitBtn from '@/components/buttons/SubmitBtn.vue';
import FieldBase from '@/components/inputs/FieldBase.vue';

const userSelectedValues = ref<UserSelectedValueI>({});
const selectConfigModel = ref<ConfigI | null>(null);

const { handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
  console.log('values', values);
  // USER_INTERACTION_FIELDS.forEach((item) => {
  //   userSelectedValues.value[item] = values[item]
  // });
});

// NEW
const { state, clearState } = useState();

const computedRender = computed<InputConfigI[] | null>(() => {
  if (!selectConfigModel.value) return null;
  return filterInputs(selectConfigModel.value.inputs, state.value);
});

watch(
  () => selectConfigModel.value,
  (newConfig, oldConfig) => {
    if (newConfig && oldConfig && newConfig.label !== oldConfig.label) {
      clearState();
    }
  },
  { deep: true },
);
</script>
