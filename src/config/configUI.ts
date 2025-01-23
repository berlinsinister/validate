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
    title: 'Lets get to know you',
    subtitle: 'What should we call you?',
    titleStyles: createTitleStyles(),
    subtitleStyles,
    componentName: 'q-input',
    component: 'form-input',
    isVisible: false,
    order: 1,
  },
  radio: {
    title: 'What is your favorite season',
    subtitle: 'Which time of year makes you feel at ease?',
    titleStyles: createTitleStyles(),
    subtitleStyles,
    componentName: 'q-option-group',
    component: 'form-radio',
    isVisible: false,
    order: 2,
  },
  dropdown: {
    title: 'Choose your go-to tech',
    subtitle: 'What gadget or innovation excites you the most?',
    titleStyles: createTitleStyles(),
    subtitleStyles,
    componentName: 'q-select',
    component: 'form-dropdown',
    isVisible: false,
    order: 3,
  },
});
