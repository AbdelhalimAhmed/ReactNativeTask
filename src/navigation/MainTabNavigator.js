import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import TabBarIcon from 'react-native-vector-icons/FontAwesome'
import ProfileScreen from '../screens/Profile'
import { Colors } from '../constants'


const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
})

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      color={focused ? Colors.primaryColor : Colors.tabIconDefault}
      name={`user-circle${focused ? '-o' : ''}`}
      size={22}
    />
  )
}

const ResultStack = createStackNavigator({
  Result: ProfileScreen
})

ResultStack.navigationOptions = {
  tabBarLabel: 'Result',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      color={focused ? Colors.primaryColor : Colors.tabIconDefault}
      name={"certificate"}
      size={22}
    />
  )
}

export default createBottomTabNavigator(
  {
    ProfileStack,
    ResultStack
  },
  {
    initialRouteName: 'ResultStack',
    tabBarOptions: {
      pressColor: 'gray',
      style: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        shadowColor: '#E4E4F1',
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10
      },
      activeTintColor: Colors.primaryColor,
      inactiveTintColor: Colors.tabIconDefault,
      labelStyle: {
        fontSize: 12
      }
    }
  }
)
