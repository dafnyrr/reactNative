import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

// import Home from '../screens/Home'
import Login from '../screens/Login'

const Stack = createStackNavigator()

export default function AppNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	)
}
