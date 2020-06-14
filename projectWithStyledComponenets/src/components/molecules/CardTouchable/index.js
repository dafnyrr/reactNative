import React from 'react'
import {CardTouchableStyled} from './styled'
import {Text} from '../../atoms'

const CardTouchable = ({...props}) => {
	return (
		<CardTouchableStyled>
			<Text color="#eee" fontSize="20px">
				{props.data}
			</Text>
		</CardTouchableStyled>
	)
}

export default CardTouchable
