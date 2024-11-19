import React, { useState } from 'react'
import { CiTrash } from 'react-icons/ci';
import { FaCheck, FaPen } from 'react-icons/fa';
import { Todo } from '../model';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleIsDone = (id: number) => {
    setTodos(todos.map(item => item.id === id? {...item, isDone: true}:item))
  }

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault()
    setTodos(todos.map(item=>item.id === todo.id? {...item, todo: editTodo}:item))
    setEdit(false)
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(item => item.id !== id))
  }
  

  return (
    <form className='relative' onSubmit={handleEdit}>
      <div className="p-2 rounded-lg bg-yellow-500 w-[250px] flex items-center justify-between">
        {edit?
          <input type="text" value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} />
        : 
          <p className={`${todo.isDone&& 'line-through'}`}>{todo.todo}</p>
        }
        <div className='flex items-center gap-x-2'>
          <FaPen className='cursor-pointer' size={13} onClick={()=>setEdit(!edit)}/>
          <CiTrash className='cursor-pointer' onClick={()=>handleDelete(todo.id)}/>
          <FaCheck className='cursor-pointer' size={15} onClick={()=>handleIsDone(todo.id)}/>
        </div>
      </div>
    </form>
  )
}

export default SingleTodo