import './skillpage.css';
import React,{useRef, useState, useEffect } from 'react';



function Skillpage(){
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        }, { threshold: 0.5 });
        
        const currentRef = domRef.current; 
        
        if (currentRef) {
            observer.observe(currentRef);
        }
        
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        }; 
    }, []);

    return(
      <div className ="skillpage-wrap">
        <h1 id ="skhl"> Skills</h1>
        <div className = {`skillpage-box ${isVisible ? 'drop-box':''}`} ref = {domRef}>
            <div className = "sb1">
                <h2 id = "frhl"> Frontend</h2>
                <ul className = "skillpage-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                </ul>
            </div>
            <div className = "sb2">
                <h2 id = "behl"> Backend</h2>
                <ul className = "skillpage-list">
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                </ul>
            </div>
           
        </div>
      </div>  
    );
}

export default Skillpage;