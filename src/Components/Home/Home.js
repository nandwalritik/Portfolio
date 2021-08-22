import React from 'react'
import socialLinks from '../socialLinks'
import './Home.css'
const Home = () => {
    return (
        <>
            <div className="container" id="Home">
                <div className="main-info">
                    <h1>HI,I AM RITIK NANDWAL</h1>
                    <h3>I am final year undergraduate pursuing B.Tech in Computer Science Engineering <br />
                        from SGSITS Indore</h3>
                    <div className="resBtn" >
                        <a
                            href="https://rb.gy/kufujq"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{textDecoration:"none"}}
                        >
                            RESUME
                        </a>
                    </div>
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