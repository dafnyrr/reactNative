import React from 'react'
import PropTypes from 'prop-types'
import {TextStyled} from './styled'

const Text = ({fontSize, fontWeight, textAlign, color, children, ...props}) => (
	<TextStyled
		fontSize={fontSize}
		fontWeight={fontWeight}
		color={color}
		textAlign={textAlign}
		{...props}>
		{children}
	</TextStyled>
)

Text.propTypes = {
	fontSize: PropTypes.string,
	fontWeight: PropTypes.string,
	textAlign: PropTypes.string,
	color: PropTypes.string,
	children: PropTypes.string,
}

Text.defaultProps = {
	fontSize: '16px',
	fontWeight: 'normal',
	textAlign: 'left',
	color: 'black',
	children: 'Text',
}

export default Text
