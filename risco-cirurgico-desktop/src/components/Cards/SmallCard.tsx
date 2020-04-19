import styled from "styled-components";
import { OptionProps, DescriptionProps, SmallCardProps } from "./types";
import React, { FunctionComponent } from "react";
import { FaEdit, FaTrash, FaPaperPlane } from "react-icons/fa";

export const SmallCardContainer = styled.div`
  height: 10vh;
  border-radius: 20px;
  margin: 15px 0;
  width: 80%;
  display: flex;
  align-self: center;
  padding: 1.5rem;
  background: white;
  flex-direction: row;
  transition: 200ms ease;
  &:hover {
    -webkit-box-shadow: 10px 17px 114px -59px rgba(56, 56, 56, 1);
    -moz-box-shadow: 10px 17px 114px -59px rgba(56, 56, 56, 1);
    box-shadow: 5px 5px 100px -59px rgba(56, 56, 56, 1);
  }
`;

export const DescriptionContainer = styled.div`
  margin-left: 20px;
`;

export const Option = styled.div<OptionProps>`
  margin: 5px;
  text-align: center;
  display: flex;
  transition: 200ms ease;
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      props.hoverColor
        ? props.hoverColor
        : props.theme.colors.secondary} !important;
  }
`;

export const Options = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.black};
  margin: 0px 20px 0px auto;
  filter: opacity(0.7);
`;

export const Description: FunctionComponent<DescriptionProps> = (props) => {
  return (
    <DescriptionContainer>
      <h3>{props.text}</h3>
      <p>{props.days}</p>
    </DescriptionContainer>
  );
};

export const SmallCard: FunctionComponent<SmallCardProps> = (props) => {
  return (
    <SmallCardContainer>
      <Description text={props.text} days={props.days} />
      <Options>
        <Option>
          <FaEdit size="1rem" style={{ marginRight: 10, marginLeft: 15 }} />
          <span>Editar</span>
        </Option>
        <Option>
          <FaPaperPlane
            size="1rem"
            style={{ marginRight: 10, marginLeft: 15 }}
          />
          <span>Enviar</span>
        </Option>
        <Option hoverColor="red">
          <FaTrash size="1rem" style={{ marginRight: 10, marginLeft: 15 }} />
          <span>Deletar</span>
        </Option>
      </Options>
    </SmallCardContainer>
  );
};
