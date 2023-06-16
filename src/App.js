import React from 'react';
import './App.css';

function App() {
  // const [result, setIsImportant] = React.useState("click below")
  // const hello = result


// function handleClick(){
//   setIsImportant("clicked Thank you")
// }

  
    // count = result
    // setIncrement(count ++
const [thingsArray, setThingsArray] = React.useState(["thing1"])



  function addThings(){
    setThingsArray(prevArray => [...prevArray, `thing ${prevArray.length + 1}`])
   }
   
  const thingsElements = thingsArray.map(thing => <p>{thing}</p>)

  return (
    <div className="App">
     <button onClick={addThings}>Add item</button>
     {thingsElements}
    </div>
  );
}

export default App;
