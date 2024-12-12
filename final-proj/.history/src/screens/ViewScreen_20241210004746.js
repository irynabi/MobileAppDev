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
    margin: 10,
    backgroundColor: '#EFF0A4',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    fontWeight: 'normal',
    fontSize: 16, 
  },
  editIcon: {
    marginRight: 10,
  },
});

export default ViewScreen
