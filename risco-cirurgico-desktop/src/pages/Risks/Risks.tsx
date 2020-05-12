import React, { FunctionComponent } from "react";
import {
  Container,
  HorizontalDivider,
  VerticalDivider,
} from "../../components/Containers/Container";
import { MainCard, Card } from "../../components/Cards/Cards";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { InputButton } from "../../components/Inputs/Inputs";

// import { Container } from './styles';
const RisksContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SearchBarContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const RiskContainer = styled.div`
  display: flex;
  padding: 40px;
  height: 40px;
  margin: 10px;
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.colors.gray};
`;

const Risk: FunctionComponent = (props) => {
  return <RiskContainer></RiskContainer>;
};

const SearchBar = styled(InputButton)`
  border-radius: ${(props) => props.theme.borderRadius};
  -webkit-appearance: none;
  box-shadow: none !important;
  -webkit-appearance: none;
  flex: 1;
  margin: 0;
  padding: 30px 20px;
  font-size: 20px;
`;

export default function Risks() {
  return (
    <Container>
      <MainCard>
        <HorizontalDivider>
          <Card>
            <HorizontalDivider>
              <h1>Riscos</h1>
              <VerticalDivider>
                <HorizontalDivider>
                  <SearchBarContainer>
                    <SearchBar
                      value=""
                      onChange={() => {}}
                      width="500px"
                      placeholder="Procurar..."
                    />
                  </SearchBarContainer>
                  <RisksContainer>
                    <Risk />
                    <Risk />
                    <Risk />
                  </RisksContainer>
                </HorizontalDivider>
              </VerticalDivider>
            </HorizontalDivider>
          </Card>
        </HorizontalDivider>
      </MainCard>
    </Container>
  );
}
