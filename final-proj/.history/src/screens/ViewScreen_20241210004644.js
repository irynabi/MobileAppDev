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
    <View style={styles.container}>
      <Text style={styles.title}>
        {post.title} 
      </Text>
      <Text style={styles.content}>means {post.content}</Text>
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
  container: {
    margin: 5,
  },
  title: {
    fontWeight: 'bold', // Make the title bold
    fontSize: 18, // You can adjust the size
  },
  content: {
    fontWeight: 'normal', // Content is not bold
    fontSize: 16, // Adjust content size
  },
  editIcon: {
    marginRight: 10,
  },
});

export default ViewScreen
