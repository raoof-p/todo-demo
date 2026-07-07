import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar(){
    const navigate = useNavigate()
  return (
    <div className="flex justify-center gap-6 bg-blue-300 h-10">
        <div className="flex gap-4 mt-3">
           <p className="text-sm transition-all duration-200 hover:scale-125 hover:border-red-400 cursor-pointer" onClick={()=>{
              navigate('/')
         }}>Todo</p>

         <p className="text-sm transition-all duration-200 hover:scale-125 hover:border-red-400 cursor-pointer" onClick={()=>{
               navigate('/Posts')
         }}>Post</p>

       </div>
      </div>
  )
}
export default NavBar;