import { defineRule } from 'vee-validate';

const camelCaseToWords = (camelCaseString: string): string => {
  return camelCaseString
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase();
};

defineRule('required', (value: string, _, { name }) => {
  if (value.trim()) return true;
  return `${camelCaseToWords(name)} field is required`;
});

defineRule('minLength', (value: string, [length]: [number], { name }) => {
  return value.length >= length
    ? true
    : `${camelCaseToWords(name)} field must be at least ${length} characters length`;
});

defineRule('lettersOnly', (value: string, _, { name }) => {
  const regex = /^[a-zA-Z]+$/;

  if (regex.test(value)) {
    return true;
  }
  return `${camelCaseToWords(name)} field should only contain letters`;
});
