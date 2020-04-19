import React, { useState } from "react";
import styled from "styled-components";
import { ContainerProps, } from "./types";

import { SidebarMenu } from "../../components/Sidebar/Sidebar";
import "./styles.css";
import {
  ScreenRouter,
  ScreenRoute,
} from "../../components/ScreenRouter/ScreenRouter";
import { Card } from "../../components/Cards/Card";
import { SmallCard } from "../../components/Cards/SmallCard";

const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  margin: 0;
  overflow: hidden;
  padding: 2rem;
`;

export default function Home() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <Container width="100%" height="100%">
        <SidebarMenu active={active} setActive={setActive} />
        <ScreenRouter>
          <ScreenRoute activeChildren={active} id={0}>
            <Card>
              <h1>Riscos Recentes</h1>
              <SmallCard text="Matheus de Sousa" days="há 4 dias" />
              <SmallCard text="Lukas de Sousa" days="há 2 dias" />
              <SmallCard text="Anna Júlia de Sousa" days="há 1 dia" />
              <h4>Ver mais</h4>
            </Card>
          </ScreenRoute>

          <ScreenRoute activeChildren={active} id={1}>
            <Card></Card>
          </ScreenRoute>

          <ScreenRoute activeChildren={active} id={2}>
            <Card></Card>
          </ScreenRoute>
        </ScreenRouter>
      </Container>
    </div>
  );
}
