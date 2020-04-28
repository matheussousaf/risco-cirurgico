export interface InputContainerProps {
  width?: string;
  placeholder?: string;
}

export interface SelectProps {
  width?: string;
  options: Array<Option>
  placeholder?: string;
  isMulti?: boolean;
}

interface Option {
  label: string
  value: string
}