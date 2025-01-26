import { useAttrs } from 'vue';
import type { StyleValue } from 'vue';
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

export const useAttributes = () => {
  const attrs = useAttrs();
  
  const label: string = attrs['label'] as string || '';
  const componentName: string = attrs['component-name'] as string || '';
  const fieldName: string = attrs['field-name'] as string || '';

  const title: string = attrs['title'] as string || '';
  const subtitle: string = attrs['subtitle'] as string || '';
  const titleStyles: StyleValue = attrs['title-styles'] as StyleValue || {};
  const subtitleStyles: StyleValue = attrs['subtitle-styles'] as StyleValue || {};

  return {
    label,
    componentName,
    fieldName,
    title,
    subtitle,
    titleStyles,
    subtitleStyles,
  }
}
