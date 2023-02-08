import React, { useEffect, useState } from 'react'
import "./PersonalInfo.css"
import Smallinputs from './components/Smallinputs'
import Header from './components/Header'
import LargeInput from './components/LargeInput'
import Cvsection from './components/cvsection'
import { BsFillExclamationTriangleFill } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
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
    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("formData"))
        console.log(data)
        if (data) {
            setFormData(data)
        }

    }, [])

    // useEffect(() => {
    //     localStorage.setItem("formData", JSON.stringify(formData))
    // }, [formData])

    useEffect(() => {
        const image = JSON.parse(localStorage.getItem("image"))
        if (image) {
            setImageUploaded(image)
        }
    }, [])



    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        const newFormData = { ...formData, [name]: value }

        setFormData(newFormData)

        localStorage.setItem("formData", JSON.stringify(formData))
        if (formData) {
            const errors = validate(formData)
            setFormErrors(errors)
        }


    }

    const handleImage = (e) => {
        e.preventDefault()
        // const { image } = e.target
        // const newImage = { ...formData, [image]: e.target.files[0] }
        // setFormData(newImage)

        setFormData((prevValues) => {
            return {
                ...prevValues,
                image: e.target.files[0]
            }
        })

        setImageUploaded(URL.createObjectURL(e.target.files[0]))
        localStorage.setItem("image", JSON.stringify(imageUploaded))
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
            state: {
                formDatas: formData, imageUploaded
            }
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
                    <Header
                        name="პირადი ინფო"
                    />

                    <div className='info-section-div'>
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
                            value1={formData.name}
                            value2={formData.surname}
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
                            {formErrors.image && !formData.image ?
                                <BsFillExclamationTriangleFill
                                    className='Exclamation-icon-err' /> : <AiFillCheckCircle className="BsCheckCircle-img" />}
                        </div>

                        <div className='about-div'>
                            <h2 className='aboutme-header'>ჩემ შესახებ (არასავალდებულო)</h2>
                            <input
                                name='about_me'
                                onChange={handleChange}
                                className='about-input'
                                value={formData.about_me}
                                ></input>
                              
                        </div>

                        <LargeInput
                            name="ელ.ფოსტა"
                            note="უნდა მთავრდებოდეს @redberry.ge-ით"
                            formDataName="email"
                            handleChange={handleChange}
                            error={formErrors.email}
                            formData={formData.email}
                            value={formData.email}

                        />
                        <LargeInput
                            name="მობილურის ნომერი"
                            note="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
                            formDataName="phone_number"
                            handleChange={handleChange}
                            error={formErrors.phone_number}
                            formData={formData.phone_number}
                            value={formData.phone_number}
                        />
                    </div>
                    <button className='next-btn'>შემდეგი</button>
                </section>
                {/* /* ---------------------------cv-section------------------------------------- */}
                <section className='cv-section'>
                    {

                        <Cvsection
                            name={formData.name}
                            surname={formData.surname}
                            email={formData.email}
                            phone_number={formData.phone_number}
                            about_me={formData.about_me}
                            imageUploaded={imageUploaded}

                        />
                    }
                </section>

            </div>

        </form>
    )
}

export default PersonalInfo