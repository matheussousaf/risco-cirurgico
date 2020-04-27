import styled from "styled-components";
import React, { FunctionComponent } from "react";
import { InputContainerProps, SelectProps } from "./types";
import { theme } from "../../styles/theme";
import Select from "react-select";
import { defaultProps } from "react-select/src/Select";

export const SelectMenu: FunctionComponent<SelectProps> = (props) => {
  const customStyles = {
    container: (base: any, state: any) => ({
      ...base,
      fontSize: "18px",
      fontFamily: "Signika Negative",
      display: "inline-block",
      width: props.width ?? "300px",
      padding: "0 15px",
    }),
    control: (base: any, state: any) => ({
      ...base,
      border: `2px solid ${theme.colors.gray}`,
      borderRadius: "10px",
      padding: "3px",
      boxShadow: "none",
    }),
  };

  return (
    <Select
      theme={(baseTheme) => ({
        ...baseTheme,
        colors: {
          ...baseTheme.colors,
          primary: theme.colors.primary,
          text: theme.colors.gray,
        },
      })}
      styles={customStyles}
      placeholder={props.placeholder}
      options={props.options}
      noOptionsMessage={() => "Nenhum resultado"}
    />
  );
};

const InputContainer = styled.input<InputContainerProps>`
  padding: 20px;
  font-size: 18px;
  width: ${(props) => props.width};
  color: ${(props) => props.theme.colors.black};
  box-shadow: none;
  border: 2px solid ${(props) => props.theme.colors.gray};
  height: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  transition: 200ms 1 ease;
  -webkit-appearance: none;
  outline: none;
  margin: 1rem;
  font-family: "Signika Negative", sans-serif;

  &:focus {
    border: 2px solid ${(props) => props.theme.colors.primary};
    background: none;
    box-shadow: none;
  }

  &:hover:not(:focus) {
    border: 2px solid ${(props) => props.theme.colors.darkGray};
  }
`;

export const Input: FunctionComponent<InputContainerProps> = (props) => {
  return (
    <InputContainer
      placeholder={props.placeholder ?? "Placeholder"}
      width={props.width ?? "200px"}
    ></InputContainer>
  );
};

export const Label = styled.label`
  font-size: 20px;
`;
