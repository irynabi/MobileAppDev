import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const TutorialScreen = () => {
  return (
    <View>
      <Text style={style.bluetext}>TutorialScreen</Text>
    </View>
  )
}

const style = StyleSheet.create({
    bluetext: {
      color: '#006fff',
      fontSize: 36,
    },
  });

export default TutorialScreen