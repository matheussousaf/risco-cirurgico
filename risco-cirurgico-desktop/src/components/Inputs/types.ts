export interface InputContainerProps {
  width?: string;
  placeholder?: string;
}

export interface SelectProps {
  width?: string;
  options: Array<Option>
  placeholder?: string;
}

interface Option {
  label: string
  value: string
}