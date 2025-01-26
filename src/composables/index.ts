import { useField } from 'vee-validate';
import { setCssVar } from 'quasar'

import { configFields, configUI } from '@/config';
import { USER_INTERACTION_FIELDS } from '@/config/constants';

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
  modelValue: string | string[],
  configLayout?: {
    styles: Record<string, string>;
    order: Record<string, number>;
  },
) => {
  const layout = configLayout || { styles: {}, order: {} };

  switch (renderType) {
    case 'visibility':
      Object.keys(configUI.value).forEach((key) => {
        configUI.value[key].isVisible = modelValue.includes(key);
      });

      configUI.value.checkbox.isVisible = true;
      break;

    case 'style':
      USER_INTERACTION_FIELDS.forEach((item) => {
        (configUI.value[item].titleStyles as Record<string, string | number>).fontSize = layout.styles.fontSize;
        (configUI.value[item].titleStyles as Record<string, string | number>).backgroundColor = layout.styles.backgroundColor;
        (configUI.value[item].titleStyles as Record<string, string | number>).color = layout.styles.color;

        configUI.value[item].order = layout.order[item];
      });

      setCssVar('primary', layout.styles.backgroundColor);
      break;
  
    default:
      break;
  }
}

export const useComponentData = (name: string) => {
  const { label, fieldName, componentName, title, subtitle, titleStyles, subtitleStyles } = configUI.value[name];

  return {
    label,
    fieldName,
    componentName,
    title,
    subtitle,
    titleStyles,
    subtitleStyles,
  }
}
