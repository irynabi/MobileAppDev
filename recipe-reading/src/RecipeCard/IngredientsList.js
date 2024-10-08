import React from 'react'
import './styles.css'
export default function IngredientsList(props) {
  const {ingredients} = props

  return (
    <div className="ingredients-list">
      <h3 className="list-title">Ingredients</h3>
      <ul>
        {ingredients.map((i, index) => (
          <li key={index} className="list-item">
          <span className="measure">{i.measure}</span>
          <span>{i.item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
