import React from 'react'
import { FaTrash } from 'react-icons/fa';

// import Itemlist from './Itemlist';
// import { FaTrash } from 'react-icons/fa';

const Content = ({items,setitems,handledelete,handlecheckbox}) => {


  return (
     
          <div>
   
        {items.map((list)=>(
// list key
              <li className='list' key={list.id}>
                <input
              
                    type="checkbox"
                    checked = {list.checked}
                    onChange={()=>handlecheckbox(list.id)}
                    />
                   <label>{list.item}</label>
                  < FaTrash className='trash'
                  onClick={()=>handledelete(list.id)}
                     role='button'
                     tabIndex="0"
                  />
              </li>
        ))}
      </div>

  )
}

export default Content