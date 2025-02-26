import { ref } from 'vue';
import { useField } from 'vee-validate';
import { ModelT, StateI, VisibilitySettingI } from '@/types';
import { getComponent, getVisibilitySettings, getVisibilityRules } from '@/helpers';
import { FIELDS_NAMES } from '@/config/constants';

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
const initialState: StateI = {
  fullName: '',
  radio: '',
  dropdown: '',
  checkbox: false,
  dropdownTwo: '',
  dropdownThree: '',
};

const state = ref<StateI>(initialState);
const visibilitySettings: VisibilitySettingI[] = getVisibilitySettings();
const visibilityRules = getVisibilityRules(visibilitySettings);

export const useState = () => {
  const setState = (fieldName: string, newValue: ModelT) => {
    state.value = { ...state.value, [fieldName]: newValue };

    visibilitySettings.forEach(({ isVisible, fieldName }) => {
      const rule = visibilityRules[isVisible];
    
      if (rule && !rule(state.value)) {
        // if the field is not visible, reset its value
        if (fieldName === FIELDS_NAMES.CHECKBOX) {
          state.value[FIELDS_NAMES.CHECKBOX] = false;
          state.value[FIELDS_NAMES.FULLNAME] = '';
        } else {
          state.value[fieldName] = '';
        }
      }
    });
  };

  const clearState = () => {
    state.value = { ...initialState };
  };

  return { state, setState, clearState };
};
