import { OptionTypeBase } from "react-select";

export interface InputButtonProps {
  width?: string;
  title?: string;
  onChange: Function;
  value: string | number;
}

export interface SelectProps {
  width?: string;
  options: OptionTypeBase[];
  title?: string;
  isMulti?: boolean;
  value?: OptionTypeBase;
  onChange: Function;
}

interface Option {
  label: string;
  value: string;
}
