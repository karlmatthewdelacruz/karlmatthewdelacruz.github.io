import './projects.css';

import React, { useRef, useState, useEffect } from 'react';
import {projects} from '../../../assets/information/projects.json';
{/* This is where the projects will be displayed possibly in grid format*/}
function Projects(){
    return(
        <div className = "projects-wrap">
            
            <div id ="header">
                <h1 id ="prhl"> Projects</h1>
            </div>
            <div className ="projects-box-grid">
                {
                    projects.map((project,index)=>(
                        <div className= "p-box" key={index}>
                            <h2>{project.name}</h2>
                            <img className ="proj-img" src={project.image} />
                            <p>{project.description}</p>
                            <ul className = "skl-usd">
                            
                                
                                {project.technologies.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}


export default Projects;