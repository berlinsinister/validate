import type { StyleValue } from "vue";

export interface OptionI {
  label: string;
  value: string | boolean;
}

export interface PropsI {
  componentName: string;
  modelValue: string;
  errorMessage?: string;
  label?: string;
  options?: OptionI[] | string[];
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
