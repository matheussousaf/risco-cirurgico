import styled from "styled-components";
import React, { FunctionComponent } from "react";
import { InputButtonProps, SelectProps } from "./types";
import { theme } from "../../styles/theme";
import Select from "react-select";

export const InputButton = styled.input<InputButtonProps>`
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
  margin: 5px 1rem 1rem 1rem;
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

const InputContainer = styled.div`
  display: inline-block;
  flex-direction: column;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input: FunctionComponent<InputButtonProps> = (props) => {
  return (
    <InputContainer>
      <LabelContainer>
        <Label>{props.title ?? "InputName"}</Label>
        <InputButton value={props.value} onChange={(value) => props.onChange(value)} width={props.width ?? "200px"} />
      </LabelContainer>
    </InputContainer>
  );
};

export const MenuSelect: FunctionComponent<SelectProps> = (props) => {
  const customStyles = {
    container: (base: any, state: any) => ({
      ...base,
      fontSize: "18px",
      fontFamily: "Signika Negative",
      display: "inline-block",
      width: props.width ?? "300px",
      padding: "5px 15px",
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
    <InputContainer>
      <LabelContainer>
        <Label>{props.title ?? "Input Name"}</Label>
        <Select
          theme={(baseTheme) => ({
            ...baseTheme,
            colors: {
              ...baseTheme.colors,
              primary: theme.colors.primary,
              text: theme.colors.gray,
            },
          })}
          value={props.value}
          onChange={(event) => props.onChange(event)}
          styles={customStyles}
          placeholder={"Selecione..."}
          options={props.options}
          noOptionsMessage={() => "Nenhum resultado"}
          isMulti={props.isMulti}
        />
      </LabelContainer>
    </InputContainer>
  );
};

export const Label = styled.label`
  margin: 0 1rem;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.theme.colors.darkGray};
`;
