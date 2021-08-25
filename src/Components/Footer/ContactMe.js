import React from 'react'
import socialLinks from '../socialLinks';
import '../Home/Home.css'
const ContactMe = () => {
    return (
        <div style={{
            backgroundColor:"gray",
            alignSelf:"center",
            width:"100%",
            height:"20vh",
            justifyContent:"center",
            alignContent:"center",

        }}>
            <div className="table" style={{}}>
                <ul className="social">
                    {/* {socialLinks.map(
                        (item) => {
                            return (
                                <li key={item.name} className="socialContent">
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
                    )} */}
                </ul>
            </div>
        </div>
    )
}
export default ContactMe