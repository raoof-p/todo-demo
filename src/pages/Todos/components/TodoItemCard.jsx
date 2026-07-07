import React, { useState } from 'react'

export const TodoItemCard = ({
    todo
}) => {
    const [isChecked, setIsChecked] = useState(todo.completed)
  return (
    <div className='flex p-4 bg-lime-200 mt-5 rounded-2xl border'>
           <p className='text-md font-bold'>{todo.title}</p>
           <input type="checkbox" checked={isChecked}  
           onClick={()=>{
            setIsChecked(!isChecked)
           }}/>
        </div>
  )
}
