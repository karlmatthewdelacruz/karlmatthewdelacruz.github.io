import './ripple.css'
import { useState, useEffect } from 'react'

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
      }, 500);

      
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