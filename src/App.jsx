import React,{useState} from "react";
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App=()=>{
 
 const [addItem,setAdditem]=useState([]);
  
 
 const addNote=(note)=>{
  
  console.log(note);
   
   setAdditem((prevData)=>{
     return[...prevData,note]
   })
  };

  const onDelete=(id)=>{
     setAdditem((olddata)=>
      olddata.filter((curdata,indx)=>{
       return indx!==id;
        
     }))
  }
return( 
  <>
      <Header />
      <CreateNote passNote={addNote}/>
      

   {addItem.map((val,index)=>{
       return( <Note
       key={index}
       id={index}
       title={val.title}
       content={val.content}
       deleteItem={onDelete}
       />)
   })}

      <Footer />
      
   </> 
   
  );
};
export default App;