import "./App.css";
import Subscription from "./components/Subscription";

function App() {
  let date = new Date("20,02,2023");
  let title = "monthly subscription";
  let amount = "130.5";
  return (
    <div className="App">
      <Subscription
        passedDate={date}
        passedTitle={title}
        passedAmount={amount}
      />
    </div>
  );
}

export default App;
