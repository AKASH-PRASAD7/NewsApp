import "./App.css";
import CardConatiner from "./Components/CardConatiner";
import HeroCarosel from "./Components/HeroCarosel";
import Navabar from "./Components/Navabar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navabar />
        <HeroCarosel />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <CardConatiner key="general" category="general" country="in" />
            }
          />

          <Route
            exact
            path="/technology"
            element={<CardConatiner category="technology" country="in" />}
          />

          <Route
            exact
            path="/science"
            element={
              <CardConatiner key="science" category="science" country="in" />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <CardConatiner key="sports" category="sports" country="in" />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <CardConatiner
                key="entertainment"
                category="entertainment"
                country="in"
              />
            }
          />

          <Route
            exact
            path="/global"
            element={
              <CardConatiner key="global" category="general" country="us" />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
