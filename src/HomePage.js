import React from 'react'
import "./HomePage.css"
import logo1 from "./images/LOGO-02 3.png"
import logo2 from "./images/LOGO-40 1.png"
import {Link} from "react-router-dom"

const HomePage = () => {
    return (
        <div className='homePage--div'>
            <div>
                <img src={logo1} alt="" className='logo1'></img>
                <div className='hr1'></div>
                <img src={logo2} alt="" className='logo2'></img>
                <Link to="/personalInfo" className='link'>
                    <button className='addCV-btn'>რეზიუმეს დამატება</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage