import React, {useContext, useEffect} from 'react'
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import {Context} from '../context/DiaryContext'

const IndexScreen = ({navigation}) => {
  const {state, deleteDiaryPost, getDiaryPosts} = useContext(Context)

  useEffect(() => {
    getDiaryPosts()

    const listener = navigation.addListener('didFocus', () => {
      getDiaryPosts()
    })
    return () => {
      listener.remove()
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Cards</Text>
      <FlatList
        data={state}
        keyExtractor={(post) => post.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('View', {id: item.id})}
          >
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteDiaryPost(item.id)}>
                <MaterialIcons name="delete" size={24} color="#212121" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <MaterialIcons
          style={styles.addIcon}
          name="add"
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
    backgroundColor: '#F6F5FA',
    padding: 20,
  },
  headerText: {
    fontFamily: 'UrbanistBold',
    fontSize: 16,
    color: '#212121',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#EFF0A4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontFamily: 'Urbanist',
    fontSize: 18,
    color: '#212121',
  },
  addIcon: {
    marginRight: 10,
  },
});

export default IndexScreen
