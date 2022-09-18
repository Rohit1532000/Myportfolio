import React from 'react'


import './Home.css'
import pic from './image/WhatsApp Image .jpeg'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img id='profile-pic' src={pic} />
        <h2> Hi, My Name is Rohit</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.facebook.com/profile.php?id=100006870763617" target="_blank" rel='noopener'> <i class="fa-brands fa-facebook"></i></a>
          <a href="https://www.linkedin.com/in/rohit-singh-774228248" target="_blank" rel='noopener'> <i class="fa-brands fa-linkedin"></i>
          <a href="https://www.instagram.com/rohitsingh2532000/" target="_blank" rel='noopener'> <i class="fa-brands fa-instagram"></i></a></a>
          <a  href="https://github.com/Rohit1532000" target="_blank" rel='noopener'> <i class="fa-brands fa-github"></i></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Javascript, HTML, CSS, Bootstrap, Photoshop,JQuery
            </span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C, C++, HTML</span>
          </li><br />
          <hr />
          <li className="item">
            <h2 style={{ color: " #ebcc1e" }}>Contact me</h2>
            <a href='tel:7836063161'> <span>Call me at 7836063161</span><br /></a>
            <a href="mailto: rohitsingh1532002@gmail.com">
              <span>Email me at rohitsingh1532002@gmail.com </span></a><br></br>
              <a href='Rohitresume.docx' download='Rohitresume.docx' ><button id='resumeButton'>Download Resume</button></a>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;