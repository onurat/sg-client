import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Heading from './components/Heading/Heading';
import DescriptionSection from './components/DescriptionSection/DescriptionSection';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Heading />
      <DescriptionSection />
      <Footer />
    </div>
  );
}

export default App;
