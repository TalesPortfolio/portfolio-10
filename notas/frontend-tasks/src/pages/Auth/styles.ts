import styled from 'styled-components'

export const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fafafa;
`

export const Tab = styled.button<{ ativa: boolean }>`
  padding: 10px 20px;
  margin-right: 5px;
  background-color: ${({ ativa }) => (ativa ? '#007bff' : '#ccc')};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const Campo = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1rem;
`

export const Botao = styled.button`
  padding: 10px;
  background-color: green;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`