<template>
  <div class="form-wrapper">
    <p>
      selected values: {{ userSelectedValues }}
    </p>

    <q-select
      v-model="selectConfigModel"
      :options="config"
      label="Config select"
      dense
      class="q-mb-lg"
    />

    <q-form
      class="form-user"
      @submit="onSubmit"
    >
      <field-wrapper
        v-for="input in renderedInputs"
        :key="input.uid"
        :input="input"
      />
      <submit-btn v-if="selectConfigModel" />
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useForm } from 'vee-validate';

import { useState } from '@/composables';
import { config } from '@/config';
import { ConfigI, InputConfigI, UserSelectedValueI } from '@/types';

import SubmitBtn from '@/components/buttons/SubmitBtn.vue';
import FieldWrapper from '@/components/inputs/FieldWrapper.vue';

const userSelectedValues = ref<UserSelectedValueI>({});
const selectConfigModel = ref<ConfigI | null>(null);

const { clearState } = useState();

const renderedInputs = ref<InputConfigI[] | null>(null);

watch(
  selectConfigModel,
  (newConfig, oldConfig) => {
    if (newConfig && oldConfig && newConfig.label !== oldConfig.label) {
      clearState();
    }

    renderedInputs.value = newConfig?.inputs || [];
  },
  { deep: true },
);

const { handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
  userSelectedValues.value = values;
});
</script>
