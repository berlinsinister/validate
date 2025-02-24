import { ref } from 'vue';
import { useField } from 'vee-validate';
import { ModelT, StateI } from '@/types';
import { getComponent } from '@/helpers';

// validation
export const useValidate = (uid: string) => {
  const { fieldName, rules, model, options, quasarComponent, label } = getComponent(uid);

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
  }
};

// state
// TODO: expand as the inputs will add
const initialState = {
  fullName: '',
  radio: '',
  dropdown: '',
  checkbox: false,
  dropdownTwo: '',
};

const state = ref<StateI>(initialState);

export const useState = () => {
  const setState = (fieldName: string, newValue: ModelT) => {
    state.value = { ...state.value, [fieldName]: newValue };
  };

  const clearState = () => {
    state.value = { ...initialState };
  };

  return { state, setState, clearState };
};
