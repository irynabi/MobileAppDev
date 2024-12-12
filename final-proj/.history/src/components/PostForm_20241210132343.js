import React, {useState} from 'react'
import { translateText } from '../api/translation'; 
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'
import { Picker } from '@react-native-picker/picker'; 

const PostForm = ({onSubmit, inititalValues = {title: '', content: ''}}) => {
  const [title, setTitle] = useState(inititalValues.title)
  const [content, setContent] = useState(inititalValues.content)
  const [isLoading, setIsLoading] = useState(false);
  const [targetLang, setTargetLang] = useState('en');


  const handleSave = async () => {
    if (!title) return;

    setIsLoading(true);

    try {
      // Automatically translate the title to generate content
      const translatedContent = await translateText(title, targetLang);
      setContent(translatedContent);

      onSubmit(title, translatedContent);
    } catch (error) {
      console.error('Translation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View>
      <Text style={styles.label}>Phrase:</Text>
      <TextInput
        autoCapitalize="words"
        autoCorrect={false}
        style={styles.input}
        value={title}
        placeholder="Enter phrase"
        placeholderTextColor="#AAAAAA"
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.label}>Select Language:</Text>
      <Picker
        selectedValue={targetLang}
        style={styles.picker}
        onValueChange={(itemValue) => setTargetLang(itemValue)}>
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Spanish" value="es" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="German" value="de" />
        <Picker.Item label="Chinese" value="zh" />
      </Picker>

      <Text style={styles.label}>Definition:</Text>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        value={content}
        editable={false}
      />

      <Button
        style={styles.button}
        title={isLoading ? 'Saving...' : 'Save Card'}
        onPress={handleSave}
        disabled={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    margin: 10,
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#666',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  button: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#666',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
  }
})

export default PostForm
