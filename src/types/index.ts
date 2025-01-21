import type { StyleValue } from "vue";

export interface OptionI {
  label: string;
  value: string | boolean;
}

export interface UserFieldPropsI {
  componentName: string;
  fieldName: string;
}

export interface ConfigFieldI {
  [key: string]: {
    fieldName: string;
    rules: string;
    model: string;
    options?: OptionI[] | string[];
  }
}

export interface ConfigUIItemI {
  title: string;
  subtitle: string;
  titleStyles: any; // StyleValue;
  subtitleStyles: StyleValue;
  componentName: string;
  component: string;
  isVisible: boolean;
}

export interface ConfigUII {
  [key: string]: ConfigUIItemI;
}

export interface FieldValidationInfoI {
  field: string;
  rule?: {
    name: string;
    params?: any;
  };
}

export interface ConfigDisplayItemI {
  component: string;
  label: string;
}

export interface ConfigDisplayI {
  options: ConfigDisplayItemI[];
}
