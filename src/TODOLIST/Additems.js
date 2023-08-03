import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const Additems = ({newitem,setnewitem,handlesubmit}) => {

 const inputuseref = useRef()

  return (
    <form className='addform' onSubmit={handlesubmit}>
        {/* <label htmlFor="additem"> ADD ITEM </label> */}
        <input
        autoFocus
        ref={inputuseref}
         type="text" 
         id='additem'
         placeholder='ADDITEM'
         required
         value={newitem}
         onChange={(e)=>setnewitem(e.target.value)}
        />


        <button
         type='submit'
         onClick={()=>inputuseref.current.focus()}
        >
           <FaPlus
            
           />
         </button>
    </form> 

  )
}

export default Additems