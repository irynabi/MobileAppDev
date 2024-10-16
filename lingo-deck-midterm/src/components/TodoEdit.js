import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'

const TodoEdit = (props) => {
  const {todo, onSubmit} = props
  const [title, setTitle] = useState(todo.title)
  const [type, setType] = useState(todo.type); 
  const [translation, setTranslation] = useState(todo.translation); 
  const {editTodoById} = useTodoContext()

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleTypeChange = (event) => {
    setType(event.target.value); 
  };

  const handleTranslationChange = (event) => {
    setTranslation(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    editTodoById(todo.id, title, type, translation)
    onSubmit()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        onChange={handleChange} 
        value={title}
        placeholder={title}
        className="inputField" />
      <input 
        type="text" 
        onChange={handleTranslationChange} 
        value={translation}
        placeholder="Change translation"
        className="inputField" />      
      <select 
        value={type} 
        onChange={handleTypeChange} 
        className={`typeField ${type ? 'highlighted' : ''}`}>
        <option value="Greetings">Greetings</option>
        <option value="Questions">Questions</option>
        <option value="Food">Food</option>
        <option value="Weather">Weather</option>
        <option value="Food">Verbs</option>
        <option value="Weather">Adjectives</option>
      </select>
      <button className="editDeletebutton"> Update </button>
    </form>
  )
}

export default TodoEdit
