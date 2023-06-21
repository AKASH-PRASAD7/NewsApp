import "./App.css";
import CardConatiner from "./Components/CardConatiner";
import HeroCarosel from "./Components/HeroCarosel";
import Navabar from "./Components/Navabar";

function App() {
  return (
    <div className="App">
      <Navabar />
      <HeroCarosel />
      <CardConatiner />
    </div>
  );
}

export default App;
