import React from 'react'

function Button({icon,text}) {
  return (
    <button className="flex items-center gap-2 px-8 py-4 bg-black text-gray-50 text-2xl font-bold  rounded-full">
      {text} 
      {icon}
     
    </button>
  )
}

export default Button