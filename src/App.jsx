import Home from "./pages/Home";
import Coffees from "./pages/Coffees";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Brewing from "./pages/Brewing";
import Footer from "./components/Footer";
import "./css/App.css";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coffees" element={<Coffees />} />
          <Route path="/brewing" element={<Brewing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
