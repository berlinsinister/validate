import { ref } from 'vue';
import type { StyleValue } from 'vue';
import { ConfigUII } from '@/types';

const titleStyles: any = { // StyleValue = {
  marginBottom: '4px',
  padding: '4px 12px',
  fontSize: '16px',
  lineHeight: '28px',
  color: '#ffffff',
  backgroundColor: '#2493bd', // '#26A69A80',
}

const subtitleStyles: StyleValue = {
  marginBottom: '16px',
  fontSize: '14px',
  lineHeight: '18px',
  color: '#333333',
  backgroundColor: '#ffffff',
}

function createTitleStyles() {
  return { ...titleStyles };
}

export const configUI = ref<ConfigUII>({
  fullName: {
    title: 'Enter full name',
    subtitle: 'some subtitle',
    titleStyles: createTitleStyles(),
    subtitleStyles,
    componentName: 'q-input',
    component: 'form-input',
    isVisible: false,
  },
  radio: {
    title: 'Pick an option',
    subtitle: 'some subtitle',
    titleStyles: createTitleStyles(),
    subtitleStyles,
    componentName: 'q-option-group',
    component: 'form-radio',
    isVisible: false,
  },
  dropdown: {
    title: 'Pick style for the elements',
    subtitle: 'some subtitle',
    titleStyles: createTitleStyles(),
    subtitleStyles,
    componentName: 'q-select',
    component: 'form-dropdown',
    isVisible: false,
  },
});
