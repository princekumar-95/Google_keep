import React, {useState}from "react";

const CreateNote = (props) => {

const[expand,setExpand]=useState(false);

const[note,setNote]=useState({
   title:'',
   content:''

});

const InputEvent=(event)=>{
   
   const  value=event.target.value;
   const  name=event.target.name;
  
   setNote((prevData)=>{
    console.log(note);
    if(name==='title'){
     return{
     title : value,
     content:prevData.content ,}}else if(name==='content'){
     return{
     title : prevData.title,
     content:value ,}  
}
})}

const addEvent=()=>{
  props.passNote(note);
  setNote({
    title: "",
    content: ""
  });
};
const expandIt=()=>{
setExpand(true);
}
const backtoNormal = () => {
  setExpand(false);
};

  return (<>
    <div className="main_note"  onDoubleClick={backtoNormal}>
     <form action="">
      {expand?
         <input type="text" 
        name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off" 
        />:null}
         <textarea  id="" cols="" rows="" 
        name="content" value={note.content} onChange={InputEvent} placeholder="Write a note.."
        onClick={expandIt}
       
        ></textarea>
     </form>
     {expand?
     <button onClick={addEvent}>+</button>:null}
    </div>
  </>);
};
export default CreateNote;
