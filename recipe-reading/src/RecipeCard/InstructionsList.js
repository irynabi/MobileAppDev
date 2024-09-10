import React from 'react'
import './styles.css'
export default function InstructionsList(props) {
  const {instructions} = props
  return (
    <div className="instructions-list">
      <h3 className="list-title">Instructions</h3>
      <ol>
        {instructions.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ol>
    </div>
  )
}
