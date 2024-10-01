import React from 'react'
import {useState} from 'react'

const TodoEdit = (props) => {
    const {todo, onEdit} = props
    const [title, setTitle] = useState(todo.title)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('new title is: ', title)
        onEdit(todo.id, title)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label> Title: </label>
            <input onChange= {handleChange} value={title}/>
            <button>Update</button>
        </form>
    )
}

export default TodoEdit