import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
} from "react";
import { OptionTypeBase } from "react-select";

export interface Risk {
  name: string;
  birthDate: string;
  sex: string;
  address: string;
  job: string;
  phoneNumber: string;
  solicitantDoctor: string;
  surgery: string;
  weight: number;
  height: number;
  imc: number;
  generalState: string;
  acvPaFc: string;
  arFrSato: string;
  hemathologics: string;
  echocardiogram: string;
  electrocardiogram: string;
  es_others: string;
  pathological_history: string;
  tabagism: string;
  etilism: string;
  functionalAvaliation: string;
  accAha: string;
  physicalStateAsa: string;
  ircr: string;
  acpAlgorithm: string;
  riskCardio: string;
  riskCardioSuggestion: string | undefined;
  riskLungs: string;
  riskLungsSuggestion: string | undefined;
  riskNefrologic: string;
  riskNefrologicSuggestion: string | undefined;
  riskHepatic: string;
  riskHepaticSuggestion: string | undefined;
  riskDelirium: string;
  riskDeliriumSuggestion: string | undefined;
  riskBleeding: string;
  riskBleedingSuggestion: string | undefined;
  riskInfection: string;
  riskInfectionSuggestion: string | undefined;
  riskThrombosis: string;
  riskThrombosisSuggestion: string | undefined;
  riskAnticoag: string;
  riskAnticoagSuggestion: string | undefined;
  finalAvaliation: string;
}

interface RiskFormValues {
  jobValues: OptionTypeBase;
  sexValues: OptionTypeBase;
  pathologicalValues: OptionTypeBase[];
}

interface NewRiskData {
  currentRisk: Risk;
  setCurrentRisk: Function;
  riskFormValues: RiskFormValues;
  setRiskFormValues: Function;
  currentPage: number;
  setCurrentPage: Function;
}

export const NewRiskProvider: FunctionComponent = ({ children }) => {
  const [currentRisk, setCurrentRisk] = useState<Risk>({} as Risk);
  const [riskFormValues, setRiskFormValues] = useState<RiskFormValues>(
    {} as RiskFormValues
  );
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <NewRiskContext.Provider
      value={{
        currentRisk,
        setCurrentRisk,
        currentPage,
        setCurrentPage,
        riskFormValues,
        setRiskFormValues,
      }}
    >
      {children}
    </NewRiskContext.Provider>
  );
};

const NewRiskContext = createContext<NewRiskData>({} as NewRiskData);

export function useNewRiskContext() {
  return useContext(NewRiskContext);
}
