import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import Colors from '../../styles/colors'

export const BoxBusca = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: #ffffff;
`

export const SearchBoxInput = styled.input`
	outline: 0;
	font-size: 1.2em;
	color: #fff;
	width: 0;
	padding: 0;
	border: none;
	background: none;
	transition: 0.45s;

	&::placeholder {
		color: #ffffff;
		opacity: 0.6;
	}

	&::-webkit-input-placeholder {
		color: #ffffff;
	}
	&::-moz-placeholder {
		color: #ffffff;
	}
	&:-ms-input-placeholder {
		color: #ffffff;
	}

	${BoxBusca}:hover & {
		padding-left: 2em;
		padding-right: 1em;
		width: 250px;

		@media screen and (min-width: 400px) {
			width: 360px;
		}
	}
`

export const SearchBoxForm = styled.form`
	display: flex;
	border-radius: 50px;
	background-color: #ccc;
	height: 45px;
`

export const SearchBoxButton = styled.button`
	display: flex;
	border-radius: 50%;
	width: 45px;
	height: 45px;
	background-color: ${Colors.success};
	border: none;
	cursor: pointer;
	transition: 0.3s;

	&:active {
		transform: scale(0.85);
	}
`

// Adicione este estilo ao seu arquivo de estilos
export const StyledFaSearch = styled(FaSearch)`
	color: #fff; // Define a cor do ícone
	margin: auto; // Centraliza o ícone dentro do flex container (SearchBoxButton)
	width: 24px; // Aumenta o tamanho do ícone
	height: 24px; // Ajusta a altura para combinar com a largura, mantendo a proporção
`
