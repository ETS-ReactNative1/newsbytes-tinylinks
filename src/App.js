import { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InputShortener from './components/InputShortener';
import LinkResult from './components/LinkResult';


import Navbar from './components/Navbar'

import Support from './components/Support';


function App() {

  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Navbar />
      <Hero />
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
      <About />
      <Support />
      <Footer />
      
    </>
  );
}

export default App;
