import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    // counter = counter + 1 ;
    setCounter((counter) => (counter < 20 ? counter + 1: 20 ));
    
  };
  const removeValue = () => {
     setCounter((counter) => (counter > 0 ? counter - 1 : 0 )) ;
     
     
    
    
  };

  return (
    <>
      <h1>counter value : {counter} </h1>

      <button onClick={addValue}>Add value </button>
      <br></br>
      <button onClick={removeValue}>Remove value </button>
    </>
  );
}

export default App;
