import React from 'react'
import PropTypes from 'prop-types'
import {ViewStyled} from './styled'

const View = ({
	display,
	flex,
	flexDirection,
	flexWrap,
	justifyContent,
	alignItems,
	alignContent,
	margin,
	padding,
	bgColor,
	children,
	...props
}) => (
	<ViewStyled
		display={display}
		flex={flex}
		flexDirection={flexDirection}
		flexWrap={flexWrap}
		justifyContent={justifyContent}
		alignItems={alignItems}
		alignContent={alignContent}
		margin={margin}
		padding={padding}
		bgColor={bgColor}
		{...props}>
		{children}
	</ViewStyled>
)

View.propTypes = {
	display: PropTypes.string,
	flex: PropTypes.number,
	flexDirection: PropTypes.string,
	flexWrap: PropTypes.string,
	justifyContent: PropTypes.string,
	alignItems: PropTypes.string,
	margin: PropTypes.number,
	padding: PropTypes.number,
	bgColor: PropTypes.string,
}

View.defaultProps = {
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
	alignContent: 'flex-start',
	margin: 0,
	padding: 0,
	bgColor: 'transparent',
}

export default View
