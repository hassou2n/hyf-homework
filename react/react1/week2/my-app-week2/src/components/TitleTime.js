import { useState, useEffect } from "react";
import "./Style.css";

function Time() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 500);
  });

  return (
    <div className="Pleft">
      <h1> Todolist</h1>
      <span> You have used {count} seconds on this website</span>
    </div>
  );
}

export default Time;
