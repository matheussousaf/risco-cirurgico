import styled from "styled-components";

export const MainCard = styled.div`
  padding: 2rem;
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  margin: 2rem;
  flex: 1;
  background: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.black};
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  flex: 1;
  padding: 0 2rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.colors.white};
  box-shadow: 5px 5px 30px -30px #0c0c0c;
  margin: 1rem;
`;

export const FormCard = styled.form`
  display: flex;
  height: 100%;
  display: block;
  margin: 0 0 2rem 0;
  border-radius: ${(props) => props.theme.borderRadius};

  h3 {
    text-transform: uppercase;
    font-size: 20px;
    margin: 0 1rem;
    color: ${(props) => props.theme.colors.darkGray};
  }

  p {
    color: ${(props) => props.theme.colors.darkGray};
    font-size: 16px;
    margin-bottom: auto;
  }
`;
