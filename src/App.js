import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Router>
        < Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
