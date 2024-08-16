import React, { useState, useEffect, useRef } from "react";
import MockDetail from "./MockDetail";
import "./App.css";

const App: React.FC = () => {
  const [detailsAmount, setDetailsAmount] = useState<number>(0);
  const [intervalRef, setIntervalRef] = useState(0);
  const [lastUpdateTime, setLastUpdateTime] = useState<string | Date | null>(null);
  const [userString, setUserString] = useState("");
  const startTimeRef = useRef<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailsAmount(parseInt(e.target.value, 10) || 0);
    startTimeRef.current = performance.now(); // Start timer when input changes
  };

  function onStringInput(e: any) {
    setUserString(e.target.value);
    startTimeRef.current = performance.now();
  }

  function startIncrement() {
    const i = setInterval(() => {
      setDetailsAmount((a) => a + 1);
    }, 1000);
    setIntervalRef(i);
  }

  function stopIncrement() {
    clearInterval(intervalRef);
  }

  useEffect(() => {
    // Start the timer for tracking time since last update
    if (startTimeRef.current !== null) {
      const endTime = performance.now(); // End timer after rendering
      const timePassed = endTime - startTimeRef.current;
      setLastUpdateTime(timePassed.toFixed(0));
      startTimeRef.current = null; // Reset the start time after logging
    }
  }, [detailsAmount, userString]);

  return (
    <div>
      <div className="input">
        <label htmlFor="input">
          Details Amount:
          <input type="number" id="input" value={detailsAmount} onChange={handleChange} />
        </label>
        <span>Last update: {lastUpdateTime ? String(lastUpdateTime) + "ms" : "n/a"}</span>
        <br />

        <label htmlFor="stringInput">
          Interactive input:
          <input type="string" id="stringInput" value={userString} onChange={onStringInput} />
          <span>Result: {userString}</span>
        </label>
        <br />
        <button type="button" onClick={startIncrement}>
          Start auto increment
        </button>
        <button type="button" onClick={stopIncrement}>
          Stop auto increment
        </button>
      </div>
      <div className="details">
        {Array.from({ length: detailsAmount }, (_, index) => (
          <MockDetail key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
