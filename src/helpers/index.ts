import { config } from '@/config';
import { VISIBLE_IF } from '@/config/constants';
import { InputConfigI } from '@/types';

export const getComponent = (uid: string, fieldName = ''): InputConfigI => {
  const searchKey = fieldName ? 'fieldName' : 'uid';
  const searchValue = fieldName || uid;

  return config
    .flatMap(({ inputs }) => inputs)
    .find((input) => input[searchKey] === searchValue) || {} as InputConfigI;
};

export const transformIsVisible = (isVisibleValue: string | boolean): string => {
  if (typeof isVisibleValue === 'boolean') return `${VISIBLE_IF}:${isVisibleValue}`;

  const [field, value] = isVisibleValue.split(' === ');
  return `${VISIBLE_IF}:${field},${value}`;
};

export const isBooleanString = (value: string): boolean => value === 'true' || value === 'false';

export const toBooleanValue = (value: string): boolean => value === 'true' ? true : false;
