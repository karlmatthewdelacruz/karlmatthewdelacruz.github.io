import './homepage.css';

function Homepage(){
    return(
        <div className="homepage">
            <div className="body-wrapper">
                <h1><span className="newline"/>  I'm <span id="name-hl">Matthew Dela Cruz</span></h1>
                <img src="/barongPic.png" alt="Barong Pic" id="profilePic"/>
            </div>
            <div className="boxes-container">
                <div className="box box1"><h2><span id="full-stack-hl">Full Stack </span>Developer</h2></div>
                <div className="box box2"><a href="https://github.com/Mateogas" target="_blank"><img src="/githubLogo.png" alt="GitHub Logo" className='logos'/></a></div>
                <div className="box box3"><h2>Based in the <span id="ph-hl">Philippines</span></h2></div>
                <div className="box box4"><h2><span id="creating-hl">Creating</span> your Digital World!</h2></div>
                <div className="box box5"><a href="https://www.linkedin.com/in/karl-matthew-dela-cruz-502378348/" target="_blank"><img src="/linkedIn.png" alt="LinkedIn Logo" className='logos'/></a></div>
                <div className="box box6"><h2>CV</h2></div>
            </div>
        </div>
    );
}

export default Homepage