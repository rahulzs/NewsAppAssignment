import React from 'react';
import { Button,ListView,StyleSheet,View} from 'react-native';
import NewsListCell from '../presentation/NewsListCell';

class NewsList extends React.Component {

  constructor(props){
    super(props);
    const ds= new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !==r2
    });
  
    this.state ={
      dataSource : ds.cloneWithRows(this.props.navigation.state.params.params.newsList) 
    };
    
  }

componentWillMount(){

}


    static navigationOptions = ({navigation}) => ({
      title: navigation.state.params.name,
    });

renderRow(news){

 return <NewsListCell news={news}/>;
}



    render() {
      const { goBack } = this.props.navigation;
      return (

        <View>
        <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        />

      
        <Button
        title=""
        onPress={() => goBack()}
        />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
  });

  export default NewsList;