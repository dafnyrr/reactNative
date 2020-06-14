import React from 'react'
import PropTypes from 'prop-types'
import {ButtonStyled} from './styled'
import {Text} from '../../atoms'

const Button = ({...props}) => (
	<ButtonStyled {...props}>
		<Text color={props.color} textAlign="center" fontWeight="bold">
			{props.title}
		</Text>
	</ButtonStyled>
)

Button.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
}

export default Button
