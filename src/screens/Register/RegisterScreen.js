// import liraries
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './RegisterStyle'
import { Input, FullButton } from '../../components'

// create a component
class RegisterScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.cicleView}>
          <Text style={styles.topText}>{'Register'}</Text>
        </View>

        {/* inputs Fields  */}
        <Input placeholder={'name'} />
        <Input placeholder={'email'} />
        <Input placeholder={'password'} secureTextEntry />


        {/* Register Button */}
        <View style={styles.section}>
          <FullButton
            styles={styles.registerButton}
            text={'Register'}
            onPress={() => this.props.navigation.navigate('Main')}
          />
        </View>
      </View>
    )
  }
}

// make this component available to the app
export default RegisterScreen
