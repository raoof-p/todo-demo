import React, { useEffect, useState } from 'react'
import { TodoItemCard } from './components/TodoItemCard'
import { data } from 'react-router-dom'
import axios from 'axios'

export const Todos = () => {
  const [TodoList, setTodoList] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
const getTodoData = async () =>{
   try {
     
      const response = await axios.get('https://json-placeholder.mock.beeceptor.com/todos')
      setTodoList(response.data )

   } catch (error) {
    setIsError(true)
   }finally{
    setIsLoading(false)
   }
}
     getTodoData()
  },[])

  if (isError) {
    return <div>Somthing went wrong</div>
  }
  if (isLoading) {
    return <div>Loading.....</div>
  }

  return (
    <div>
      {TodoList.map((todo) => (
        <TodoItemCard key={todo.id} todo={todo} />
      ))}
    </div>
  )
}