import styled from 'styled-components'

export const CardContato = styled.div`
  background-color: #2a6e78;
  padding: 16px;
  border-radius: 16px;
  font-size: 18px;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      justify-content: center;
    }
  }
`

export const CampoContato = styled.textarea`
  background-color: transparent;
  border: none;
  resize: none;
  text-align: center;
  font-size: 16px;
  color: #c9b180;
  width: 100%;

  @media (max-width: 820px) {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border: none;
  }
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #7a907c;
  border-radius: 16px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: green;
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: #4b1139;
`
