import React from 'react'
import ProfilePic from '../../Assets/Profile.jpg'
import "./About.css"
import '../../App.css'
const About = () => {
    return (
        <div className="abtContainer" id="About">
            <div className="globalDivider" />
            <h2 className="globalDividerTitle">About</h2>
            <div className="abtContentContainer">
                <img src={ProfilePic} className="picContainer" />
                <div className="abtContent">
                    <p>
                        I am a final year undergraduate at SGSITS, Indore ,pursuing
                        my B.Tech in Computer Science and Engineering.I am a Computer Vision
                        Enthusiast , and I really love that how we could use deep learning to
                        improve human life and existing applications.I have also worked on Full-Stack
                        web and mobile applications and I am already loving it.I am passionate about learning
                        new things and when I find something really interesting I love to dig deeper into the
                        nitty gritties of how they work.<br/>
                        In my free time I play Guitar or I would simply go out for Cycling.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About
