import React, { useState } from 'react'
import "./PersonalInfo.css"
import Smallinputs from './components/Smallinputs'
import LargeInput from './components/LargeInput'
import { BsChevronLeft, BsTelephoneFill } from "react-icons/bs"
import emailicon from "./images/Vector.png"
const PersonalInfo = () => {



    const [imageUploaded, setImageUploaded] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone_number: "",
        image: "" ,
        about_me:"" 

    })

    console.log(formData)

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        const newFormData = { ...formData, [name]: value }
        setFormData(newFormData)
    }

    const handleImage = (e) => {

        setFormData((prevValues) => {
            return {
                ...prevValues,
                image: e.target.files[0]
            }
        })
        setImageUploaded(URL.createObjectURL(e.target.files[0]))
        console.log(imageUploaded)
    }

    return (
        <form>
            <div className='Main--div'>
                <section className='info-section'>
                    <div className='header--div'>
                        <button className='back-btn'><BsChevronLeft

                            className='backicon'
                        /></button>
                        <h1 className='header'>პირადი ინფო</h1>
                    </div>

                    <div className='info-section-div'>
                        <hr className='hr2'></hr>
                        <Smallinputs
                            name="სახელი"
                            note="მინიმუმ 2 ასო, ქართული ასოებით"
                            surname="გვარი"
                            formDataName="name"
                            formDataSurname="surname"
                            handleChange={handleChange}
                            value1={formData.name}
                            value2={formData.surname}
                        />

                        <div className='photo--div'>
                            <h1 className='photo-note'>პირადი ფოტოს ატვირთვა</h1>
                            <label className='photo--label'>
                                <input
                                    onChange={handleImage}
                                    type="file"
                                    name='image'
                                    multiple accept='image/png, image/jpeg , image/webp'
                                    className='photo-upload-btn'
                                />
                                ატვირთვა
                            </label>

                        </div>

                        <div className='about-div'>
                            <h2 className='aboutme-header'>ჩემ შესახებ (არასავალდებულო)</h2>
                            <input 
                            name='about_me'
                            onChange={handleChange}
                            className='about-input'></input>

                        </div>

                        <LargeInput
                            name="ელ.ფოსტა"
                            note="უნდა მთავრდებოდეს @redberry.ge-ით"
                            formDataName="email"
                            handleChange={handleChange}
                        />

                        <LargeInput
                            name="მობილურის ნომერი"
                            note="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
                            formDataName="phone_number"
                            handleChange={handleChange}
                        />
                    </div>
                </section>




                <section className='cv-section'>
                    <div className='cv--maindiv'>
                        <div className='cv-section-1'>
                            <div className='cv-namesurname-div'>
                                <h2>{formData.name} </h2>
                                <h2 className='cv-surname'>{formData.surname}</h2>
                            </div>
                            <div className='cv-email-div'> 
                            {formData.email &&  <img src={emailicon }></img>} 

                            
                                <p className='cv-email'>{formData.email}</p>
                            </div>
                            <div className='cv-phoneNumber-div'>
                            {
                                formData.phone_number &&  <BsTelephoneFill />
                            }
                               
                                <p className='cv-phoneNumber'>{formData.phone_number}</p>
                            </div>
                            <div className='cv-aboutme-div'>
                            {formData.about_me  && 
                            <h2 className='cv-aboutme-header'>ჩემ შესახებ</h2>
                            }

                            <p className='cv-aboutme-text'>{formData.about_me}</p>
                           

                            </div>
                        </div>

                        <img className="uploadedphoto" src={imageUploaded} alt=""></img>
                    </div>

                </section>
            </div>

        </form>
    )
}

export default PersonalInfo