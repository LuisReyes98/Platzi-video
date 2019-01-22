import React , { Component } from 'react';
import {
	View,
	FlatList
} from 'react-native'
import Empty from './../layouts/Empty.js';
import HorizontalSeparator from './../layouts/HorizontalSeparator.js';
import Category from './components/Category.js';
import Layout from './Category-list-layout.js';


export default class CategoryList extends Component{

	keyExtractor = (item) => item.id.toString() //el id del componente lo vuelve el key de la lista
	renderEmpty =() => <Empty text = "No hay sugerencias"/> // si la lista es vacia
	itemSeparator =() => <HorizontalSeparator /> //separador de la lista
	
	renderItem= ({item}) => { //cargar los elementos en la lista de sugerencias
		return(
			<Category {...item} />
		)
	}

	render(){
		return(
			<Layout
				title="Categorias"
			>			
				<FlatList 
						horizontal
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