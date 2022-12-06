import './App.css';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vehicles from './Vehicles';
import Map from './Map';
import Analytics from "./Analytics";
import Report from './Report';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
        <Routes>
          <Route path="/map" element={<Map />} />
        </Routes>
        <Routes>
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
        <Routes>
          <Route path="/report" element={<Report />} />
        </Routes>
      </div >
    </Router>
  );
}

export default App;
