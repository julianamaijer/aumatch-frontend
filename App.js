import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import TabNavigator from './screens/TabNavigator';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
	Login: {
	  screen: LoginScreen
	},
	Register: {
	  screen: RegisterScreen
	},
  	Home : {
	  screen: TabNavigator
	}
  },{
	initialRouteName: "Login"
  });

const AppContainer = createAppContainer(AppNavigator);
