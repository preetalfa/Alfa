import React from 'react'
import { Warehouse } from 'lucide-react';

const Nav = () => {
  return (
    <div className=' ml-5 font-bold text-xl flex'>
         
        <h1 className='flex gap-3 text-gray-400'>  <Warehouse /> <span className="text-blue-700 underline"> Office   </span>     
        
        > Candidate Detail</h1>

    </div>
  )
}

export default Nav