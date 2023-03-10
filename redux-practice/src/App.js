import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import CardsDetails from "./components/CardsDetails";
import { Routes, Route } from "react-router-dom";
import "./components/style.css";

function App() {
  return (
    <>
      <h1>React Redux Practice</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
    </>
  );
}

export default App;
