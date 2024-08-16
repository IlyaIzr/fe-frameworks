import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { MockDetailMemo } from "./MockDetail";
import "./App.css";

const App: React.FC = () => {
  const [detailsAmount, setDetailsAmount] = useState<number>(0);
  const [intervalRef, setIntervalRef] = useState<number | null>(null);
  const [lastUpdateTime, setLastUpdateTime] = useState<string | null>(null);
  const [userString, setUserString] = useState("");
  const startTimeRef = useRef<number | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value, 10) || 0;
      if (newValue !== detailsAmount) {
        setDetailsAmount(newValue);
        startTimeRef.current = performance.now(); // Start timer when input changes
      }
    },
    [detailsAmount]
  );

  const onStringInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserString(e.target.value);
    startTimeRef.current = performance.now();
  }, []);

  const startIncrement = useCallback(() => {
    const interval = setInterval(() => {
      setDetailsAmount((prev) => prev + 1);
    }, 1000);
    setIntervalRef(interval);
  }, []);

  const stopIncrement = useCallback(() => {
    if (intervalRef) clearInterval(intervalRef);
  }, [intervalRef]);

  useEffect(() => {
    if (startTimeRef.current !== null) {
      const endTime = performance.now();
      const timePassed = endTime - startTimeRef.current;
      setLastUpdateTime(timePassed.toFixed(0));
      startTimeRef.current = null; // Reset the start time after logging
    }
  }, [detailsAmount, userString]);

  const mockDetails = useMemo(
    () => Array.from({ length: detailsAmount }, (_, index) => <MockDetailMemo key={index} index={index} />),
    [detailsAmount]
  );

  return (
    <div>
      <div className="input">
        <label htmlFor="input">
          Details Amount:
          <input type="number" id="input" value={detailsAmount} onChange={handleChange} />
        </label>
        <span>Last update: {lastUpdateTime ? `${lastUpdateTime}ms` : "n/a"}</span>
        <br />

        <label htmlFor="stringInput">
          Interactive input:
          <input type="text" id="stringInput" value={userString} onChange={onStringInput} />
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
      <div className="details">{mockDetails}</div>
    </div>
  );
};

export default App;
