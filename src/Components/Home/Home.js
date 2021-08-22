import React from 'react'
import socialLinks from '../socialLinks'
import Typed from 'react-typed'
import Particles from 'react-particles-js'
import Rotater from '../Rotater'
import Navbar from '../Navbar/Navbar'
import './Home.css'
const Home = () => {
    return (
        <>
            
            <div className="container" id="Home">
                <div className="main-info">
                    <h1>Hi,I am Ritik Nandwal</h1>
                    <h3>I am final year undergraduate pursuing B.Tech in Computer Science Engineering <br />
                        from SGSITS Indore</h3>
                    <Typed
                        className="typed-text"
                        strings={["Computer Vision Enthusiast", "Full Stack Web and Mobile Application Developer"]}
                        typeSpeed={40}
                        backSpeed={10}
                        loop
                    />
                    <div className="table">
                        <ul className="social">
                            {socialLinks.map(
                                (item) => {
                                    return (
                                        <li key={item.name}>
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className={item.className} />
                                            </a>
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home