import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Colors } from '../constants'

export default class FullButton extends Component {

  render () {
    return (
      <TouchableOpacity
        style={[styles.button, this.props.styles]}
        onPress={this.props.onPress}
      >
        <Text style={[styles.buttonText, this.props.textStyle]}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    marginVertical: 20,
    height: 40,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.primaryColor,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.snow
  },
  image: {
    marginHorizontal: 10
  }
})
