
import { useState } from "react";
import "./App.css";

function App() {

  let [c, setCounter] = useState(5)
  // let c = 5;
  const addV = () => {
    // sc += 1;
    setCounter(c + 1)
  };
  const remV = () => {

    if (c == 0) {
      setCounter(0);
    } else {


      setCounter(c - 1);
    }
  }


  return (
    <>
      <h1>Farhad</h1>
      <h2>Counter Value: {c}</h2>
      <button onClick={addV}>Add</button>
      <br />
      <br />
      <button onClick={remV}>Remove</button>
    </>
  );
}

export default App;
