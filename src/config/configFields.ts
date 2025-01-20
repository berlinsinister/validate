import { ConfigFieldI } from '@/types';

export const configFields: ConfigFieldI = {
  fullName: {
    fieldName: 'fullName',
    rules: 'required|minLength:3|lettersOnly',
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
};
