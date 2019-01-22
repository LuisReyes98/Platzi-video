import React from 'react';
import {Text,View, StyleSheet} from 'react-native'
import App from './../../App.js'

//COmonente de lista vacia
export default function Empty(props){
	
	return(
		<View>
			{ /*loading ?

	      <View style={styles.loader}>
	        <ActivityIndicator size='large' color="#58B88E" />
	      </View>       
	      :
	    */}
      <View style={styles.container}>
				<Text style={styles.text}>{props.text}</Text>
			</View>              
			
		</View>
		
	)
}

const styles = StyleSheet.create({
	container:{
		padding: 10,
	},
	text:{
		fontSize: 16,

	},
	loader:{
    flex: 1,
    justifyContent: 'center', 
  }, 

})