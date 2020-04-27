import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { CustomButtonProps } from "./types";

export const CustomButtonStyle = styled.a`
  width: 100px;
  height: 20px;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 10px;
  text-align: center;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
`;

export const CustomButton: FunctionComponent<CustomButtonProps> = (props) => (
  <CustomButtonStyle onClick={() => props.onClick}>
    {props.name}
  </CustomButtonStyle>
);
