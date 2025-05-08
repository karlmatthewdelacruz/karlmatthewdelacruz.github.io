import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Homepage from './components/pages/homepage/homepage'
import SplashPage from './components/designs/SplashPage'
import Skillpage from './components/pages/skillpageportion/Skillpage'
import Projects from './components/pages/projectpage/Projects'
import Ripple from './components/designs/Ripple'

function App() {
  const [currentSplash, setCurrentSplash] = useState(0);
  const Splash = [
    { name: "-Hello" },
    { name: "-Kamusta" },  // Tagalog
    { name: "-Hola" },      // Spanish
    { name: "-Bonjour" },   // French
    { name: "-Hallo" },     // German
    { name: "-Ciao" },      // Italian
    { name: "-こんにちは" }, // Japanese
    { name: "-Привет" },    // Russian
    { name: "-你好" },      // Chinese (Mandarin)
    { name: "-مرحبا" },     // Arabic
  ];

  useEffect(() => {
    if(currentSplash >= 0 && currentSplash < Splash.length) {
      document.body.classList.add('no-scroll');
      const timer = setTimeout(() => {
        setCurrentSplash(prev => prev + 1);
      }, 250); 
      return () => clearTimeout(timer);
    }else{
      document.body.classList.remove('no-scroll');
    }
  }, [currentSplash, Splash.length]);

  
  const finishedSplash = currentSplash >= Splash.length;
  
  return (
    <>
      {!finishedSplash && <SplashPage word={Splash[currentSplash]} />} 
      <div className={`App-container ${!finishedSplash ? 'hidden' : 'fade-in-main'}`}>
        <Ripple/>
        <Header />
        <Homepage />
      </div>
      <div className ="info-divider"/>
      <Skillpage />
      <div className ="info-divider"/>
      <Projects />
      
    </>
  );
}

export default App