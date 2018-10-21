//import liraries
import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './ProfileStyle'
import { FullButton } from '../../components'

// create a component
class ProfileScreen extends Component {
  render() {
    // spread all the props
    const { getProfile, profile, loading } = this.props
    return (
      <View style={styles.container}>
        <FullButton text={'Fetch my Profile'} onPress={getProfile}/>
        {loading ? 
        <ActivityIndicator/>
        : 
        <Text>{profile}</Text>
        }
      </View>
    );
  }
}


//make this component available to the app
export default ProfileScreen;
