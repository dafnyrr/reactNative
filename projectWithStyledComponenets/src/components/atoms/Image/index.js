import React from 'react'
import {Image as RNImage} from 'react-native'

const Image = ({...props}) => (
	<RNImage
		style={{width: props.width, height: props.height}}
		source={props.source}
	/>
)

export default Image
