import React from 'react'

const Content = () => {
  
    function namechange()
    {
      const names = ["EARN","GIVE","GROW"]
      const int = Math.floor(Math.random()*3)
      return names[int]
    }
      
    // const handlename = () =>
    // {
    //    console.log("hi brothers");
    // } 
    
    //  lets pass a parameter

    const handlename2 =(name)=>
    {
      console.log(`hi my name is ${name}`)
    }


    const identifyevent =(e)=>
    {
         console.log(e.target.innerHTML);
    }

  return (
    <><div> LEARN REACT TO {namechange()} MONEY </div><div>
      {/* ()=> this is anoynmous function where u can specify to mention process click event after clicked */}
      <button onClick={()=>handlename2("vijay")}>button</button>

      <button onClick={(e)=>identifyevent(e)}> TO IDENTIFY THE EVENT</button>
    </div></>
  )
}

export default Content