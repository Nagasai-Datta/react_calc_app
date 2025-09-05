import { useState } from 'react';
import Keypad from './keypad.jsx';
import Screen from './screen.jsx';
import './App.css';

function App() {
  const [display, setDisplay] = useState("");

  function handleButtonClick(val) {
    if (val === "Reset") setDisplay("");
    else if (val === "del") setDisplay(prev => prev.slice(0, -1));
    else if (val === "=") {
      try {
        const result = eval(display.replace(/x/g, "*"));
        setDisplay(result.toString());
      } catch {
        setDisplay("Error");
      }
    } else setDisplay(prev => prev + val);
  }

  return (
    <div className="calculator">
      <Screen value={display} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;