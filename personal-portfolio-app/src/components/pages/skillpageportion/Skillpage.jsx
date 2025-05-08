import './skillpage.css';
import React,{useRef, useState, useEffect } from 'react';
import { frontEndSkills, backEndSkills } from '../../../assets/information/skills.json';

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
        <h1 id ="skhl"> Current technologies</h1>
        <div className = {`skillpage-box ${isVisible ? 'drop-box':''}`} ref = {domRef}>
            <div className = "sb1">
                <h2 id = "frhl"> Frontend</h2>
                <ul className = "skillpage-list">
                {frontEndSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
                </ul>
            </div>
            <div className = "sb2">
                <h2 id = "behl"> Backend</h2>
                <ul className = "skillpage-list">
                {backEndSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
                </ul>
            </div>
           
        </div>
      </div>  
    );
}
export default Skillpage
