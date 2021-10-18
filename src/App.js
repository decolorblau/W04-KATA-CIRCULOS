import "./App.css";
import Circle from "./Circle";

function App() {
  //const circleNum = new Array(5).fill("").map((n,i)=>({id:i}))
  const circlesNum = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return circlesNum.map((circle) => <Circle key={circlesNum.id} />);
}

export default App;
