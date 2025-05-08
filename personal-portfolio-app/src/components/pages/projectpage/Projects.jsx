import './projects.css';

import React, { useRef, useState, useEffect } from 'react';
import {projects} from '../../../assets/information/projects.json';

function Projects(){
    return(
        <div className = "projects-wrap">
            
            <div id ="header">
                <h1 id ="prhl"> Projects</h1>
            </div>
            <div className ="projects-box-grid">{/* This is where the projects will be displayed possibly in grid format*/}
                
                {
                    projects.map((project,index)=>(
                        <div className= "p-box" key={index}>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <ul className = "skl-usd">
                                <h3> Technologies used</h3>
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