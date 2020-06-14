import styled from 'styled-components'

export const ViewStyled = styled.View`
	display: ${(props) => props.display};
	flex: ${(props) => props.flex};
	flex-direction: ${(props) => props.flexDirection};
	flex-wrap: ${(props) => props.flexWrap};
	justify-content: ${(props) => props.justifyContent};
	align-items: ${(props) => props.alignItems};
	align-content: ${(props) => props.alignContent};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	background-color: ${(props) => props.bgColor};
`
