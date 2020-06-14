import React from 'react'
import AppNavigator from './src/routes'
import {NavigationContainer} from '@react-navigation/native'
import {Provider} from 'react-redux'
import {store} from './src/store/store'

export default class App extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<Provider store={store}>
				<NavigationContainer>
					<AppNavigator />
				</NavigationContainer>
			</Provider>
		)
	}
}
