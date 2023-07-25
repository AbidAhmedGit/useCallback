import "./styles.css";
import React from "react";

const TODO = React.memo(function ({ todos, addTodo }) {
  console.log("to do rerender");
  return <div> TODO </div>;
});

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const [todos, setTodo] = React.useState([]);
  console.log("re render");

  const addTodo = React.useCallback(() => {
    setTodo([]);
  }, []);

  return (
    <div className="App">
      <TODO addTodo={addTodo} />
      <button onClick={() => setCounter(counter + 1)}>Add ME!</button>
      <div>{counter}</div>
    </div>
  );
}

// useState
// useEffect
// React.memo
// useCallback
// React.createRef
