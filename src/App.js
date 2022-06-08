import logo from "./logo.svg";
import Card from "./Component/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex flex-row justify-around">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
