/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView
  } from 'react-native';

import Home from './components/home/Home.js';
import Header from './components/layouts/Header.js';
import SuggestionList from './components/home/Suggestion-list.js';
import CategoryList from './components/home/Category-list.js';

import Close from './components/movie/close.js';

import API from './utils/api.js';

// type Props = {};
export default class App extends Component {
  
  state = {
    suggestionList: [],
    categoryList: [],
    loading: false 

  }
  
  async componentDidMount(){
    //change the state to loading
    this.setState({
      suggestionList: [],
      categoryList: [],
      loading: true       
    })

    const movies = await API.getSuggestion(10)//requesting movies
    const categories = await API.getMovies()//requesting movies
    
    console.log(movies)
    console.log(categories)

    this.setState({
      suggestionList: movies,
      categoryList: categories,
      loading: false       
    })
  }
  closeVideo= () => {
  
  }
  render() {
    const { suggestionList,categoryList , loading } = this.state
    return (
          <Home>
            <Header>              
              <Close
                onPress={this.closeVideo}
              />
                
              
            </Header>
            {/*
              Así añadimos un cargador cuando este pidiendo los datos

            
            */}    
            {
              loading ?
              <View style={styles.loader}>
                <ActivityIndicator size='large' color="#58B88E" />
              </View> 
              
              :
              <View style={styles.container}>
                <CategoryList style={styles.container_horizontal} list={categoryList} />
                <SuggestionList style={styles.container_vertical}  list={suggestionList} />                
              </View>

            }        
            
            
            

          </Home>
      );
  }
}


const styles = StyleSheet.create({
  loader:{
    flex: 1,
    justifyContent: 'center', 
  }, 
  container:{
    flex: 1,
  },
  container_horizontal:{
    flex: 1,    
  },
  container_vertical:{
    flex: 2,    
  }

})