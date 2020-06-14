import styled from 'styled-components'

export const TextStyled = styled.Text`
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	color: ${(props) => props.color};
	text-align: ${(props) => props.textAlign};
`
