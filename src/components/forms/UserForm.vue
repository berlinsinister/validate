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
      <field-base
        v-for="input in computedRender"
        :key="input.uid"
        :uid="input.uid"
      />
      <submit-btn v-if="selectConfigModel" />
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useForm } from 'vee-validate';

import { useState } from '@/composables';
import { config } from '@/config';
import { ConfigI, InputConfigI, UserSelectedValueI } from '@/types';
import { filterInputs } from '@/helpers';

import SubmitBtn from '@/components/buttons/SubmitBtn.vue';
import FieldBase from '@/components/inputs/FieldBase.vue';

const userSelectedValues = ref<UserSelectedValueI>({});
const selectConfigModel = ref<ConfigI | null>(null);

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

const { handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
  userSelectedValues.value = values;
});
</script>
