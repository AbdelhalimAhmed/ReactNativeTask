import React from 'react'
import { createStackNavigator } from 'react-navigation'

import LoginScreen from '../screens/Login'
import RegisterScreen from '../screens/Register'
import { Colors } from '../constants'
import Icon from 'react-native-vector-icons/Ionicons'

const headerOption = (params, navigation) => ({
  title: params,
  headerStyle: {
    backgroundColor: Colors.primaryColor
  },
  headerTintColor: '#fff'
})

export default createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: ({ navigation }) =>
        headerOption('Register', navigation)
    }
  },
  {
    initialRouteName: 'Login'
  }
)
