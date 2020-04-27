import React, { FunctionComponent } from "react";
import "./styles.css";
import {
  Container,
  VerticalDivider,
  HorizontalDivider,
} from "../../components/Containers/Container";
import { MainCard, Card } from "../../components/Cards/Cards";
import styled from "styled-components";
import { RiskProps } from "./types";

const RecentRisksContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const RiskContainer = styled.div`
  display: flex;
  margin: 1rem;
  justify-content: center;
  padding: 0 2rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.colors.white};
  filter: brightness(0.97);
  flex-direction: column;

  p {
    font-size: 16px;
  }

  h4 {
    text-align: center;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  flex: 1;

  h2 {
    font-size: 20px;
  }
`;

const SeeMore = styled.span`
  text-align: center;
  cursor: pointer;

  h4:hover {
    filter: opacity(0.7);
  }
`;

const Risk: FunctionComponent<RiskProps> = (props) => {
  const { name, time } = props;
  return (
    <RiskContainer>
      <VerticalDivider>
        <Info>
          <h2>{name}</h2>
          <p>há {time} dias atrás</p>
        </Info>
      </VerticalDivider>
    </RiskContainer>
  );
};

const Soon = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${(props) => props.theme.colors.black};
  filter: opacity(0.4);
`;

const RecentRisks: FunctionComponent = (props) => {
  return <RecentRisksContainer>{props.children}</RecentRisksContainer>;
};

export default function Home() {
  return (
    <Container>
      <MainCard>
        <VerticalDivider>
          <Card>
            <RecentRisks>
              <h1>Riscos Recentes</h1>
              <Risk name="Matheus de Sousa Figueirêdo" time={4} />
              <Risk name="Lukas de Sousa Figueirêdo" time={2} />
              <Risk name="Anna Júlia de Sousa Figueirêdo" time={3} />
              <SeeMore>
                <h4>Veja mais</h4>
              </SeeMore>
            </RecentRisks>
          </Card>
          <HorizontalDivider>
            <Card>
              <HorizontalDivider>
                <h1>Suas estatísticas</h1>
                <Soon>
                  <h2>Em breve!</h2>
                </Soon>
              </HorizontalDivider>
            </Card>
            <Card>
              <HorizontalDivider>
                <h1>Previsão</h1>
                <Soon>
                  <h2>Em breve!</h2>
                </Soon>
              </HorizontalDivider>
            </Card>
          </HorizontalDivider>
        </VerticalDivider>
      </MainCard>
    </Container>
  );
}
