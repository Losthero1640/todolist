import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { list } from 'postcss';
/*map:The Map object holds key-value pairs and remembers 
the original insertion order of the keys*/
//with paranthesis it can call a function right away so use ()=>instead

function App() {
  /*insert is our current state and 
  setInsert is the function used to update our state*/
  const [insert,setInsert] = useState([]);
  const[newinsert, setNewinsert]=useState("");

  function input(event){
      setNewinsert(event.target.value);// retrieves the value of that element
  }
  function add(){
    ///... spread karna hota hai iska kaam 
    if(newinsert.trim() !==""){
       /* by convention of react we should name the pending state argument with the first letterof the state variable name*/
      setInsert(i=>[...i, newinsert])
      setNewinsert("")
    }
      
  }
  function remove(index){
//The filter() method creates a new array filled with elements that pass a test provided by a function.
//_ is used to show not so important variable  
//it will filter if the condition matches the index it will remove 
const update=insert.filter((_,i) => i !==index);
    setInsert(update)
}
  function up(index){

    if(index>0){
      const update=[...insert];
      [update[index],update[index-1]]=
      [update[index-1],update[index]];
      setInsert(update);
    }
}
  function down(index){
    if(index<insert.length-1){
      const update=[...insert];
      [update[index],update[index+1]]=
      [update[index+1],update[index]];
      setInsert(update);
    }

  }
  return (
    <div className="to-do-list">
    <h1>To-Do-List</h1>
      <div>
        <input type="text" placeholder='Enter your chore' 
        value={newinsert}
        onChange={input}/>
        <button className="add-button"
        onClick={add}>add</button>
      </div>
      
      <ol> 
        
        {insert.map((insert,index)=>
        <li key={index}>
          <span className='text'>{insert}</span>
          <button className='delete-button ' 
          onClick={()=> remove(index)}>delete</button>

          <button className='move button' 
          onClick={()=> up(index)}>up</button>

<button className='move button' 
          onClick={()=> down(index)}>down</button>

        </li>)}
      </ol>
      
    </div>
  )
}

export default App
