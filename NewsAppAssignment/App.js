import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomePage from '../NewsAppAssignment/src/components/home/container/HomePage';
import newslist from '../NewsAppAssignment/src/components/newslist/container/NewsList';
import {Provider} from 'react-redux';
import configureStore from '../NewsAppAssignment/src/store/configureStore';
import NewsListCell from '../NewsAppAssignment/src/components/newslist/presentation/NewsListCell'

const store = configureStore();

const Navigator = StackNavigator({
  HomePage: {screen: HomePage},
  newslist: {screen: newslist},
});

export default function App() {
  return (
      <Provider store={store}>
          <Navigator />
      </Provider>
  );
}

// export default App;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>ORahul!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your hhjkjhkjkghkgghkghgh to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
