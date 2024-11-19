import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native'

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

  return (
    <View>
      <Text>Detail Screen</Text>
      <Text>ID: {id}</Text>
      <Text>{result?.name}</Text>
      <Text>{result && result.name}</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
})
