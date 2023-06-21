import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../store/reducers/contatos'
import * as S from './styles'

import ContatoClass from '../models/contato'

type Props = ContatoClass

const Contato = ({
  nome: nomeInicial,
  email: emailInicial,
  telefone: telefoneInicial,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeInicial.length > 0) {
      setNome(nomeInicial)
    }
  }, [nomeInicial])

  useEffect(() => {
    if (emailInicial.length > 0) {
      setEmail(emailInicial)
    }
  }, [emailInicial])

  useEffect(() => {
    if (telefoneInicial.length > 0) {
      setTelefone(telefoneInicial)
    }
  }, [telefoneInicial])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeInicial)
    setEmail(emailInicial)
    setTelefone(telefoneInicial)
  }

  return (
    <>
      <S.CardContato>
        <S.CampoContato
          disabled={!estaEditando}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></S.CampoContato>
        <S.CampoContato
          disabled={!estaEditando}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></S.CampoContato>
        <S.CampoContato
          disabled={!estaEditando}
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        ></S.CampoContato>
        <div>
          {estaEditando ? (
            <>
              <S.BotaoSalvar
                onClick={() => {
                  dispatch(
                    editar({
                      nome,
                      id,
                      email,
                      telefone
                    })
                  )
                  {
                    setEstaEditando(false)
                  }
                }}
              >
                Salvar
              </S.BotaoSalvar>
              <S.BotaoCancelarRemover onClick={cancelarEdicao}>
                Cancelar
              </S.BotaoCancelarRemover>
            </>
          ) : (
            <>
              <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
              <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                Remover
              </S.BotaoCancelarRemover>
            </>
          )}
        </div>
      </S.CardContato>
    </>
  )
}

export default Contato
