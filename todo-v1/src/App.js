import {useState} from 'react'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'

const App = () => {
    const [todos, setTodos] = useState([])

    const createTodo = (title) => {
        const updatedTodos = [
          ...todos, 
          {id: Math.round(Math.random()*99999), title}
        ]
        setTodos(updatedTodos)
    }

    const deleteTodoByID = (id) => {
      //filter creates a copy of the array we want to filter
      const updatedTodos = todos.filter((todo)=>{
        // return truthy
        return todo.id !== id 
      })
      setTodos(updatedTodos)
    }

    const editTodoById = (id, newTitle) => {
      //updating by id
      const updatedTodos = todos.map((todo)=> {
        if (todo.id === id){
          return {...todo, title: newTitle}
        }
        //otherwise, return untouched todo
        return todo
      })
      //set state, and pass back down
      setTodos(updatedTodos)
    }

    return (
      <div>
        {todos.length}
        <TodoCreate onCreate={createTodo}/>
        <TodoList todos={todos} onDelete={deleteTodoByID} onEdit={editTodoById}/>
      </div>
    )
  ;
}

export default App;
