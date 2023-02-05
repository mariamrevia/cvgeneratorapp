import React, { useState } from 'react'
import "./PersonalInfo.css"
import Smallinputs from './components/Smallinputs'
import { BsChevronLeft } from "react-icons/bs"

const PersonalInfo = () => {



    const [imageUploaded, setImageUploaded] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone_number: "",
        image: ""

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
                    </div>
                </section>




                <section className='cv-section'>
                    <h2>{formData.name} {formData.surname}</h2>
                    <img  className="uploadedphoto"src={imageUploaded} alt=""></img>

                </section>
            </div>

        </form>
    )
}

export default PersonalInfo