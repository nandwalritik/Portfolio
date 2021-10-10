import React from 'react'
import layer1 from '../Assets/layer1.png'
import layer2 from '../Assets/layer2.png'
import layer3 from '../Assets/layer3.png'
import oval1 from '../Assets/oval-1.svg'
import oval2 from '../Assets/oval2.png'
import oval3 from '../Assets/oval3.svg'
import oval5 from '../Assets/oval-5.svg'
import oval6 from '../Assets/oval-6.svg'
import oval7 from '../Assets/oval-7.svg'

import still from '../Assets/still.png'
import BHFO from '../Assets/BHFO.gif'
import Typed from 'react-typed'
import './Rotator.css'


const Rotater = () => {
    return (
        <div style={container}>
            <figure className='blob-content'>
                <img src={oval1} style={{ animation: `spinanti 6s linear infinite`, width: "30vw" }} />
                {/* <img src={oval2} style={{ animation: `spin 6s linear infinite`, width: "600px" }} /> */}
                <img src={layer1} style={{ animation: `spinanti 6s linear infinite`, width: "15vw" }} />
                <img src={layer2} style={{ animation: `spin 7s ease-in-out infinite`, width: "15vw" }} />
                <img src={oval7} style={{ animation: `spinanti`, width: "7vw" }} />
                <img src={BHFO} className="child" style={{ width: "10vw", borderRadius: "50%" }} />
            </figure>
        </div >
    )
}

const container = {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    textAlign: "center",
    position:"ab"
    // backgroundColor:"gray"
}
export default Rotater;