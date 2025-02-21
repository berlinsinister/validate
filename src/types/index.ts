export interface FieldOptionI {
  label: string;
  value: string | boolean;
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
