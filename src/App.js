import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DescriptionSection from './components/DescriptionSection/DescriptionSection';
import Footer from './components/Footer/Footer';
import WindscreenReplacment from './components/Windscreen _Replacment_Page/Windscreen_Replacment';
import GlassReplacementButton from './components/Windscreen _Replacment_Page/Glass_Replacment_Button';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DescriptionSection />} />
          <Route path="/glass_replacement" element={<GlassReplacementButton />} />
          <Route path="/pages/WindscreenReplacment" element={<WindscreenReplacment />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
