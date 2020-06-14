import styled from 'styled-components'

export const ButtonStyled = styled.TouchableOpacity`
	border-width: 1px;
	border-style: solid;
	border-color: ${(props) =>
		props.borderColor ? props.borderColor : 'transparent'};
	border-radius: 4px;
	background-color: ${(props) => (props.bgColor ? props.bgColor : 'gray')};
	padding: 16px;
	margin: 8px;
	min-width: 180px;
`
