//import logo from './logo.svg';/
import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Column from './Column';
import React from 'react';


const initialState =[
  {
    title: 'Backlog',
    todos: ['Login page - perfomance issues', 'Sprint bugfix'],
    color: "#9BB4C0",
    input: ""
  },
  {
    title: 'Ready',
    todos: ['Shop page - perfomance issues', 'Checkout bugfix'],
    color: '#8EB0C0',
    input: ""
  },
  {
    title: 'In progress',
    todos: ['User page - perfomance issues', 'Auth bugfix'],
    color: "#547381",
    input: ""
  },
  {
    title: 'Finished',
    todos: ['Main page - perfomance issues', 'Main page bugfix'],
    color: "#485961",
    input: ""
  },
];

function App() {
  const [col, setCol] = React.useState(initialState);
  
  const handleInputChange = (value, colIndex) => {

    const nextCol = [...col]
    nextCol[colIndex].input = value;
    setCol(nextCol);

  };


  const handleAddTodo = (colIndex) => {
    
    const nextCol = [...col];
    nextCol[colIndex].todos.push(nextCol[colIndex].input);
    //console.log(todos);
    nextCol[colIndex].input = '';
    setCol(nextCol);
  };

  const handleShift = (itemIndex, fromCol, toCol) => {

    const nextCol =[...col];
    const temp = nextCol[fromCol].todos[itemIndex];
    console.log(nextCol[fromCol]);
    nextCol[fromCol].todos.splice(itemIndex, 1);
    nextCol[toCol].todos.push(temp);
    //console.log(todos);
    setCol(nextCol);

  };

    
  return (
    <div className='App'>

      {col.map((v,i) => (

        <Column
          index = {i}

          handleInputChange ={handleInputChange} 
          data={v} 
          key ={i} 
          handleAddTodo ={handleAddTodo}
          handleShift ={handleShift}
          isFirst ={i === 0}
          isLast ={i === col.length -1}
        />

      ))}
      
    </div>
  

  );
}

export default App;
