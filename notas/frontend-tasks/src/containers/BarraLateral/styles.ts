import styled from "styled-components";

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`;

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`;

export const UsuarioLogado = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 16px;
  text-align: center;
`;
type BotaoProps = {
  variant?: "primario" | "secundario";
};

export const Botao1 = styled.button<BotaoProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  background-color: red;
  &:hover {
    background-color: green;
    opacity: 0.9;
  }
`;
