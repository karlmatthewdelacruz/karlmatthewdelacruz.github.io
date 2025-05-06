import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Homepage from './components/pages/homepage/homepage'
function App() {
  return (
    <div className="App">
      <div className="App-container">
        
        <Header/>
        <Homepage/>
        
      </div>
    </div>
  )
  
}

export default App
