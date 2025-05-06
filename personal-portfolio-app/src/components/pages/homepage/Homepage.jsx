import './homepage.css';
import barongPic from '../../../assets/barongPic.png';


function Homepage(){
    
    return(
        <div className="homepage">
            <div className ="body-wrapper">
               
                <h1> I'm <span id="my-name">Matthew Dela Cruz,</span><span class="newline"/> Fullstack Developer</h1>
                <img src={barongPic} alt="Barong Pic" id="profilePic"/>
            </div>
            <div class="boxes-container">
                <div class="box box1"><p>Hello</p></div>
                <div class="box box2"><p>Hello</p></div>
                <div class="box box3"><p>Hello</p></div>
                <div class="box box4"><p>Hello</p></div>
                <div class="box box5"><p>Hello</p></div>
                <div class="box box6"><p>Hello</p></div>
            </div>
            <div className = "circle-container" />
        </div>
    );
}

export default Homepage