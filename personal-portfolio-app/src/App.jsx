import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Homepage from './components/pages/homepage/homepage'
import SplashPage from './components/splashs/SplashPage'

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
      const timer = setTimeout(() => {
        setCurrentSplash(prev => prev + 1);
      }, 200); 
      return () => clearTimeout(timer);
    }
  }, [currentSplash, Splash.length]);
  
  const finishedSplash = currentSplash >= Splash.length;
  
  return (
    <>
      {!finishedSplash && <SplashPage word={Splash[currentSplash]} />} 
      <div className={`App-container ${!finishedSplash ? 'hidden' : 'fade-in-main'}`}>
        <Header />
        <Homepage />
      </div>
    </>
  );
}

export default App