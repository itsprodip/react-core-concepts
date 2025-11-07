import "./App.css";
import Counter from './Counter'
import Batsman from './Batsman'
function App() {
  function handleClick() {
    alert("Button clicked");
  }
  const handleAdd = (x) => {
  
  alert (`Added ${x} sum is ${x+5}`)
  };
  return (
    <>
      <h1>Hi this is react concept.</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      <br /> <br />
      <button className="btn" onClick={handleClick}>
        Click here
      </button>
      <button onClick={() => alert("another button is clicked")}>
        Click me
      </button>
      <button onClick={() => handleAdd(7)}>Add</button>
    </>
  );
}

export default App;
