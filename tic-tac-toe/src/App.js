import React,{useState, useEffect} from 'react';
import './App.css';

const initMatrix = [];

function App() {

  const [matrix,setMatrix] = useState(initMatrix);
  const [matrixSize,setMatrixSize] = useState(3);
  const [currentPlayer,setCurrentPlayer] = useState("o")
  const [selectedRow,setSelectedRow] = useState(null)
  const [selectedColumn,setSelectedColumn] = useState(null)
  const [winner,setWinner] = useState(false)
  const [reset,setReset] = useState(false)

  useEffect(()=>{
    setWinner(false)
    setSelectedColumn(null)
    setSelectedRow(null)
    const row = new Array(matrixSize).fill(null)
    const tempMatrix = [];
    
    for(let i=0;i<matrixSize;i++)
    {
      tempMatrix.push([...row])
      console.log([...row])
    }

    setMatrix(tempMatrix)

  },[reset])

  function squareClick(r,c)
  {
    console.log(r,c)
     if(!matrix[r][c] && !winner)
     {
       setSelectedRow(r)
       setSelectedColumn(c)
       let nextPlayer = currentPlayer === "x" ? "o" : "x";
       setCurrentPlayer(nextPlayer)

       const matrixCopy = [...matrix];
       matrixCopy[r][c] = nextPlayer;
       setMatrix(matrixCopy)
     }
  }

  function isWinner()
  {
     let vertical = true;
     let horizontal = true;
     let d1 = true;
     let d2 = true;

     if(selectedRow === null && selectedRow === null)
     {
       return
     }

     for(let i=0;i<matrixSize;i++)
     {
       if(matrix[i][selectedColumn] != currentPlayer)
       {
         vertical = false;
       }

       if(matrix[selectedRow][i] != currentPlayer)
       {
         horizontal = false;
       }

       if(matrix[i][i] != currentPlayer)
       {
         d1 = false;
       }

       if(matrix[i][matrixSize -i -1] != currentPlayer)
       {
         d2= false;
       }
     }

     if(vertical || horizontal || d1 || d2)
     {
        setWinner(true)
     }
  }

  useEffect(()=>{
     if(!winner)
     {
       isWinner();
     }
  })

  function resetHandler()
  {
     setReset(!reset)
  }

  return (
    <div className="App">
      <header className="App-header">
         <button className="resetButton" onClick={resetHandler}>Reset Game</button>
         <div>
           {
             matrix.map((indexColumn,c)=>{
                 return <div className="column"> { indexColumn.map((indexRow,r)=>{ return (<div className="row" onClick={() => {squareClick(r,c)}}>{matrix[r][c]}</div>)})} </div>
             }) 
           }
         </div>
         <h2 className="winningInformation">{winner?`${currentPlayer} is the Winner`:''}</h2>
      </header>
    </div>
  );
}

export default App;