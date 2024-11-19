import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className="task-list flex items-center justify-center flex-wrap gap-2 p-5 max-w-[600px] mx-auto">
      {todos.map((item, index)=> (
        <SingleTodo key={index} todo={item} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  )
}

export default Todos