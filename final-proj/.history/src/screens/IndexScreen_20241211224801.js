import React, {useContext, useEffect, useState} from 'react'
import {StyleSheet, Text, View, SectionList, TouchableOpacity} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import {Context} from '../context/DiaryContext'

const IndexScreen = ({navigation}) => {
  const {state, deleteDiaryPost, getDiaryPosts} = useContext(Context)
  const [groupedPosts, setGroupedPosts] = useState([])


  // Fetch posts only on component mount or screen focus
  useEffect(() => {
    const fetchPosts = async () => {
      console.log('Fetching posts from the server...');
      await getDiaryPosts();
    };
  
    fetchPosts(); // Initial fetch on mount
  
    const focusListener = navigation.addListener('focus', fetchPosts); // Fetch on screen focus
  
    // Cleanup: Remove the listener
    return () => {
      focusListener.remove(); 
    };
  }, []); // Run only on mount/unmount
  
  
  useEffect(() => {
    console.log('Grouping posts...');
    setGroupedPosts(groupPostsByLanguage(state));
  }, [state]); 
  
  /*
  useEffect(() => {
    getDiaryPosts()

    setGroupedPosts(groupPostsByLanguage(state))

    const listener = navigation.addListener('didFocus', () => {
      getDiaryPosts()
    })
    return () => {
      listener.remove()
    }
  }, [state])

  const groupPostsByLanguage = (posts) => {
    // Group posts by targetLang (language)
    const grouped = posts.reduce((groups, post) => {
      const language = post.targetLang || 'Unknown'  // Default to 'Unknown' if no language
      if (!groups[language]) {
        groups[language] = []
      }
      groups[language].push(post)
      return groups
    }, {})

      // Convert grouped object to an array of sections
      return Object.keys(grouped).map(language => ({
        title: language,
        data: grouped[language]
      }))
    }
  */

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Your Cards</Text>
        <SectionList
          style={styles.section}
          sections={groupedPosts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('View', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.content}</Text>
                <TouchableOpacity onPress={() => deleteDiaryPost(item.id)}>
                  <MaterialIcons name="delete" size={24} color="#212121" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
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
    fontFamily: 'Urbanist_700Bold',
    fontSize: 24,
    color: '#212121',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    backgroundColor: '#EFEFEF',
    color: '#212121',
    marginVertical: 15,
    padding: 5,
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
    fontFamily: 'Urbanist_700Bold',
    fontSize: 18,
    color: '#212121',
  },
  addIcon: {
    marginRight: 10,
    color: '#212121'
  },

});

export default IndexScreen
