import { selectConfigOptions as config } from '@/config';

export const getComponent = (uid: string, fieldName = '') => {
  const searchKey = fieldName ? 'fieldName' : 'uid';
  const searchValue = fieldName || uid;

  return config
    .flatMap(({ inputs }) => inputs)
    .find((input) => input[searchKey] === searchValue) || null;
};
