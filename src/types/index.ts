export type ModelT = string | boolean;

interface StateBaseI {
  [key: string]: string | boolean;
}

// TODO: expand as the inputs will add
export interface StateI extends StateBaseI {
  fullName: string;
  radio: string;
  dropdown: string;
  checkbox: boolean;
  dropdownTwo: string;
  dropdownThree: string;
}

export interface FieldValidationInfoI {
  field: string;
  rule?: {
    name: string;
    params?: any;
  };
}

export interface UserSelectedValueI {
  [key: string] : string;
}

// config
export interface ErrorMessageI {
  required: string;
  min?: string;
  max?: string;
  alpha?: string;
}

export interface OptionI {
  label: string;
  value: string;
}

export interface InputConfigI {
  uid: string;
  controlElement: string;
  quasarComponent: string;
  isVisible: boolean | string; // string for conditional expression like ("radio === 'a'")
  fieldName: string;
  rules: string;
  model: ModelT; // string | string[] | boolean;
  errorMessage: ErrorMessageI;
  title: string;
  subtitle: string;
  label: string;
  options?: string[] | OptionI[];
}

export interface ConfigI {
  label: string;
  inputs: InputConfigI[];
}

// visibility settings
export interface VisibilitySettingI {
  uid: string;
  fieldName: string;
  isVisible: string;
}
