import Btn from './Btn.jsx';
import './keypad.css';

export default function Keypad({ onButtonClick }) {
  const buttons = ["7","8","9","del","4","5","6","+","1","2","3","-",".","0","/","x"];

  const style = {
    backgroundColor: "hsl(0, 0%, 90%)",
    color: "hsl(221, 14%, 31%)",
    fontWeight: 900,
    height: "55px",
    width: "85px",
    borderRadius: "14px",
    fontSize: "1.2rem",
    cursor: "pointer",
  };

  const equalStyle = {
    backgroundColor: "red",
    color: "white",
    fontWeight: 900,
  };

  const resetStyle = {
    backgroundColor: "hsla(223, 22%, 44%, 1.00)",
    color: "white",
    fontWeight: 900,
  };

  return (
    <div className="keypad">
      {buttons.map((item, idx) => (
        <Btn
          key={idx}
          val={item}
          style={style}
          onClick={() => onButtonClick(item)}
        />
      ))}
      <Btn val="=" style={equalStyle} gridSpan={2} onClick={() => onButtonClick("=")} />
      <Btn val="Reset" style={resetStyle} gridSpan={2} onClick={() => onButtonClick("Reset")} />
    </div>
  );
}