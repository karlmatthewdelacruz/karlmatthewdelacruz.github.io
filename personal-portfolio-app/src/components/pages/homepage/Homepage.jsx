import './homepage.css';
import barongPic from '../../../assets/barongPic.png';
import linkedInLogo from '../../../assets/linkedIn.png';
import githubLogo from '../../../assets/githubLogo.png';
function Homepage(){
     
    return(
        <div className="homepage">
            <div className ="body-wrapper">
               
                <h1><span class="newline"/>  I'm <span id="name-hl">Matthew Dela Cruz</span></h1>
                <img src={barongPic} alt="Barong Pic" id="profilePic"/>
            </div>
            <div class="boxes-container">
                <div class="box box1"><h2><span id = "full-stack-hl">Full Stack </span>Developer</h2></div>
                <div class="box box2"><a href ="https://github.com/Mateogas" target ="_blank"><img src={githubLogo} alt ="linkedInLogo" className='logos'/></a></div>
                <div class="box box3"><h2>Based in the <span id= "ph-hl">Philippines</span></h2></div>
                <div class="box box4"><h2><span id="creating-hl">Creating</span> your Digital World!</h2></div>
                <div class="box box5"><a href ="https://www.linkedin.com/in/karl-matthew-dela-cruz-502378348/" target ="_blank"><img src={linkedInLogo} alt ="linkedInLogo" className='logos'/></a> </div>
                <div class="box box6"><h2>CV</h2></div>
            </div>
            
        </div>
    );
}

export default Homepage