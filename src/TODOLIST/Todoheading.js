import React from 'react'

const Todoheading = (props) => {
  return (
    <div>
        <header className='header'>
            {props.title}
          
        </header>
    </div>
  )
}


Todoheading.defaultProps = {
    title : "TO DO "
}

export default Todoheading