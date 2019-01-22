import React from 'react';
import{
	View,
	Image,
	Text,
	StyleSheet,

}from 'react-native'

export default function Suggestion(props){
	let genres = []
	genres[0] = props.genres[0] == null ? " " : props.genres[0]
	genres[1] = props.genres[1] == null ? " " : ","+props.genres[1]

	return(
		<View style={styles.container}>
			<View style={styles.left}>
				<Image
					style={styles.cover}
					source={{
							uri: props.medium_cover_image //cargar la imagen desde la API
						}
					}
				/>
				<View style={styles.genre}>
					<Text style={styles.genreText}>{genres[0] + genres[1]}</Text>
				</View>
					
				
			</View>
			<View style={styles.right}>
				<Text style={styles.title}> {props.title} </Text>

				<Text style={styles.year} > {props.year} </Text>
				<Text style={styles.rating}> {"Puntuación: "+props.rating} </Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
	},
	genre:{
		position: 'absolute',
		left:0,
		top:0,
		backgroundColor: 'black',
		paddingVertical: 5,
		paddingHorizontal: 7,
	},
	genreText:{
		color: 'white',
		fontSize: 11,

	},
	cover:{
		height: 150,
		width: 100,
		resizeMode: 'contain',
	},
	right:{
		paddingLeft: 10,
		justifyContent: 'space-between',
	},
	title:{
		fontSize: 18,
		color: '#44546b',
	},
	year:{
		backgroundColor: '#70b124',
		paddingVertical: 4,
		paddingHorizontal: 6,
		color: 'white',
		fontSize: 11,
		borderRadius: 5,//bordes circulares
		overflow: 'hidden' , //para que el borde no se como lo interno
		alignSelf: 'flex-start', //para que solo ocupe su tamaño y no crezca de mas
	},
	rating:{
		color: '#6b6b6b',
		fontSize: 14,
		fontWeight: 'bold',

	}


})