import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LargeInput from './components/LargeInput'
import Dates from './components/dates'
import Cvsection from './components/cvsection'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
import "./education.css"
import Degrees from './components/degrees'
import { BsChevronDown, BsChevronUp } from "react-icons/bs"

const Education = () => {
    const [degrees, setDegrees] = useState([])
    const [degreeSelected, setDegreeSelected] = useState("")
    const [isActive, setIsActive] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const { formDatas = {} } = location.state || {}


    console.log(formDatas)
    const [formData, setFormData] = useState(
        {
            name: formDatas.name || "",
            surname: formDatas.surname || "",
            email: formDatas.email || "",
            phone_number: formDatas.phone_number || "",
            image: formDatas.image || "",
            about_me: formDatas.about_me || "",


            experience: formDatas.experience ? formDatas.experience.map(exp => ({
                position: exp.position,
                employer: exp.employer,
                start_date: exp.start_date,
                due_date: exp.due_date,
                description: exp.description,
            })) : [{
                position: "",
                employer: "",
                start_date: "",
                due_date: "",
                description: "",
            }],

            educations: formDatas.educations ? formDatas.educations.map(edu => ({
                institute: edu.institute,
                degree: edu.degree,
                due_date: edu.due_date,
                description: edu.description,
            })) : [{
                institute: "",
                degree: "",
                due_date: "",
                description: "",
            }],
        }
    );








    const fetchdegrees = () => {
        fetch("https://resume.redberryinternship.ge/api/degrees")
            .then((res) => res.json())
            .then((data) => setDegrees(data))

    }
    useEffect(() => {
        fetchdegrees()
    }, [])



    console.log(degrees)
    console.log(formData)


    // const handleClick = () => {

    // }
    const handleChange = (e,index) => {
        e.preventDefault ()
        const {name , value} =e.target
        const newEducation ={ ...formData.educations}
        newEducation[index][name]=value

        const newFormData = {
            ...formData,
            educations:newEducation
        }
        

    }

    const handleaddform =  useCallback (() => {
        setFormData ({
            ...formData ,
            educations:[
                ...formData.educations, {
                    institute: "",
                    degree: "",
                    due_date: "",
                    description: "",

                }
            ]
        })


    })

    return (

        <div className='Main--div'>
            <section className='edu-section'>
                <Header
                    name="განათლება"
                />
                <form>
                    {formData && formData.educations.map((edu, index) => {
                        return (
                            <div key={index} className="edu-section-div">
                                <LargeInput
                                    formDataName="institute"
                                    name="სასწავლებელი"
                                    note="მინიმუმ 2 სიმბოლო"
                                    value={edu.institute}
                                    handleChange={(e) => handleChange(e, index)}

                                />

                                <div className='date'>
                                    <Degrees
                                        value={edu.degree}
                                        degrees={degrees}
                                        degreeSelected={degreeSelected}
                                        isActive={isActive}
                                        setIsActive={setIsActive}
                                        setDegreeSelected={setDegreeSelected}
                                        setFormData={setFormData}
                                        handleChange={(e) => handleChange(e, index)}
                                    />
                                    <Dates
                                        value={edu.due_date}
                                        name="დამთავრების რიცხვი"
                                        handleChange={(e) => handleChange(e, index)}
                                    />

                                </div>
                                <div
                                    className='description-edu-div'>
                                    <h2
                                        className='description-hd-edu'>აღწერა</h2>
                                    <textarea
                                        className='description-edu'
                                        handleChange={(e) => handleChange(e, index)}
                                        value={edu.description}
                                    />
                                </div>
                                <hr
                                    className='hr-2'></hr>
                            </div>
                        )
                    })}
                    <div
                        className='btn--section--div'>
                        <button
                            type="button"
                            onClick={() => handleaddform()}
                            className='add-btn'>მეტი გამოცდილების დამატება</button>
                    </div>

                </form>
            </section>
            <section className='cv-section'>
                <Cvsection />

            </section>
        </div>
    )
}

export default Education