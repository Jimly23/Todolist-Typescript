import React, { useState } from "react"
import InputField from "./components/InputField"
import { Todo } from "./model"
import Todos from "./components/Todos";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

  return (
    <>
      <p className="text-4xl text-center py-10">Taskscript</p>
      <div className="input-field">
        <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
      </div>
      <Todos todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
