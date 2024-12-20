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
        <Text style={styles.languageText}>{post.targetLang}</Text>
        <Text style={styles.title}>{post.title}</Text> 
        <Text style={styles.content}>means {post.content}</Text>
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
          color="#1D5E84',"
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
    backgroundColor: '#D8DFE9',
  },
  flashcard: {
    width: '90%',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  languageText: {
    fontFamily: 'Urbanist_700Bold',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D5E84',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Urbanist_700Bold',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#212121',
    textAlign: 'center',
    marginBottom: 8,
  },
  content: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 18,
    color: '#212121',
    textAlign: 'center',
    marginVertical: 10,
  },
  editIcon: {
    marginRight: 10,
    color: '#1D5E84',
  },
})

export default ViewScreen
