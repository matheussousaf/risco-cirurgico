import React, { FunctionComponent } from "react";
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
import { OptionTypeBase } from "react-select";

// import { Container } from './styles';

const ClinicIdentification: FunctionComponent = (props) => {
  const { currentRisk, setCurrentRisk, setRiskFormValues, riskFormValues } = useNewRiskContext();

  const sexValues: OptionTypeBase[] = [
    { value: "masculino", label: "Masculino" },
    { value: "feminino", label: "Feminino" },
  ];

  const jobsValues: OptionTypeBase[] = [
    { value: "programador", label: "Programador" },
    { value: "medico", label: "Médico" },
  ];
  return (
    <>
      <h3>Identificação Clínica</h3>
      <Input
        value={currentRisk.name}
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, name: event.target.value });
        }}
        title="Nome"
        width="500px"
      />
      <Input
        value={currentRisk.birthDate}
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, birthDate: event.target.value });
        }}
        title="Data de Nascimento"
        width="150px"
      />
      <MenuSelect
        title="Profissão"
        options={jobsValues}
        value={riskFormValues.jobValues}
        width="300px"
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, job: event.label });
          setRiskFormValues({...riskFormValues, jobValues: event})
        }}
      />
      <Input
        value={currentRisk.address}
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, address: event.target.value });
        }}
        title="Endereço"
        width="400px"
      />
      <MenuSelect
        title="Gênero"
        options={sexValues}
        value={riskFormValues.sexValues}
        width="200px"
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, sex: event.value });
          setRiskFormValues({...riskFormValues, sexValues: event})
        }}
      />
      <Input
        value={currentRisk.phoneNumber}
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, phoneNumber: event.target.value });
        }}
        title="Telefone"
        width="175px"
      />
      <Input
        value={currentRisk.solicitantDoctor}
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, solicitantDoctor: event.target.value });
        }}
        title="Médico Solicitante"
        width="200px"
      />
      <Input
        value={currentRisk.surgery}
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, surgery: event.target.value });
        }}
        title="Cirurgia Programada"
        width="400px"
      />
    </>
  );
};

const PhisicalExam: FunctionComponent = (props) => {
  const { currentRisk, setCurrentRisk } = useNewRiskContext();
  return (
    <>
      <h3>Exame Físico / Biometria</h3>
      <Input
        value={currentRisk.weight}
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, weight: Number.parseFloat(event.target.value) });
        }}
        title="Peso (kg)"
        width="100px"
      />
      <Input
        value={currentRisk.height}
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, height: Number.parseFloat(event.target.value) });
        }}
        title="Altura (m)"
        width="100px"
      />
      <Input
        value={currentRisk.imc}
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, imc: Number.parseFloat(event.target.value) });
        }}
        title="IMC (kg/m²)"
        width="100px"
      />
      <Input
        value={currentRisk.generalState}
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, generalState: event.target.value });
        }}
        title="Estado geral"
        width="500px"
      />
      <Input
        value={currentRisk.acvPaFc}
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, acvPaFc: event.target.value });
        }}
        title="ACV / PA / FC"
        width="150px"
      />
      <Input
        value={currentRisk.arFrSato}
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, arFrSato: event.target.value });
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
  const { currentRisk, setCurrentRisk, riskFormValues, setRiskFormValues } = useNewRiskContext();
  return (
    <>
      <h3>Antecedentes Patológicos e Hábitos</h3>
      <MenuSelect
        title="Antecedentes Patológicos"
        options={pathologicalsValues}
        width="500px"
        value={riskFormValues.pathologicalValues}
        onChange={(event: any) => {
          const array = event && event.map((value: OptionTypeBase) => {
            return value.label;
          });
          setCurrentRisk({ ...currentRisk, pathologicalsValues: array && array.join(', ') });
          setRiskFormValues({...riskFormValues, pathologicalValues: event})
          console.log(riskFormValues.pathologicalValues);
        }}
        isMulti
      />
      <Input
        value={currentRisk.tabagism}
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, tabagism: event.target.value });
        }}
        title="Tabagismo*"
        width="500px"
      />
      <Input
        value={currentRisk.etilism}
        onChange={(event: any) => {
          setCurrentRisk({ ...currentRisk, etilism: event.target.value });
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
              <h1>Novo Risco</h1>
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
