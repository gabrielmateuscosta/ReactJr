import { useState } from "react";
import { Navbar } from "./componets/NavBar";

function App() {
  const [btnClicked, setBtnClicked] = useState(0)
 
  return (
    <>
      <Navbar />
      <h1>Hello World</h1>
      <button onClick={() => setBtnClicked(btnClicked + 1)}>
        Eu sou um botão e estou aumentando o valor
      </button>
      <h1>{btnClicked}</h1>
    </>
  );
}

export default App