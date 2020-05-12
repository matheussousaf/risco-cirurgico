import React, { FunctionComponent, useState } from "react";
import {
  Container,
  HorizontalDivider,
  VerticalDivider,
} from "../../components/Containers/Container";
import { MainCard, Card, FormCard } from "../../components/Cards/Cards";
import { Input, MenuSelect } from "../../components/Inputs/Inputs";
import styled from "styled-components";
import { FormProps } from "./types";
import { useNewRiskContext } from "../../contexts/new-risk";

// import { Container } from './styles';

const ClinicIdentification: FunctionComponent = (props) => {
  const { risk, setRisk } = useNewRiskContext();

  const sexValues = [
    { value: "masculino", label: "Masculino" },
    { value: "feminino", label: "Feminino" },
  ];

  const jobsValues = [
    { value: "programador", label: "Programador" },
    { value: "medico", label: "Médico" },
  ];
  return (
    <>
      <h3>Identificação Clínica</h3>
      <Input
        value={risk.name}
        onChange={(event: any) => {
          setRisk({ ...risk, name: event.target.value });
        }}
        title="Nome"
        width="500px"
      />
      <Input
        value={risk.birthDate}
        onChange={(event: any) => {
          setRisk({ ...risk, birthDate: event.target.value})
        }}
        title="Data de Nascimento"
        width="150px"
      />
      <MenuSelect
        title="Profissão"
        options={jobsValues}
        width="300px"
        onChange={(event: any) => {
          setRisk({...risk, job: event.value})
        }}
      />
      <Input
        value={risk.address}
        onChange={(event: any) => {
          setRisk({ ...risk, address: event.target.value})
        }}
        title="Endereço"
        width="400px"
      />
      <MenuSelect
        title="Gênero"
        options={sexValues}
        width="200px"
        onChange={(event: any) => {
          setRisk({...risk, sex: event.value})
        }}
      />
      <Input
        value={risk.phoneNumber}
        onChange={(event: any) => {
          setRisk({ ...risk, phoneNumber: event.target.value})
        }}
        title="Telefone"
        width="175px"
      />
      <Input
        value={risk.solicitantDoctor}
        onChange={(event: any) => {
          setRisk({ ...risk, solicitantDoctor: event.target.value})
        }}
        title="Médico Solicitante"
        width="200px"
      />
      <Input
        value={risk.surgery}
        onChange={(event: any) => {
          setRisk({ ...risk, surgery: event.target.value})
        }}
        title="Cirurgia Programada"
        width="400px"
      />
    </>
  );
};

const PhisicalExam: FunctionComponent = (props) => {
  const { risk, setRisk } = useNewRiskContext();
  return (
    <>
      <h3>Exame Físico / Biometria</h3>
      <Input
        value={risk.weight}
        onChange={(event: any) => {
          setRisk({ ...risk, weight: event.target.value})
        }}
        title="Peso (kg)"
        width="100px"
      />
      <Input
        value={risk.height}
        onChange={(event: any) => {
          setRisk({ ...risk, height:event.value})
        }}
        title="Altura (m)"
        width="100px"
      />
      <Input
        value={risk.imc}
        onChange={(event: any) => {
          setRisk({ ...risk, imc:event.value})
        }}
        title="IMC (kg/m²)"
        width="100px"
      />
      <Input
        value={risk.generalState}
        onChange={(event: any) => {
          setRisk({ ...risk, generalState:event.value})
        }}
        title="Estado geral"
        width="500px"
      />
      <Input
        value={risk.acvPaFc}
        onChange={(event: any) => {
          setRisk({ ...risk, acvPaFc:event.value})
        }}
        title="ACV / PA / FC"
        width="150px"
      />
      <Input
        value={risk.arFrSato}
        onChange={(event: any) => {
          setRisk({ ...risk, arFrSato:event.value})
        }}
        title="AR / FR / SatO2"
        width="175px"
      />
    </>
  );
};

const HabitsAndPatholocigalHistory: FunctionComponent = (props) => {
  const pathologicalsValues = [
    { value: "diabetes", label: "DM" },
    { value: "nega has", label: "NEGA HAS" },
  ];
  const { risk, setRisk } = useNewRiskContext();
  return (
    <>
      <h3>Antecedentes Patológicos e Hábitos</h3>
      <MenuSelect
        title="Selecione..."
        options={pathologicalsValues}
        width="500px"
        value={{ value: "diabetes", label: "DM" }}
        onChange={(event: any) => {
          setRisk({ ...risk, pathologicalsValues:event.value})
        }}
        isMulti
      />
      <Input
        value={risk.tabagism}
        onChange={(event: any) => {
          setRisk({ ...risk, tabagism:event.value})
        }}
        title="Tabagismo*"
        width="500px"
      />
      <Input
        value={risk.etilism}
        onChange={(event: any) => {
          setRisk({ ...risk, etilism:event.value})
        }}
        title="Etilismo*"
        width="425px"
      />
    </>
  );
};

const MultiStepFormContainer = styled.div`
  flex: 1;
  display: flex;
`;

const MultiStepForm: FunctionComponent = (props) => {
  return <MultiStepFormContainer>{props.children}</MultiStepFormContainer>;
};

const FormContainer = styled.div`
  flex: 1;
  display: inline-block;
  padding: 0 1rem;
`;

const Form: FunctionComponent<FormProps> = (props) => {
  return props.active === props.id ? (
    <FormContainer>{props.children}</FormContainer>
  ) : null;
};

const FormButtonContainer = styled.a`
  display: block;
  width: 150px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  color: black;
  margin-left: auto;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
`;

interface FormButtonProps {
  title?: string;
  onClick: Function;
}

const FormButton: FunctionComponent<FormButtonProps> = (props) => {
  return (
    <>
      <FormButtonContainer onClick={() => props.onClick()}>
        {props.title}
      </FormButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  flex: 1;
  display: block;
  margin-top: 5rem;
  width: 100%;
`;

export default function NewRisk() {
  const { setCurrentPage, currentPage } = useNewRiskContext();
  return (
    <Container>
      <MainCard>
        <HorizontalDivider>
          <Card>
            <HorizontalDivider>
              <h1>Novo risco</h1>
              <VerticalDivider>
                <MultiStepForm>
                  <Form active={currentPage} id={0}>
                    <ClinicIdentification />
                    <PhisicalExam />
                    <HabitsAndPatholocigalHistory />
                    <ButtonContainer>
                      <FormButton
                        title="Próximo"
                        onClick={() => {
                          setCurrentPage(1);
                          console.log(currentPage);
                        }}
                      />
                    </ButtonContainer>
                  </Form>
                  <Form active={currentPage} id={1}></Form>
                </MultiStepForm>
              </VerticalDivider>
            </HorizontalDivider>
          </Card>
        </HorizontalDivider>
      </MainCard>
    </Container>
  );
}
