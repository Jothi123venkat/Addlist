import React from 'react'
import { useState } from 'react'

const Hookusestate = () => {


  const[name,setname] = useState("earn")
   const handlenamechange = () =>
   {
     const name = ["earn","grow","give"]
     const int = Math.floor(Math.random()*3)
     setname(name[int])
   }

  const [count,setcount] = useState(10)
//  const [initialnumber, setcount to set the value ]

 function increment ()
 {
    setcount(count+1)
 }

 function decrement()
 {
    setcount(count-1)
 }
 

  return (
    <div>
        <p> lets {name}  money</p>
        <button onClick={handlenamechange}> usestatebutton</button>

        {/* the task is + increase and - to decrease */}
        <button onClick={increment} > + </button>
        <span>{count}</span>
        <button onClick={decrement}> - </button>

    </div>
  )
}

export default Hookusestate


//  hook states does not work in class and condition statements
