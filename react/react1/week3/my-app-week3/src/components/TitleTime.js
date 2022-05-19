import { useState, useEffect } from "react";

function Time() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 500);
  });

  return (
    <div>
      <h1> Todolist</h1>
      <span> You have used {count} seconds on this website</span>
    </div>
  );
}

export default Time;