import "./App.css";
import Circle from "./Circle";
import { useState } from "react";

function App() {
  /*   const [color, setColor] = useState("on");
  const [status, setStatus] = useState("false"); */
  const circlesNum = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return circlesNum.map((circle) => <Circle key={circlesNum.id} />);
}

export default App;
