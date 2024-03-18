import React from 'react'
import * as S from './styles'
import SearchBox from '../SearchBar'

const MainMenu = () => {
	return (
		<>
			<S.NavBar>
				<S.Ul>
					<li>
						<S.Logo src={`./assets/images/icon/logo.png`} alt="Logo" />
					</li>
					<li>
						<SearchBox />
					</li>
					<li>Option2</li>
					<li>Option3</li>
					<li>Option4</li>
					<li>Option5</li>
				</S.Ul>
			</S.NavBar>
		</>
	)
}

export default MainMenu
