import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  function changeCount(process) {
    if (process === -1) {
      setCount((prev) => prev - 1);
    } else if (process === 1) {
      setCount((prev) => prev + 1);
    } else setCount(0);
  }

  return (
    <div className="useState">
      <h2>React useState Hook</h2>
      <p>{count}</p>
      <div>
        <button onClick={() => changeCount(1)}>Increment Count</button>
        <button onClick={() => changeCount(-1)}>Decrement Count</button>
        <button onClick={() => changeCount(0)}>Reset Count</button>
      </div>
    </div>
  );
}
