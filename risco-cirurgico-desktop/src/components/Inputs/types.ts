import { OptionTypeBase } from "react-select";

export interface InputButtonProps {
  width?: string;
  title?: string;
  onChange: Function;
  value: string;
}

export interface SelectProps {
  width?: string;
  options: Array<Option>
  title?: string;
  isMulti?: boolean;
  value?: OptionTypeBase;
  onChange: Function;
}

interface Option {
  label: string
  value: string
}