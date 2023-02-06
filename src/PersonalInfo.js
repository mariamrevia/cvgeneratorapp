import React, { useState } from 'react'
import "./PersonalInfo.css"
import Smallinputs from './components/Smallinputs'
import LargeInput from './components/LargeInput'
import { BsChevronLeft, BsTelephoneFill, BsFillExclamationTriangleFill } from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'
import emailicon from "./images/Vector.png"
import { AiFillCheckCircle } from "react-icons/ai"




const PersonalInfo = () => {
    const navigate = useNavigate()

    const [imageUploaded, setImageUploaded] = useState("")
    const [isSubmit, setIsSubmit] = useState(false)
    const [formErrors, setFormErrors] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone_number: "",
        image: "",
        about_me: ""

    })

    console.log(formData)

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        const newFormData = { ...formData, [name]: value }

        setFormData(newFormData)
        if (formData) {
            const errors = validate(formData)
            setFormErrors(errors)
        }


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
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        setIsSubmit(true)
        
        const errors = validate(formData)
        setFormErrors(errors)
        if (Object.keys(errors).length !== 0) {
            return
        }
        navigate("/experiencePage", {
            state: { formDatas: formData }
        })
    }


    const validate = (data) => {


        const errors = {}
        const regexalphabet = /^[ა-ჰ]+$/;
        const regexNumber = /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/
        const regexEmail = /.*\@redberry.ge$/gm;

        console.log(errors)


        if (!data.name) {
            errors.name = "აუცილებელია შეავსოთ ველი"
        } else if (!regexalphabet.test(data.name)) {
            errors.name = "გამოიყენეთ ქართული ასოები"
        } else if (data.name.length < 2) {
            errors.name = "აუცილებელია მინიმუმ 2 სიმბოლო"
        }

        if (!data.surname) {
            errors.surname = "აუცილებელია შეავსოთ ველი"
        } else if (!regexalphabet.test(data.surname)) {
            errors.surname = "გამოიყენეთ ქართული ასოები"
        } else if (data.surname.length < 2) {
            errors.surname = "აუცილებელია მინიმუმ 2 სიმბოლო"
        }

        if (!data.email) {
            errors.email = "აუცილებელია შეავსოთ ველი"
        } else if (!regexEmail.test(data.email)) {
            errors.email = "უნდა მთავრდებოდეს @redberry.ge-ით"
        }

        if (!data.phone_number) {
            errors.phone_number = "აუცილებელია შეავსოთ ველი"
        } else if (!regexNumber.test(data.phone_number)) {
            errors.phone_number = "არ აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
        }

        if (!data.image) {
            errors.image = "ატვირთეთ ფოტო"
        }

      
        return errors;
    }

    return (
        <form onSubmit={handleSubmit}>
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
                            formData1={formData.name}
                            formData2={formData.surname}
                            error1={formErrors.name}
                            error2={formErrors.surname}

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
                                    error={formErrors.image}
                                />
                                ატვირთვა
                            </label>
                            {formErrors.image && !formData.image ?<BsFillExclamationTriangleFill
                            className='Exclamation-icon-err'/>: <AiFillCheckCircle className="BsCheckCircle-img"/>}
                               
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
                            error={formErrors.email}
                            formData={formData.email}

                        />

                        <LargeInput
                            name="მობილურის ნომერი"
                            note="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
                            formDataName="phone_number"
                            handleChange={handleChange}
                            error={formErrors.phone_number}
                            formData={formData.phone_number}
                        />
                    </div>

                    <button className='next-btn'>შემდეგი</button>

                </section>


                {/* /* ---------------------------cv-section------------------------------------- */}
                <section className='cv-section'>
                    <div className='cv--maindiv'>
                        <div className='cv-section-1'>
                            <div className='cv-namesurname-div'>
                                <h2>{formData.name} </h2>
                                <h2 className='cv-surname'>{formData.surname}</h2>
                            </div>
                            <div className='cv-email-div'>
                                {formData.email && <img src={emailicon}></img>}
                                <p className='cv-email'>{formData.email}</p>
                            </div>
                            <div className='cv-phoneNumber-div'>
                                {
                                    formData.phone_number && <BsTelephoneFill />
                                }

                                <p className='cv-phoneNumber'>{formData.phone_number}</p>
                            </div>

                            {formData.about_me &&
                                <div className='cv-aboutme-div'>
                                    {formData.about_me &&
                                        <h2 className='cv-aboutme-header'>ჩემ შესახებ</h2>
                                    }

                                    <p className='cv-aboutme-text'>{formData.about_me}</p>
                                </div>
                            }
                        </div>

                        <img className="uploadedphoto" src={imageUploaded} alt=""></img>
                    </div>
                </section>

            </div>

        </form>
    )
}

export default PersonalInfo