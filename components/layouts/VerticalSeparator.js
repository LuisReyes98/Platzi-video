import React from 'react';

import {
	View ,
	Text, 
	StyleSheet
} from 'react-native'

//dumb component
export default function VerticalSeparator(props){
	return (
		<View style={[styles.separator,{borderTopColor: (props.color) ? props.color : "#F57900"}]}>
			
		</View>
	)
}

const styles= StyleSheet.create({
	separator:{
		borderTopWidth: 2,
		//marginVertical: 1,
	}
})