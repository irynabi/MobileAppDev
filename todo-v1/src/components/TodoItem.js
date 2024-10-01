import React from 'react'
import {useState} from 'react'
import TodoEdit from './TodoEdit'

const TodoItem = (props) => {
    const {todo, onDelete} = props
    const [showEdit, setShowEdit] = useState(false)
    const handleDelete = () => {
        onDelete(todo.id)
    }
    const handleEdit = () => {
        setShowEdit(!showEdit)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setShowEdit(false)
    }

    let content = <h3>{todo.title}</h3>
    if (showEdit){
        content = <TodoEdit todo={todo} onEdit={onEdit} onSubmit={handleSubmit}/>
    }
    return (
        <div>
            {content}
            <button onClick = {handleEdit}> Edit </button>
            <button onClick = {handleDelete}> Delete </button>
        </div>
    )
}

export default TodoItem;