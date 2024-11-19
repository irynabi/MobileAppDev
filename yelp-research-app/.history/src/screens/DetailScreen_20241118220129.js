import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, FlatList, Image} from 'react-native'

import yelp from '../api/yelp'

const DetailScreen = (props) => {
  const {navigation} = props
  const id = navigation.getParam('id')

  const [result, setResult] = useState(null)

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`)
      setResult(response.data)
    } catch (err) {
      console.log('ERROR', err)
    }
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})
