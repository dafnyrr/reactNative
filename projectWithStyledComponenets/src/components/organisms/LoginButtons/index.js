import React from 'react'
import {Button} from '../../molecules'
import {View, Image} from '../../atoms'
import logo from '../../../images/logo.png'
const LoginButtons = ({...props}) => (
	<View {...props} alignContent="center" bgColor={props.colorPrimary}>
		<Image source={logo} width={110} height={100} />
		<View justifyContent="center">
			<Button
				title="Sign Up"
				bgColor={props.colorPrimary}
				color={props.colorSecondary}
				borderColor={props.colorSecondary}
			/>
			<Button
				title="Login"
				bgColor={props.colorSecondary}
				color={props.colorPrimary}
			/>
		</View>
	</View>
)

export default LoginButtons
