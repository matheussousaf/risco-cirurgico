import React, { FunctionComponent } from "react";
import styled from "styled-components";

const BasicContainer = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  padding-left: 5rem;
  display: flex;
  height: 100%;
  flex: 1;
`;

export const VerticalDivider = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const HorizontalDivider = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Container: FunctionComponent = (props) => {
  return <BasicContainer>{props.children}</BasicContainer>;
};