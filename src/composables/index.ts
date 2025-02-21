import { ref } from 'vue';
import { useField } from 'vee-validate';
import { getComponent } from '@/helpers';

// validation
export const useValidate = (uid: string) => {
  const { fieldName, rules, model, options, quasarComponent, label } = getComponent(uid);

  const { errorMessage, value } = useField<string | string[] | boolean>(
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
    label,
  }
};

// state
const state = ref<any>({});

export const useState = () => {
  const setState = (fieldName: string, newValue: string | string[] | boolean) => {
    state.value = { ...state.value, [fieldName]: newValue };
  };

  const clearState = () => {
    state.value = {};
  };

  return { state, setState, clearState };
};
