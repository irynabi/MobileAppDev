import React from 'react'
import './styles.css'

export default function RecipeInfo(props) {
  const {title, description} = props
  return (
    <div className="recipe-info">
      <h2 className="recipe-title">{title}</h2>
      <p>{description}</p>
    </div>
  )
}
