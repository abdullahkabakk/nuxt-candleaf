export interface InputProps {
  name: string;
  label?: string;
  type?: string;
  required?: boolean;
  placeholder: string;
  leadingIcon?: string;
  trailingIcon?: string;
}

export interface SelectProps {
  name: string;
  options: any;
  label?: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  trailingIcon?: string;
  leadingIcon?: string;
  description?: string;
  valueKey?: string;
  labelKey?: string;
}
