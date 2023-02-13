import React from 'react'
import { useLocation } from 'react-router-dom'
import logo1 from "./images/Logo-1.png"
import emailicon from "./images/Vector.png"
import { BsTelephoneFill } from "react-icons/bs"
import "./cv.css"

const Cvpage = () => {

    const location = useLocation()
    const { cv = {} } = location.state || {};

    console.log(cv)
    return (
        <div>

            <div className='cv--div'>
                <div className='cv--main-div '>
                    <div className='cv-section--1'>
                        <div className='cv-namesurname-div'>
                            <h2>{cv.name} </h2>
                            <h2 className='cv-surname'>{cv.surname}</h2>
                        </div>
                        <div className='cv-email-div'>
                            <img src={emailicon}></img>
                            <p className='cv-email'>{cv.email}</p>
                        </div>
                        <div className='cv-phoneNumber-div'>
                            <BsTelephoneFill />
                            <p className='cv-phoneNumber'>{cv.phone_number}</p>
                        </div>


                        <div className='cv-aboutme-div'>

                            <h2 className='cv-aboutme-header'>ჩემ შესახებ</h2>
                            <p className='cv-aboutme-text'>{cv.about_me}</p>
                        </div>

                        <div>


                            <hr className='cv-hr'></hr>




                            <h2 className='cv-experience-hd'>გამოცდილება</h2>


                            {
                                cv.experiences.map((exp, index) => {
                                    return (

                                        <div key={index} className='cv-experience-div'>

                                            <div className='cv-posempl-div'>
                                                <h3 className='cv-position'>{exp.position}</h3>
                                                <h2 className="cv-employer">{exp.employer}</h2>
                                            </div>
                                            <div className='cv-date-diiv'>
                                                <span className='cv-start-date'>{exp.start_date}</span>
                                                <span className='cv-due-date'>{exp.due_date}</span>
                                            </div>
                                            <div className='cv-description--div'>
                                                <span className='cv-description'>{exp.description}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>

                            <hr className='cv-hr'></hr>



                            <h2 className='cv-experience-hd'>განათლება</h2>



                            {
                                cv.educations.map((edu, index) => {
                                    return (
                                        <div key={index} className='cv-experience-div'>
                                            <div className='cv-posempl-div'>
                                                <h3 className='cv-position'>{edu.institute}</h3>
                                                <h2 className="cv-employer">{edu.degree}</h2>
                                            </div>
                                            <div className='cv-date-diiv'>
                                                <p className='cv-due-date'>{edu.due_date}</p>
                                            </div>
                                            <div className='cv-description--div'>
                                                <p className='cv-description'>{edu.description}</p>
                                            </div>




                                        </div>
                                    )

                                })
                            }


                        </div>
                    </div>
                    <div className='cv--img'>
                        <img className="uploadedphoto" src={`https://resume.redberryinternship.ge/${cv.image}`} alt=""></img>
                    </div>

                <img className="Logo--cv" src={logo1} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Cvpage