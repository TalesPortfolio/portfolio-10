import React from 'react'

import * as S from './styles'

const SearchBox = () => (
	<S.BoxBusca>
		<S.SearchBoxForm>
			<S.SearchBoxInput placeholder="Faire votre recherche" />
			<S.SearchBoxButton>
				<S.StyledFaSearch />
			</S.SearchBoxButton>
		</S.SearchBoxForm>
	</S.BoxBusca>
)

export default SearchBox
