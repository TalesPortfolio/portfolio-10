import React from 'react'
import * as S from './styles'

interface ContainerProps {
	children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <S.Container>{children}</S.Container> // Usa o componente Container estilizado
}

export default Container
