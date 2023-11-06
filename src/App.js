import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { routes } from './pages/index';

function App() {
  const basename = "/";
  return (
    <div className="App">
    <Router basename={basename}>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
    <Footer />
  </div>
  );
}

export default App;
