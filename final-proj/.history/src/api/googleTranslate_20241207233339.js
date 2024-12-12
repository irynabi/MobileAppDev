import axios from 'axios';

const API_KEY = 'AIzaSyCNwhwPshtQ5DxPUPJ0fILGovmfYLGJtGY'; // Replace with your Google API key
const TRANSLATE_API_URL = 'https://translation.googleapis.com/language/translate/v2';

/**
 * Translate text using Google Translate API
 * @param {string} text - Text to translate
 * @param {string} targetLang - Target language (e.g., 'es', 'fr', 'zh')
 * @param {string} sourceLang - Source language (optional)
 * @returns {Promise<string>} - Translated text
 */


export const translateText = async (text, targetLang, sourceLang = 'en') => {
  try {
    const response = await axios.post(
      TRANSLATE_API_URL,
      {
        q: text,
        target: targetLang,
        source: sourceLang,
      },
      {
        params: { key: API_KEY },
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    throw error;
  }
};
