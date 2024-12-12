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
      <View style={styles.flashcard}>
        <Text style={styles.title}>{post.title}</Text> {/* The phrase */}
        <Text style={styles.content}>means</Text>
        <Text style={styles.definition}>{post.content}</Text> {/* The translated content */}
      </View>
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
          color="#212121"
        />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F5FA',
  },
  flashcard: {
    width: '90%',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CFDECB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // For Android shadow
  },
  languageText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A90E2',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#212121',
    textAlign: 'center',
    marginBottom: 8,
  },
  content: {
    fontSize: 18,
    color: '#212121',
    textAlign: 'center',
    marginVertical: 10,
  },
  definition: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#212121',
    textAlign: 'center',
  },
  editIcon: {
    marginRight: 10,
  },
})

export default ViewScreen
