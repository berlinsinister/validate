import { ref } from 'vue';
import { useField } from 'vee-validate';
import { getComponent } from '@/helpers';

// validation
export const useValidate = (uid: string) => {
  const { fieldName, rules, model, options, quasarComponent } = getComponent(uid);

  const { errorMessage, value } = useField<string | string[]>(
    fieldName,
    rules,
    {
      initialValue: model,
      validateOnValueUpdate: false,
    },
  );

  return {
    errorMessage,
    value,
    options,
    fieldName,
    quasarComponent,
  }
};

// state
const state = ref<any>({});

export const useState = () => {
  const setState = (fieldName: string, newValue: string | string[]) => {
    state.value = { ...state.value, [fieldName]: newValue };
  };

  return { state, setState };
};
