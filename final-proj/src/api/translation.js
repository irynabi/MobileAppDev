import axios from 'axios';
import {API_KEY} from '@env'
console.log(API_KEY)

const GOOGLE_TRANSLATE_API = 'https://translation.googleapis.com/language/translate/v2';
const GOOGLE_API_KEY = `${API_KEY}`;

const translateText = async (text, targetLang) => {
  try {
    const response = await axios.post(
      `${GOOGLE_TRANSLATE_API}`,
      {
        q: text,
        target: targetLang,
        format: 'text',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          key: GOOGLE_API_KEY, 
        },
      }
    );

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error in translateText:', error.response?.data || error.message);
    throw error;
  }
};

export default translateText;
