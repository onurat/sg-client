import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Heading from './components/Heading/Heading';
import DescriptionSection from './components/DescriptionSection/DescriptionSection';
import Footer from './components/Footer/Footer';
import JobsButton from './components/Jobs_Buttons/Jobs_Buttons';


function App() {
  return (
    <div className="App">
      <Header />
      <Heading />
      <DescriptionSection />
      <JobsButton />
      <Footer />
    </div>
  );
}


export default App;
