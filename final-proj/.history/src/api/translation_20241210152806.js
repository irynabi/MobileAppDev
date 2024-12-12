import axios from 'axios';

const GOOGLE_TRANSLATE_API = 'https://translation.googleapis.com/language/translate/v2';
const GOOGLE_API_KEY = API_KEY; // Replace with your API key

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