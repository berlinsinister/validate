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
        v-for="input in render"
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
const render = ref<InputConfigI[] | null>(null);
const { state, clearState } = useState();

const filterInputs = (inputs: InputConfigI[], radioValue: string) => {
  return inputs.filter((input) => {
    // TODO: change condition to more specific. e.g. not just 'input.controlElement === 'dropdown'' etc
    if (input.controlElement === 'dropdown' && input.isVisible === 'radio === a') {
      return radioValue === 'a'; // show dropdown if radio === "a"
    }
    return input.isVisible === true;
  });
};

watch(
  () => selectConfigModel.value,
  (newConfig, oldConfig) => {
    if (!newConfig) return;

    if (oldConfig && newConfig.label !== oldConfig.label) {
      clearState(); // reset state when switching configs
    }

    // to update render correctly when switching configs
    render.value = filterInputs(newConfig.inputs, state.value.radio);
  },
  { deep: true },
);

watch(
  () => state.value,
  (newState) => {
    if (!selectConfigModel.value) return;

    console.log('STATE', newState);
    render.value = filterInputs(selectConfigModel.value.inputs, newState.radio);
  },
  { deep: true },
);
</script>
