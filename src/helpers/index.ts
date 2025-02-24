import { config } from '@/config';
import { InputConfigI } from '@/types';

export const getComponent = (uid: string, fieldName = ''): InputConfigI => {
  const searchKey = fieldName ? 'fieldName' : 'uid';
  const searchValue = fieldName || uid;

  return config
    .flatMap(({ inputs }) => inputs)
    .find((input) => input[searchKey] === searchValue) || {} as InputConfigI;
};
