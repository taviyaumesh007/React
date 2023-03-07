import "./App.css";
import Counter from "./pages/counter/Counter";
import DisplayCounter from "./pages/displayCounter/DisplayCounter";

function App() {
  return (
    <div className="App">
      <h1>React Redux Practice</h1>
      <Counter />
      <DisplayCounter />
    </div>
  );
}

export default App;
