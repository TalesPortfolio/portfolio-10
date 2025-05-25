import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../componets/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../containers/utils/enums/Tarefa'
import { Botao, Campo } from '../../styles' // Importe geral
import { UsuarioLogado } from './styles' // Importe local
import * as S from './styles'
// src/containers/BarraLateral/index.tsx

import { Botao1 } from './styles' // Garante que está usando o correto

type Props = {
  mostraFiltro: boolean
}

const BarraLateral = ({ mostraFiltro }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const userString = localStorage.getItem('user')
  const user = userString ? JSON.parse(userString) : null

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <S.Aside>
      <div>
        {/* Mostra o nome do usuário logado */}
        {user && (
          <UsuarioLogado>
            Enregistré comme: <strong>{user.name}</strong>
          </UsuarioLogado>
        )}

        {mostraFiltro ? (
          <>
            <Campo
              type="text"
              placeholder="Recherche"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="En attente"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="Complété"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="priorité"
                legenda="Urgent"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="priorité"
                legenda="Important"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="priorité"
                legenda="Normal"
              />
              <FiltroCard criterio="tous" legenda="Tous" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Revenir à la liste des tâches
          </Botao>
        )}

        {/* Botão de sair */}
        <Botao1 onClick={handleLogout} variant="secundario">
          Sorti
        </Botao1>
      </div>
    </S.Aside>
  )
}

export default BarraLateral