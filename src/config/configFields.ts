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
      { label: 'Parodyti', value: '1' },
      { label: 'Paslepti', value: '0' }, // maybe change to real true / false?
    ],
  },
  dropdown: {
    fieldName: 'dropdown',
    rules: 'required',
    model: '',
    options: ['vienas', 'du', 'trys', 'keturi'],
  },
  checkbox: {
    fieldName: 'checkbox',
    rules: '',
    model: [],
    options: [
      { label: 'Full Name', value: 'fullName' },
      { label: 'Radio', value: 'radio' },
      { label: 'Dropdown', value: 'dropdown' },
    ],
  },
};
