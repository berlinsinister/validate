import { config } from '@/config';
import { InputConfigI, VisibilitySettingI, VisibilityRuleI, StateI } from '@/types';

export const getComponent = (uid: string, fieldName = ''): InputConfigI => {
  const searchKey = fieldName ? 'fieldName' : 'uid';
  const searchValue = fieldName || uid;

  return config
    .flatMap(({ inputs }) => inputs)
    .find((input) => input[searchKey] === searchValue) || {} as InputConfigI;
};

export const filterInputs = (inputs: InputConfigI[], state: StateI): InputConfigI[] => {
  return inputs.filter((input) => {
    if (typeof input.isVisible === 'boolean') {
      return input.isVisible; // directly return if it's true
    }

    if (typeof input.isVisible === 'string') {
      const [field, value] = input.isVisible.split(' === ');
      if (!field || !value) return false;

      const expectedValue = value === 'true' ? true : value === 'false' ? false : value;
      return state[field] === expectedValue;
    }

    return false;
  });
};

export const getVisibilitySettings = (): VisibilitySettingI[] => {
  return config
    .flatMap(({ inputs }) => inputs
    .filter(({ isVisible }) => typeof isVisible === 'string')
    .map(({ uid, fieldName, isVisible }: InputConfigI) => ({
      uid,
      fieldName,
      isVisible: isVisible as string,
    })),
  );
};

export const getVisibilityRules = (visibilitySettings: VisibilitySettingI[]): VisibilityRuleI => {
  return visibilitySettings.reduce((acc, { isVisible }) => {
    const [field, value] = isVisible.split(' === ');
    acc[isVisible] = (state: StateI) => state[field] === (value === 'true' ? true : value);
    return acc;
  }, {} as VisibilityRuleI);
};
