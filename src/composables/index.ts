import { useField }     from 'vee-validate';
import { configFields } from '@/config/configFields';
import { configUI }     from '@/config/configUI';

// validation
export const useValidate = (name: string) => {
  const { fieldName, rules, model, options } = configFields[name];

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
  }
}

// render ui
export const useRender = (
  renderType: 'visibility' | 'style',
  fieldName: string,
  modelValue: string | string[],
  layout: any,
) => {
  console.log('use render');

  const fields = ['fullName', 'radio', 'dropdown'];

  switch (renderType) {
    case 'visibility':
      Object.keys(configUI.value).forEach((key) => {
        configUI.value[key].isVisible = modelValue.includes(key);
      });
      break;

    case 'style':
      fields.forEach((item) => {
        configUI.value[item].titleStyles.fontSize = layout.styles.fontSize;
        configUI.value[item].titleStyles.backgroundColor = layout.styles.backgroundColor;
        configUI.value[item].titleStyles.color = layout.styles.color;

        configUI.value[item].order = layout.order[item];
      });
      break;
  
    default:
      break;
  }
}
