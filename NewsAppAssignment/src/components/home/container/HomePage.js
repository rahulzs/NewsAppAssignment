import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import { Button,TextInput,View, Text,ActivityIndicator,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../../../actions/homeActions';

class HomePage extends React.Component {
  state = { animating: true }
  
     closeActivityIndicator = () => setTimeout(() => this.setState({ 
        animating: false }), 6000)
  
     componentDidMount = () => this.closeActivityIndicator()

  constructor (props, context){
    super(props,context);
    this.state = {
      searchWord: ''
    };

    this.onSearch = this.onSearch.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  onSearch() {
    this.props.actions.loadNews(this.state.searchWord);
    // browserHistory.push('/movies');
  }

  updateInputValue(event) {
    this.setState({
      searchWord: event.target.value
    });
  }

    static navigationOptions = {
      title: 'HomeScreen',
    };
    render() {
      const { navigate } = this.props.navigation;
      const animating = this.state.animating;
      return (
       <View>
            
        
         
        {// key:"NewsList" Value:"this.props.NewsList"
           (this.props.news.newsList.length > 0? navigate('newslist', { name: 'NewsList', params: {
                newsList: this.props.news.newsList
            } }) : console.log("error"))}
        <TextInput 
        style={{height: 40,margin:100, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(searchWord) => this.setState({searchWord})}
        value={this.state.searchWord}
    
      />
      <Button
           title="Search"
           onPress={this.onSearch}
          // {/* {() =>  */}
           //console.log(this.state.text)
            //navigate('newslist', { name: 'NewsList' })
          // {/* } */}
         />

         {/* <ActivityIndicator
               animating = {animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/> */}
      </View>
    
      );
    }
  }
  HomePage.propTypes = {
    news: PropTypes.object
    // actions: PropTypes.object.isRequired
  };
  

  const styles = StyleSheet.create ({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 70
    },
    activityIndicator: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       height: 80
    }
 })



  //to subscribe to store updates
  function mapStateToProps(state, ownProps) {
    return {
      news: state.homeReducer
    };
  }
         

//to bind action creators
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  };
}



//Connecting a React component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
