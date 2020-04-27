import React, { useState, FunctionComponent } from "react";
import styled from "styled-components";
import { SidebarItemProps, SideMenuProps } from "./types";
import { FaHome, FaBookMedical, FaPlus } from "react-icons/fa";
import { withRouter } from "react-router-dom";

const Item = styled.a`
  margin: 0;
  display: flex;
  align-items: center;
  height: 5rem;
  color: ${(props) => props.theme.colors.secondary};
  text-decoration: none;
  width: 100%;
  flex: 1;

  @media ${(props) => props.theme.device.mobileS} and (orientation: portrait) {
    display: none;
  }
`;

const ItemText = styled.span`
  display: none;
  font-weight: bold;
`;

const SidebarItems = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarInnerItem = styled.li`
  width: 100%;
  padding: 0;
  transition: 250ms ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    filter: opacity(0.5);
  }

  ${Item}:hover {
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  }

  ${ItemText}:hover {
    color: ${(props) => props.theme.colors.white};
  }

  &.active {
    background-color: ${(props) => props.theme.colors.secondary};
    filter: none;

    ${Item} {
      color: ${(props) => props.theme.colors.white};
      cursor: pointer;
    }

    ${ItemText} {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const Sidebar = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 5rem;
  overflow-x: hidden;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  transition: width ease-out 250ms;

  @media ${(props) => props.theme.device.mobileS} and (orientation: portrait) {
    padding: 0;
    margin: 0;
    overflow: hidden;
    /* display: none; */
    width: 0;
    background: red;

    &html {
      width: 0;
      height: 0;
      display: none;
    }
  }

  &.clicked {
    width: 11.5vw;

    ${ItemText} {
      display: block;
    }

    ${SidebarInnerItem} {
      margin-right: auto;
    }
  }
`;

const SidebarItem: FunctionComponent<SidebarItemProps> = (props) => {
  const { id, active, onClick, text, children } = props;

  return (
    <SidebarInnerItem
      className={active === id ? "active" : ""}
      onClick={() => {
        onClick();
      }}
    >
      <Item>
        {children}
        <ItemText>{text}</ItemText>
      </Item>
    </SidebarInnerItem>
  );
};

const SidebarMenu: FunctionComponent<SideMenuProps> = (props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Sidebar className={clicked ? "clicked" : ""}>
      <SidebarItems>
        <SidebarItem
          id={0}
          text="Home"
          clicked={clicked}
          active={props.active}
          onClick={() => {
            if (props.active === 0) setClicked(!clicked);
            props.setActive(0);
            props.history.push("/")
          }}
          >
          <FaHome size="2em" style={{ minWidth: "2rem", margin: "0 1.5rem" }} />
        </SidebarItem>

        <SidebarItem
          id={1}
          text="Riscos"
          clicked={clicked}
          active={props.active}
          onClick={() => {
            if (props.active === 1) setClicked(!clicked);
            props.setActive(1);
            props.history.push("/risks")
          }}
          >
          <FaBookMedical
            size="2em"
            style={{ minWidth: "2rem", margin: "0 1.5rem" }}
            />
        </SidebarItem>

        <SidebarItem
          id={2}
          text="Novo Risco"
          clicked={clicked}
          active={props.active}
          onClick={() => {
            if (props.active === 2) setClicked(!clicked);
            props.setActive(2);
            props.history.push("/new-risk")
          }}
          >
          <FaPlus size="2em" style={{ minWidth: "2rem", margin: "0 1.5rem" }} />
        </SidebarItem>
      </SidebarItems>
    </Sidebar>
  );
};

export default withRouter(SidebarMenu);
