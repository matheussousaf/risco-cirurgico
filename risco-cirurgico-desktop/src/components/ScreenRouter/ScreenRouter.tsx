import React, { FunctionComponent, ReactNode } from "react";
import { ScreenRouteProps } from "./types";
import styled from "styled-components";

const RouterContainer = styled.div`
  flex-direction: column;
  display: flex;
  height: 90vh;
  width: 100%;
`;


export const ScreenRouter: FunctionComponent = (props) => {
    return (
      <RouterContainer>
        {props.children}
      </RouterContainer>
    )
  }
  
  export const ScreenRoute: FunctionComponent<ScreenRouteProps> = (props) => {
    return (
      <div>
        {React.Children.map(props.children, (child: ReactNode) => {
          if(props.id === props.activeChildren) {
            return child
          }
        })}
      </div>
    )
  };
  