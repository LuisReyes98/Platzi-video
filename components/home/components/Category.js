import React from 'react';
import { 
  View , 
  Text, 
  ImageBackground,
  StyleSheet
} from 'react-native';

export default function Category(props) {
  let genres = [];
  let genreText = props.genres.reduce((acum ,text) => acum + text ," ");
 
  return(
    <ImageBackground
      style = {styles.wrapper}
      source={{
        uri: props.background_image
      }}
    >
      <Text
        style = {styles.genre}
      >
        {props.genres[0]}
      </Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genre: {    
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',    
    textShadowColor: 'rgba(0,0,0,.75)', //IOS
    textShadowOffSet:{
      width: 2,
      height: 2,
    },
    textShadowRadius: 10, 
    elevation: 1, //android 
  }
})