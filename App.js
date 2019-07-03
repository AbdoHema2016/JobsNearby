import React from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import {createBottomTabNavigator,createStackNavigator,createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux'
import store from './store'

import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen'
import DeckScreen from './screens/DeckScreen'
import SettingsScreen from './screens/SettingsScreen'
import ReviewScreen from './screens/ReviewScreen'
import {Button} from 'react-native-elements'



const reviewStack = createStackNavigator({
  review: {screen:ReviewScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Review Jobs',
      headerStyle:{
        
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
      headerRight: (
        <Button 
        title="Settings"
        type="clear"
        onPress={() => navigation.navigate('settings')}
        
         />

      )
    }),

    


  },
  settings: SettingsScreen,
});


const TabNavigator = createBottomTabNavigator({
  welcome: WelcomeScreen,
  auth: AuthScreen,
  main:createBottomTabNavigator({
    map:MapScreen,
    deck:DeckScreen,
    review:reviewStack
  })
},{
  defaultNavigationOptions: {
    tabBarVisible: false,
  },
    
    lazy:true
});
const AppContainer = createAppContainer(TabNavigator);
class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
      )
  }
}
export default App;



