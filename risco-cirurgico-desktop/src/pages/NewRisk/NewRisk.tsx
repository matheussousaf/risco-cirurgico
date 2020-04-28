import React, { FunctionComponent } from "react";
import {
  Container,
  HorizontalDivider,
} from "../../components/Containers/Container";
import { MainCard, Card, FormCard } from "../../components/Cards/Cards";
import { Input, SelectMenu } from "../../components/Inputs/Inputs";

// import { Container } from './styles';

const ClinicIdentification: FunctionComponent = (props) => {
  const sexValues = [
    { value: "masculino", label: "Masculino" },
    { value: "feminino", label: "Feminino" },
  ];

  const jobsValues = [
    { value: "programador", label: "Programador" },
    { value: "medico", label: "Médico" },
  ];

  return (
    <div>
      <div>
        <h3>Identificação Clínica</h3>
        <Input placeholder="Nome" width="30%" />
        <Input placeholder="Data de Nascimento" width="15%" />
        <SelectMenu placeholder="Sexo" options={sexValues} width="15%" />
        <SelectMenu placeholder="Profissão" options={jobsValues} width="30%" />
      </div>
      <div>
        <Input placeholder="Endereço" width="25%" />
        <Input placeholder="Telefone" width="15%" />
        <Input placeholder="Médico Solicitante" width="20%" />
        <Input placeholder="Cirurgia Programada" width="20.5%" />
      </div>
    </div>
  );
};

const PhisicalExam: FunctionComponent = (props) => {
  return (
    <div>
      <div>
        <h3>Exame Físico / Biometria</h3>
        <Input placeholder="Peso (kg)" width="10%" />
        <Input placeholder="Altura (m)" width="10%" />
        <Input placeholder="IMC (kg/m²)" width="10%" />
        <Input placeholder="Estado geral" width="50.5%" />
      </div>
      <div>
        <Input placeholder="ACV / PA / FC" width="50%" />
        <Input placeholder="AR / FR / SatO2" width="40%" />
      </div>
    </div>
  );
};

const HabitsAndPatholocigalHistory: FunctionComponent = (props) => {
  const pathologicalsValues = [
    {value: "diabetes", label: "DM"},
    {value: "nega has", label: "NEGA HAS"},
  ]

  return (
    <div>
      <div>
        <h3>Antecedentes Patológicos e Hábitos</h3>
        <SelectMenu placeholder="Selectione..." options={pathologicalsValues} width="99.5%" isMulti/>
      </div>
      <div>
        <Input placeholder="Tabagismo*" width="50%" />
        <Input placeholder="Etilismo*" width="40%" />
      </div>
    </div>
  );
};

export default function NewRisk() {
  return (
    <Container>
      <MainCard>
        <HorizontalDivider>
          <Card>
            <HorizontalDivider>
              <h1>Novo risco</h1>
              <FormCard>
                <ClinicIdentification />
                <PhisicalExam />
                <HabitsAndPatholocigalHistory />
                <p>* São marcados por padrão como "Não"</p>
              </FormCard>
            </HorizontalDivider>
          </Card>
        </HorizontalDivider>
      </MainCard>
    </Container>
  );
}
