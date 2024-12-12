import React from 'react'
import { useFonts, Urbanist_400Regular, Urbanist_700Bold } from '@expo-google-fonts/urbanist';
import AppLoading from 'expo-app-loading';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import IndexScreen from './src/screens/IndexScreen'
import ViewScreen from './src/screens/ViewScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'
// renaming a generic import to something more specific
import {Provider as DiaryProvider} from './src/context/DiaryContext'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    View: ViewScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      // we will customize titles per screen later on!
      title: 'LingoDeck',
      backgroundColor: '#EFF0A4',
      headerTitleStyle: {
        fontFamily: 'Urbanist_700Bold', // Header title font
        color: '#212121', // Header text color
      },
    },
  }
)

const App = createAppContainer(navigator)
export default () => {
  return (
    <DiaryProvider>
      <App />
    </DiaryProvider>
  )
}
