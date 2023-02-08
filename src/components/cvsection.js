import React from 'react'
import emailicon from "../images/Vector.png"
import {BsTelephoneFill} from "react-icons/bs"

const Cvsection = ({
    name,
    surname,
    email,
    phone_number,
    about_me,
    imageUploaded,
    

}) => {
    return (
        <div>
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
                </div>
                <img className="uploadedphoto" src={imageUploaded} alt=""></img>
            </div>
        </div>
    )
}

export default Cvsection