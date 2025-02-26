import { config } from '@/config';
import { InputConfigI, VisibilitySettingI, StateI } from '@/types';

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
      const stateMatch = input.isVisible.match(/^(\w+)\s*===\s*['"]?(\w+)['"]?$/);

      if (!stateMatch) {
        return false;
      }

      const fieldName = stateMatch[1]; // eg 'radio'
      const expectedValue = stateMatch[2] === 'true' ? true : stateMatch[2] === 'false' ? false : stateMatch[2]; // eg 'a' or 'true'

      // check if the value in 'state' matches the expected value eg 'radio === a'
      return state[fieldName] === expectedValue;
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

export const getVisibilityRules = (visibilitySettings: VisibilitySettingI[]) => {
  return Object.fromEntries(
    visibilitySettings.map(({ isVisible }) => [
      isVisible,
      (state: StateI) => {
        const [field, value] = isVisible.split(' === ');
        return state[field] === (value === 'true' ? true : value);
      },
    ]),
  );
};
