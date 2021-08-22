import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import { HashRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import './Navbar.css'
const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <HashRouter>
            <nav className="NavbarItems">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} color="green"></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                {/* <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a> */}
                                <Link className={item.cName} smooth to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </HashRouter>

    )
}
export default Navbar