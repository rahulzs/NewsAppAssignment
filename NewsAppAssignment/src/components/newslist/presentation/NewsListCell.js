import { Button,TextInput,View, Text,Image,StyleSheet} from 'react-native';
import React, {Component} from 'react';


const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 80
  }
});
class NewsListCell extends React.Component {

      render(){
        return(
        <View>
          <Text>{this.props.news.author}</Text>
          <Text>{this.props.news.title}</Text>
          <Text>{this.props.news.description}</Text>
          <Text>{this.props.news.url}</Text>
          <Image
          style={styles.stretch}
          source={{uri:this.props.news.urlToImage }}
        />
        <Text>{this.props.news.publishedAt}</Text>

          </View>

        );
      }
  }

         
  export default NewsListCell;