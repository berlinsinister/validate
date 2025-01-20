import { useField }     from 'vee-validate';
import { configFields } from '@/config/configFields';
import { configUI }     from '@/config/configUI';

// validation
export const useValidate = (name: string) => {
  const { fieldName, rules, model, options } = configFields[name];

  const { errorMessage, value } = useField<string>(
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

export const useRenderUI = (fieldName: string, modelValue: string) => {
  // config1.value.inputs[0].isVisible = false;

  // now works for radios only, add more conditions
  // TODO: refine this logic;

  console.log('render UI', fieldName, modelValue);

  if (modelValue === '0') {
    const bool = modelValue === '0' ? false : true;
    configUI.value[fieldName].isVisible = bool;
  }

  if (modelValue === 'trys') {
    configUI.value['radio'].titleStyles.backgroundColor = 'aquamarine';
  }
}
