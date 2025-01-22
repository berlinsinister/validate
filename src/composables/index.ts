import { useField }     from 'vee-validate';
import { configFields } from '@/config/configFields';
import { configUI }     from '@/config/configUI';

// validation
export const useValidate = (name: string) => {
  const { fieldName, rules, model, options } = configFields[name];

  const { errorMessage, value } = useField<string | string[]>(
    fieldName, // 'fullName',
    rules, // 'required|min:3',
    {
      initialValue: model, // 'Ros',
      validateOnValueUpdate: false,
    },
  );

  return {
    errorMessage,
    value,
    options,
  }
}

export const useRender = (fieldName: string, modelValue: string | string[]) => {
  // toggle visibility of fullName only // hardcoded
  if (fieldName === 'radio') {
    const bool = modelValue === '0' ? false : true;
    configUI.value['fullName'].isVisible = bool;
  }

  // color
  if (modelValue === 'trys') {
    configUI.value['radio'].titleStyles.backgroundColor = 'aquamarine';
  }

  // toggle visibility from checkboxes
  if (fieldName === 'checkbox') {
    Object.keys(configUI.value).forEach((key) => {
      // set isVisible to true if the key is in visibleForms, otherwise false
      configUI.value[key].isVisible = modelValue.includes(key);
    });
  }
}
