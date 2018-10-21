import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Input, FullButton } from '../../components'

// Styles
import styles from './LoginStyle'

export default class LoginScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.cicleView}>
          <Text style={styles.topText}>{'Login'}</Text>
        </View>

        {/* inputs Fields  */}
        <Input placeholder={'user name'} />
        <Input placeholder={'password'} secureTextEntry />

        {/* Login Button  */}
        <FullButton
          styles={styles.loginButton}
          text={'Login Now'}
          onPress={() => this.props.navigation.navigate('Main')}
        />

        {/* Register Button */}
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            {'OR REGISTER'}
          </Text>
          <FullButton
            styles={styles.registerButton}
            text={'Register'}
            onPress={() => this.props.navigation.navigate('Register')}
          />
        </View>
      </View>
    )
  }
}
