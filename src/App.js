import { useState } from "react";


function App() {
  const [temp, setTemp] = useState(20);

  let appBg = (temp >= 30 ? 'hot' : temp > 16  ? 'warm' : 'cold');

  return (
    <div className={`App ${appBg}`}>
      <h2>Temperature Control</h2>
      <div className={`control ${appBg}`}>
        <div className="temp">
          <p>{temp}° C</p>
        </div>
        <div className="btns">
          <button onClick={() => setTemp(temp + 1)}>+</button>
          <button onClick={() => setTemp(temp - 1)}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
