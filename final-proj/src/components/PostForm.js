import React, {useState} from 'react'
import translateText from '../api/translation'; // Use default import
import {Button, StyleSheet, Text, TextInput, View, ActivityIndicator} from 'react-native'
import { Picker } from '@react-native-picker/picker'; 

const PostForm = ({onSubmit, inititalValues = {title: '', content: ''}}) => {
  const [title, setTitle] = useState(inititalValues.title)
  const [content, setContent] = useState(inititalValues.content)
  const [isLoading, setIsLoading] = useState(false);
  const [targetLang, setTargetLang] = useState('en');

  const languageMap = {
    en: "English ",
    es: "Spanish",
    fr: "French",
    de: "German",
    zh: "Chinese",
  };

  const handleSave = async () => {
    if (!title) return;
  
    setIsLoading(true);
  
    try {
      const translatedContent = await translateText(title, targetLang);
      setContent(translatedContent); 
      const languageName = languageMap[targetLang]; 
      onSubmit(title, translatedContent, languageName); 
    } catch (error) {
      console.error('Translation error:', error.response?.data || error.message);
    } finally {
      setIsLoading(false); 
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Phrase:</Text>
      <TextInput
        autoCapitalize="words"
        autoCorrect={false}
        style={styles.input}
        value={title}
        placeholder="Enter phrase"
        placeholderTextColor="#1D5E84"
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.label}>Select Language:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={targetLang}
          style={styles.picker}
          onValueChange={(itemLabel) => setTargetLang(itemLabel)}>
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Spanish" value="es" />
          <Picker.Item label="French" value="fr" />
          <Picker.Item label="German" value="de" />
          <Picker.Item label="Chinese" value="zh" />
        </Picker>
      </View>

      <Text style={styles.label}>Definition:</Text>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        value={content}
        editable={false}
        placeholder="Definition will appear here"
        placeholderTextColor="#1D5E84"
      />

      <View style={styles.buttonContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#212121" />
        ) : (
          <Button
            color="#EFEFEF"
            title="Save Card"
            style={styles.label}
            onPress={handleSave}
            disabled={isLoading}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F5FA',
    padding: 20,
  },
  label: {
    fontSize: 20,
    fontFamily: 'Urbanist_700Bold',
    color: '#212121',
    marginBottom: 8,
  },
  input: {
    fontSize: 18,
    fontFamily: 'Urbanist_400Regular',
    color: '#212121',
    borderWidth: 1,
    borderColor: '#1D5E84',
    backgroundColor: '#EFF0A4',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 15,
  },
  definition: {
    backgroundColor: '#EFF0A4',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#1D5E84',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
    backgroundColor: '#1D5E84',
  },
  picker: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 18,
    color: '#212121',
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#1D5E84',
    borderRadius: 10,
    overflow: 'hidden',
    maxWidth: 200,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

export default PostForm
