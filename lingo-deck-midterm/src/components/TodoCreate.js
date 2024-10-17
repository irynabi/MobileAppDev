import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'

const TodoCreate = () => {
  const {createTodo} = useTodoContext()


  // State for phrase or vocab
  const [title, setTitle] = useState('')

  // State for card type
  const [type, setType] = useState(''); 

  // State for translation 
  const [translation, setTranslation] = useState(''); 

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  // Update card type based on dropdown selection
  const handleTypeChange = (event) => {
    setType(event.target.value); 
  };

  // Update translation
  const handleTranslationChange = (event) => {
    setTranslation(event.target.value); 
  };


  const handleSubmit = (event) => {
    event.preventDefault()
    createTodo(title, type, translation)
    setTitle('')
    setType('Unknown type'); // DEFAULT status
    setTranslation(''); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4> Make a card to study </h4>
      <input 
        type="text" 
        onChange={handleChange} 
        value={title} 
        placeholder="Add a phrase or vocabulary..." 
        className="inputField"/>
      <input 
        type="text" 
        onChange={handleTranslationChange} 
        value={translation} 
        placeholder="Translation" 
        className="translationField"/>
      <select 
        value={type} 
        onChange={handleTypeChange} 
        //ternary for If the type is NOT an empty string, the dropdown is highlighted
        className={`typeField ${type ? 'highlighted' : ''}`}>
        <option value="" >Select a card type</option>
        <option value="Greetings">Greetings</option>
        <option value="Questions">Questions</option>
        <option value="Food">Food</option>
        <option value="Weather">Weather</option>
        <option value="Food">Verbs</option>
        <option value="Weather">Adjectives</option>
      </select>
      <button className="addCardButton">+</button>
    </form>
  )
}

export default TodoCreate
