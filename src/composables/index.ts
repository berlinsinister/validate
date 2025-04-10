import { ref } from 'vue';
import { useField } from 'vee-validate';
import { ModelT, StateI } from '@/types';
import { getComponent } from '@/helpers';

// validation
export const useValidate = (uid: string) => {
  const { fieldName, rules, model, options, quasarComponent, label, title, subtitle } = getComponent(uid);

  const { errorMessage, value } = useField<ModelT>(
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
    title,
    subtitle,
  }
};

// state
const initialState: StateI = {
  fullName: '',
  radio: '',
  dropdown: '',
  checkbox: false,
  dropdownTwo: '',
  dropdownThree: '',
  password: '',
};

const state = ref<StateI>(initialState);

export const useState = () => {
  const setState = (fieldName: string, newValue: ModelT) => {
    state.value = { ...state.value, [fieldName]: newValue };
  };

  const resetState = (fieldName: string) => {
    state.value[fieldName] = initialState[fieldName];
  };

  const clearState = () => {
    state.value = { ...initialState };
  };

  return { state, setState, resetState, clearState };
};
