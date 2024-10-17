import {useState} from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import useTodoContext from '../hooks/use-todo-context'
import TodoEdit from './TodoEdit'

const TodoItem = (props) => {
  const {todo} = props
  const [showEdit, setShowEdit] = useState(false)
  const {deleteTodoById} = useTodoContext()

  const handleDelete = () => {
    deleteTodoById(todo.id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = () => {
    setShowEdit(false)
  }

  let content = (
    <div>
      <p className= "cardType" >{todo.type}</p>
      <h3>{todo.title}</h3>
      <p>means: {todo.translation}</p>
    </div>
  )
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }

  return (
    <div className="cardContainer">
      {content}
      <div className="buttonsContainer">
        <button className="editDeletebutton" onClick={handleEdit}><FaEdit/></button>
        <button className="editDeletebutton" onClick={handleDelete}><FaTrash/></button>
      </div>
    </div>
  )
}

export default TodoItem
