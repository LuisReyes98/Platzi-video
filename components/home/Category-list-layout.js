import React from 'react';
import { 
	View,
	Text,
	StyleSheet,
	ImageBackground,

} from 'react-native';

//THis is a component 
export default function CategoryListLayout(props){
	return (
		<ImageBackground
			source={require('./../../assets/background.png')}
			style={styles.container}
		>
			<Text style={styles.title}>{props.title}</Text>
			{props.children}
			
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container:{
		paddingVertical: 30,
		paddingHorizontal: 10,
	},
	title:{
		color:'#4C4C4C',
		fontSize:20,
		marginBottom: 10,
		fontWeight: 'bold',
		marginLeft: 8,
	}
})