import './ripple.css'
import { useState, useEffect } from 'react'
{/* This Will basically try to simualate a ripple effect in the background */}
function Ripple() {
  const [rippleCount, setRippleCount] = useState([]);
  const [rippleStopper,setRippleStop] = useState(0);

 

  useEffect(() => {
    if (rippleStopper < 3) { 
      const interval = setInterval(() => {
        setRippleCount((prev) => [
          ...prev,
          { id: Date.now() }, 
        ]);
        setRippleStop((prev) => prev + 1); 
      }, 500);{/* adjust this for desired amount in miliseconds ng ripple*/}

      
      return () => clearInterval(interval);
    }
  }, [rippleStopper]); 
  
  return (
    <div className="ripple">
     
      <div className="ripple-circle"></div>
      
      {rippleCount.map((ripple)=>
      <div key ={ripple.id}className="ripple-circle"></div>
        )}
      
    </div>
  )
}

export default Ripple;