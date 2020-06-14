import React, {useEffect} from 'react'
import {View} from '../../components/atoms'
import {CardTouchable} from '../../components/molecules'

import {FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {fetchRequest, selector} from '../../ducks/states'

const Home = () => {
	const dispatch = useDispatch()
	const request = () => dispatch(fetchRequest())
	const {data} = useSelector((state) => selector(state))

	useEffect(() => {
		request()
	}, [])

	return (
		<>
			<View>
				<FlatList
					data={data}
					renderItem={({item}) => <CardTouchable data={item.state} />}
					keyExtractor={(item) => String(item.uid)}
					numColumns={2}
				/>
			</View>
		</>
	)
}

export default Home
