
import { useState} from 'react'
import Todoheading from "./Todoheading";
import Content from "./Content";
import Footertodo from './Footertodo';
import Additems from './Additems';





function Todoapp()
{
    const [items,setitems] = useState (  JSON.parse(localStorage.getItem('TODOLIST'))||[])
                            //  empty state bcoz nama edhuvum type pannala
 const [newitem,setnewitem] = useState('')

// useEffect(()=>
// {
//   JSON.parse(localStorage.getItem('TODOLIST'))
// },[])


  const additem = (item)=>{
    const id = items.length ? items[items.length-1].id+1:1;
     const  addnewitem = {id,checked:false,item}
     const listitem = [...items,addnewitem]
     setitems(listitem)
     localStorage.setItem("TODOLIST",JSON.stringify(listitem))


  }

  
// In React, the "useEffect" is a hook that allows you to perform side effects (e.g., data fetching, subscriptions) in functional components. It runs after rendering and on every update by default.

// use ffect is normally used for rendering API
//  data va oru vati than load pannum
// useEffect(()=>
// {
//    JSON.parse(localStorage.getItem('TODOLIST'))
// },[])

 const handlecheckbox =(id)=>
 {
    const newarrayitems = items.map((list)=>
    
    list.id === id ? {...list,checked : !list.checked} :
    list)

    setitems(newarrayitems)
    

// handlecheckbox nu funtion create panniko adhula id vangiko
// adhukulla mela irukura items map panni thiruba vangu
// adhuku list nu onna pass pannu
// list la irukra id um function la pass panniruka id um
//  onna nu check pannu illaina
// ...list taa vachuko adhula 
//  andha items la array object kulla poi checked nu
// irukum la adha not checked mathi vitru
// thirumba list ta vachuko
localStorage.setItem("TODOLIST",JSON.stringify(newarrayitems))

     
 }   



 const handledelete = (id) =>
 {
    const deleteitems = items.filter((list)=>
      list.id !==id )
      setitems(deleteitems)
      localStorage.setItem("TODOLIST",JSON.stringify(deleteitems))
 }



 const handlesubmit = (e)=>
 {
    e.preventDefault();
    console.log("submitted");
    if(!newitem) return ;
    additem(newitem)
    setnewitem('')
 }



    return(
          <div>
          <Todoheading  title ="TO DO LIST"/> 
          <Additems
          
          newitem ={newitem}
          setnewitem ={setnewitem}
          handlesubmit ={handlesubmit}
          
          />
          <Content
           items = {items}
           handlecheckbox ={handlecheckbox}
           handledelete ={handledelete}

          />

          <Footertodo
            length = {items.length}
             />

        
          </div>
    );

}
export default Todoapp