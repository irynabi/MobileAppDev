import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'
import PostForm from '../components/PostForm'
import {Context} from '../context/DiaryContext'

const EditScreen = ({navigation}) => {
  const id = navigation.getParam('id')
  const {state, editDiaryPost} = useContext(Context)
  const post = state.find(
    (diaryPost) => diaryPost.id === navigation.getParam('id')
  )

  return (
    <PostForm
      inititalValues={{title: post.title, content: post.content, targetLang: post.targetLang}}
      onSubmit={(title, content, targetLang) => {
        editDiaryPost(id, title, content, targetLang, () =>
          navigation.navigate('View', {id: id})
        )
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default EditScreen
