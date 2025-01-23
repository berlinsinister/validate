import { ConfigFieldI } from '@/types';

export const configFields: ConfigFieldI = {
  fullName: {
    fieldName: 'fullName',
    rules: 'required|min:3|max:30|alpha',
    model: '',
  },
  radio: {
    fieldName: 'radio',
    rules: 'required',
    model: '',
    options: [
      { label: 'Spring', value: 'spring' },
      { label: 'Summer', value: 'summer' },
      { label: 'Autumn', value: 'autumn' },
      { label: 'Winter', value: 'winter' },
    ],
  },
  dropdown: {
    fieldName: 'dropdown',
    rules: 'required',
    model: '',
    options: ['Apple', 'Google', 'Facebook', 'Open AI'],
  },
  checkbox: {
    fieldName: 'checkbox',
    rules: 'required',
    model: [],
    options: [
      { label: 'Full Name', value: 'fullName' },
      { label: 'Radio', value: 'radio' },
      { label: 'Dropdown', value: 'dropdown' },
    ],
  },
};
