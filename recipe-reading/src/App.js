import React from 'react'
import RecipeCard from './RecipeCard'
import './global.css'

function App() {
  return (
    <>
      <div className="app-wrapper">
      <div className="app-header"> My Recipes </div>
      <RecipeCard />
      </div>
    </>
  )
}

export default App
