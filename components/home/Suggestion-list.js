import React, {Component } from 'react';

import {
	FlatList,
	Text,
	StyleSheet
} from 'react-native';

import Layout from './Suggestion-list-layout.js';
import Empty from './../layouts/Empty.js';
import VerticalSeparator from './../layouts/VerticalSeparator.js';
import Suggestion from './Suggestion.js';

//This is a component
export default class SuggestionList extends Component {
	keyExtractor = (item) => item.id.toString() //el id del componente lo vuelve el key de la lista
	renderEmpty =() => <Empty text = "No hay sugerencias" /> // si la lista es vacia
	itemSeparator =() => <VerticalSeparator color="#D3D7CF"/> //separador de la lista
	
	renderItem= ({item}) => { //cargar los elementos en la lista de sugerencias
		return(
			<Suggestion {...item} />
		)
	}


	render(){
	
		return(
			<Layout
				title="Recomendado para ti:"
			>
				<FlatList 
					keyExtractor= {this.keyExtractor}
					data={this.props.list}
					ListEmptyComponent={this.renderEmpty}
					ItemSeparatorComponent={ this.itemSeparator}
					renderItem={ this.renderItem }
				/>				
			</Layout>

		)
	}
}
const styles= StyleSheet.create({
	elements:{
		fontSize: 18,
		paddingLeft: 10,
	}
})
