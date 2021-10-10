import React from 'react'
import socialLinks from '../socialLinks';
import '../Home/Home.css'
const ContactMe = () => {
    return (
        <div style={{
            background: "rgb(15, 22, 36)",
            color: "rgb(242, 245, 247)",
            alignSelf: "center",
            width: "100vw",
            height: "30vh",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"

        }}>
            <div style={{  height: "50%", alignSelf: "center", justifyContent: "center", paddingTop: "40px" }}>
                <h1 style={{ margin: 0, paddingTop: "20px", textAlign: "center" }}>GET IN TOUCH</h1>
                <div style={{ textAlign: "center", alignSelf: "center" }}>
                    <ul style={{ margin: "20px", fontSize: "32px", display: "inline-block" }}>
                        {socialLinks.map(
                            (item) => {
                                return (
                                    <li key={item.name} style={{ display: "inline-block", textAlign: "center", alignSelf: "center", marginRight: "30px" }}>
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
            {/* <div style={{ textAlign: "right" }}>
                <h3 style={{ margin: 0, marginRight: "30px" }}>
                    Indore , India
                </h3>
            </div> */}
        </div>
    )
}
export default ContactMe