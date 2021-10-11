import React,{useState} from 'react';
import './App.css';

const iniList = [1,2,3,4,5,6,7];

function App() {
  const [list,setList] = useState(iniList);
  const [draggedItem,setDraggedItem] = useState(null)


  function onDragStartHandler(e,idx)
  {
   setDraggedItem(list[idx])
   e.dataTransfer.effectAllowed = "move";
   e.dataTransfer.setData('text/html',e.target.parentNode);
   e.dataTransfer.setDragImage(e.target.parentNode,20,20);
  }

  function onDragOverhandler(index)
  {
    const dragOverItem = list[index];

    if(dragOverItem === draggedItem)
    {
       return;
    }
    
    const items = list.filter(item => item !== draggedItem);

    items.splice(index,0,draggedItem)
    setList(items)
  }

  return (
    <div className="App">
      <header className="App-header">
         <h3>Drag and Drop Project</h3>
         <ul>
           {list.map((item,idx)=>{
             return <li key={idx} onDragOver={()=>{onDragOverhandler(idx)}} className="itemStyle">
               <div draggable onDragStart={(e)=>{onDragStartHandler(e,idx)}}>{item}</div>
              </li>
           })}
         </ul>
      </header>
    </div>
  );
}

export default App;
