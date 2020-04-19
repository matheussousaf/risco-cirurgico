import React, { FunctionComponent } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  height: 85vh;
  padding: 2rem;
  display: flex;
  background-color: whitesmoke;
  align-items: center;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.black};
  flex-direction: column;

  h1 {
      margin-bottom: 50px;
  }
`;

export const Card: FunctionComponent = (props) => {
  return (
    <div>
      <CardContainer>
        {props.children}
      </CardContainer>
    </div>
  );
};
