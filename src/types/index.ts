import type { StyleValue } from "vue";

export interface OptionI {
  label: string;
  value: string | boolean;
}

export interface UserFieldPropsI {
  label: string;
  componentName: string;
  fieldName: string;
}

export interface ConfigFieldI {
  [key: string]: {
    fieldName: string;
    rules: string;
    model: string | string[];
    options?: OptionI[] | string[];
  }
}

export interface ConfigUIItemI {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  titleStyles: StyleValue;
  subtitleStyles: StyleValue;
  componentName: string;
  fieldName: string;
  component: string;
  isVisible: boolean;
  order: number;
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

export interface UserSelectedValueI {
  [key: string] : string;
}

export interface SelectConfigItemI {
  label: string;
  layout: {
    styles: Record<string, string>;
    order: Record<string, number>;
  };
}
