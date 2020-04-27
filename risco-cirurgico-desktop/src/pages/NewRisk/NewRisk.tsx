import React from "react";
import {
  Container,
  HorizontalDivider,
} from "../../components/Containers/Container";
import { MainCard, Card, FormCard } from "../../components/Cards/Cards";
import { Input, SelectMenu } from "../../components/Inputs/Inputs";

// import { Container } from './styles';

export default function NewRisk() {
  const sexValues = [
    { value: "masculino", label: "Masculino" },
    { value: "feminino", label: "Feminino" },
  ];

  return (
    <Container>
      <MainCard>
        <HorizontalDivider>
          <Card>
            <HorizontalDivider>
              <h1>Novo risco</h1>
              <FormCard>
                <div>
                  <Input placeholder="Nome" width="300px" />
                  <Input placeholder="Médico Solicitante" width="300px" />
                  <Input placeholder="Outra gama de inputs" width="300px" />
                  <SelectMenu placeholder="Sexo" options={sexValues} width="200px" />
                  <Input placeholder="Nome" width="300px" />
                  <Input placeholder="Médico Solicitante" width="300px" />
                </div>
                <div>
                  <Input placeholder="Nome" width="300px" />
                  <Input placeholder="Médico Solicitante" width="300px" />
                  <SelectMenu placeholder="Sexo" options={sexValues} width="200px" />
                </div>
              </FormCard>
            </HorizontalDivider>
          </Card>
        </HorizontalDivider>
      </MainCard>
    </Container>
  );
}
