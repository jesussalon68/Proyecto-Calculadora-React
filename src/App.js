
import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 

  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value));
  }; 

  function minus(e) { 
  e.preventDefault();
    setResult((prevResult) => prevResult - Number(inputRef.current.value));
  };
  
  function times(e) { 
    e.preventDefault();
    setResult((prevResult) => prevResult * Number(inputRef.current.value));
  }; 

  function divide(e) { 
    e.preventDefault();
    setResult((prevResult) => prevResult / Number(inputRef.current.value));
  };

  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = ""; // Limpia el input
  }; 

  function resetResult(e) { 
    e.preventDefault();
    setResult(0); // Resetea el resultado a 0 
  }; 

  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          Resultado: {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>Sumar</button>
        <button onClick={minus}>Restar</button>
        <button onClick={times}>Multiplicar</button>
        <button onClick={divide}>Dividir</button>
        <button onClick={resetInput}>Limpiar Input</button>
        <button onClick={resetResult}>Resetear Resultado</button>
      </form> 
    </div> 
  ); 
} 

export default App; 