import React from 'react'
import emailicon from "../images/Vector.png"
import { BsTelephoneFill } from "react-icons/bs"
import "./cvsection.css"
import logo1 from "../images/Logo-1.png"

const Cvsection = ({
    name,
    surname,
    email,
    phone_number,
    about_me,
    imageUploaded,
    formData1,
    formData2


}) => {

    return (
        <div className='cv-div'>
            <div className='cv--maindiv'>
                <div className='cv-section-1'>
                    <div className='cv-namesurname-div'>
                        <h2>{name} </h2>
                        <h2 className='cv-surname'>{surname}</h2>
                    </div>
                    <div className='cv-email-div'>
                        {email && <img src={emailicon}></img>}
                        <p className='cv-email'>{email}</p>
                    </div>
                    <div className='cv-phoneNumber-div'>
                        {phone_number && <BsTelephoneFill />}
                        <p className='cv-phoneNumber'>{phone_number}</p>
                    </div>

                    {about_me &&
                        <div className='cv-aboutme-div'>

                            {about_me && <h2 className='cv-aboutme-header'>ჩემ შესახებ</h2>}
                            <p className='cv-aboutme-text'>{about_me}</p>
                        </div>
                    }
                    <div>
                        {formData1 ?

                            <hr className='cv-hr'></hr> : ""
                        }

                        {
                            formData1 &&

                            <h2 className='cv-experience-hd'>გამოცდილება</h2>
                        }

                        {
                            formData1 && formData1.experiences.map((exp, index) => {
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
                        {formData2 ?
                            <hr className='cv-hr'></hr> : ""}
                        {

                            formData2 ?
                                <h2 className='cv-experience-hd'>განათლება</h2> : ""
                        }


                        {
                            formData2 && formData2.educations.map((edu, index) => {
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
                <div >
                    <img className="uploadedphoto" src={imageUploaded} alt=""></img>
                </div>

            </div>
            <img className="Logo" src={logo1} alt=""></img>
        </div>
    )
}

export default Cvsection