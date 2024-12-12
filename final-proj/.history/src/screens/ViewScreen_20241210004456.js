import React, {useContext} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import {Context} from '../context/DiaryContext'

const ViewScreen = ({navigation}) => {
  const id = navigation.getParam('id')
  const {state} = useContext(Context)

  const post = state.find(
    (diaryPost) => diaryPost.id === navigation.getParam('id')
  )

  return (
    <View>
      <Text>
        {post.title} 
      </Text>
      <Text>means {post.content}</Text>
    </View>
  )
}

ViewScreen.navigationOptions = ({navigation}) => {
  const id = navigation.getParam('id')
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: id})}>
        <FontAwesome
          style={styles.editIcon}
          name="pencil"
          size={30}
          color="#666"
        />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold', // Make the title bold
    fontSize: 18, // You can adjust the size
  },
  content: {
    fontWeight: 'normal', // Content is not bold
    fontSize: 16, // Adjust content size
    color: '#555', // Optional: Light color for content text
  },
  editIcon: {
    marginRight: 10,
  },

export default ViewScreen
