import styles from './index.css'

import {useEffect} from 'react'
import useTodoContext from './hooks/use-todo-context'

import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

const App = () => {
  // believe it or not,fetchTodos is the the only item we need from context in App
  const {fetchTodos} = useTodoContext()
  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <div className="appContainer">
      <div className="createForm">
        <h1>LingoDeck</h1>
        <TodoCreate />
      </div>
      <TodoList />
    </div>
  );
}

export default App