import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LargeInput from './components/LargeInput'
import Dates from './components/dates'
import Cvsection from './components/cvsection'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
import "./education.css"
import Degrees from './components/degrees'


const Education = () => {
    const [degrees, setDegrees] = useState([])
    const [error, setError] = useState([])
    const [file, setFile] = useState()
    const [degreeArray, setDegreeArray] = useState([])
    const [cv, setCV] = useState({})

    const navigate = useNavigate()
    const location = useLocation()
    const { formDatas = {} } = location.state || {}
    const { imageUploaded } = location.state || {}
    const [formData, setFormData] = useState(
        {
            name: formDatas.name || "",
            surname: formDatas.surname || "",
            email: formDatas.email || "",
            phone_number: formDatas.phone_number || "",
            image: formDatas.image || "",
            about_me: formDatas.about_me || "",

            educations: [{
                institute: "",
                degree_id: "",
                due_date: "",
                description: "",
            }],
            experiences: formDatas.experiences ? formDatas.experiences.map(exp => ({
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


        });

    const fetchdegrees = () => {
        fetch("https://resume.redberryinternship.ge/api/degrees")
            .then((res) => res.json())
            .then((data) => setDegrees(data))

    }
    useEffect(() => {
        fetchdegrees()
    }, [])

    useEffect(() => {
        const data = localStorage.getItem("eduData")
        if (data) {
            setFormData(JSON.parse(data))
        }

    }, [])



    useEffect(() => {
        const degrees = localStorage.getItem("degree")
        if (degrees) {

            setDegreeArray(JSON.parse(degrees))
        }
    }, [])



    const handleChange = ((e, index) => {
        e.preventDefault()
        const { name, value } = e.target
        const newEducation = [...formData.educations]
        newEducation[index][name] = value

        const newFormData = {
            ...formData,
            educations: newEducation
        }

        setFormData(newFormData)
        localStorage.setItem("eduData", JSON.stringify(newFormData))

        const error = validate(formData)
        setError(error)

        console.log(error)
        console.log(formData)

        // console.log(formData)

    })


    const handleaddform = useCallback(() => {
        setFormData({
            ...formData,
            educations: [
                ...formData.educations, {
                    institute: "",
                    degree_id: "",
                    due_date: "",
                    description: "",

                }
            ]
        })


    }, [formData])




    const handleDegree = (name, id, index) => {
        console.log(name, id, index, degreeArray)
        degreeArray[index] = name
        setDegreeArray(degreeArray)
        console.log(degreeArray[index])
        const newFormData = [...formData.educations]
        newFormData[index]["degree_id"] = id
        setFormData((prevValue) => {
            return (
                {
                    ...prevValue,
                    educations: newFormData
                }
            )
        })

        console.log(formData)

        localStorage.setItem("degree", JSON.stringify(degreeArray))
    }

    useEffect(() => {

        let file = new File([imageUploaded], "name");
        setFile(file)
    }, [imageUploaded])


    function dataURLtoFile(dataurl) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], "filename", { type: mime });
    }
    let image = dataURLtoFile(imageUploaded)
    console.log(image)



    const handleSubmit = (e) => {
        e.preventDefault()
        const error = validate(formData)
        setError(error)
        console.log(error)
        if (Object.keys(error[0]).length !== 0) {
            return
        }

        console.log(file)

        console.log("ffd")
        const Data = new FormData()
        Data.append("name", formData.name)
        Data.append("surname", formData.surname)
        Data.append("image", image)
        Data.append("email", formData.email)
        Data.append("phone_number", formData.phone_number.replace(/\s/g, ""))
        Data.append("about_me", formData.about_me)
        formData.experiences.forEach((exp, index) => {
            Data.append(`experiences[${index}][position]`, exp.position)
            Data.append(`experiences[${index}][employer]`, exp.employer)
            Data.append(`experiences[${index}][start_date]`, exp.start_date)
            Data.append(`experiences[${index}][due_date]`, exp.due_date)
            Data.append(`experiences[${index}][description]`, exp.description)
        })

        formData.educations.forEach((edu, index) => {
            Data.append(`educations[${index}][institute]`, edu.institute)
            Data.append(`educations[${index}][degree_id]`, edu.degree_id)
            Data.append(`educations[${index}][due_date]`, edu.due_date)
            Data.append(`educations[${index}][description]`, edu.description)
        })


        fetch("https://resume.redberryinternship.ge/api/cvs", {
            method: "POST",
            headers: {
                Accept: "application/json",

            },
            body: Data
        })
            .then((res) => res.json())
            .then((data) => setCV(data))
            .catch((error) => console.log(error))
            console.log(cv)

    }

    useEffect (() => {
        if(Object.keys(cv).length !== 0) {

            navigate("/cvpage" ,{
            
                state: {
                    cv
                }
            })
            localStorage.clear ()
        }
    },[cv , navigate])



    const validate = (data) => {

        let formErrors = []
        data.educations.forEach((edu, index) => {
            const errors = {}

            if (!edu.institute) {
                errors.institute = "აუცილებელია შეავსოთ ველი"

            } else if (edu.institute.length < 2) {
                errors.institute = "აუცილებელია მინიმუმ 2 სიმბოლო"
            }

            if (!edu.degree_id) {
                errors.degree_id = "აუცილებელია შეავსოთ ველი"

            }
            if (!edu.due_date) {
                errors.due_date = "აუცილებელია შეავსოთ ველი"
            }
            if (!edu.description) {
                errors.description = "აუცილებელია შეავსოთ ველი"
            }
            formErrors[index] = errors
            console.log(formErrors)

        }

        )

        return formErrors

    }



    return (

        <div className='Main--div'>
            <section className='edu-section'>
                <Header
                    name="განათლება"
                />
                <form onSubmit={handleSubmit}>
                    {formData && formData.educations.map((edu, index) => {
                        return (
                            <div key={index} className="edu-section-div">
                                <LargeInput
                                    formData={edu.institute}
                                    formDataName="institute"
                                    name="სასწავლებელი"
                                    note="მინიმუმ 2 სიმბოლო"
                                    value={edu.institute}
                                    error={error[index] && error[index].institute}
                                    handleChange={(e) => handleChange(e, index)}

                                />

                                <div className='date'>
                                    <Degrees
                                        formData={formData}
                                        error={error[index] && error[index].degree_id}
                                        name="degree_id"
                                        value={edu.degree}
                                        degrees={degrees}
                                        degreeTitle={degreeArray[index]}
                                        setFormData={setFormData}
                                        index={index}
                                        handleChange={handleDegree}
                                        degreeArray={degreeArray}
                                        setDegreeArray={setDegreeArray}
                                    />
                                    <Dates
                                        value={edu.due_date}
                                        name="დამთავრების რიცხვი"
                                        formDataName="due_date"
                                        handleChange={(e) => handleChange(e, index)}
                                        error={error[index] && error[index].due_date}
                                    />

                                </div>
                                <div
                                    className='description-edu-div'>
                                    <h2
                                        className={error[index] && error[index].description ? "description-hd-edu-err  " : 'description-hd-edu'}>აღწერა</h2>
                                    <textarea
                                        name="description"
                                        className={error[index] && !error[index].description ? "description-edu--corr" : 'description-edu'}
                                        onChange={(e) => handleChange(e, index)}
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

                    <div className='btn-section-edu'>
                        <div className='button-section-div'>
                            <button
                                type='button'
                                onClick={() => navigate("/experiencePage")}
                                className='back-button'>უკან</button>
                            <button
                                type='submit'
                                className='next--button'>შემდეგი</button>
                        </div>
                    </div>



                </form>
            </section>
            <section className='cv-section'>
                <Cvsection
                    name={formData.name}
                    surname={formData.surname}
                    email={formData.email}
                    phone_number={formData.phone_number}
                    about_me={formData.about_me}
                    imageUploaded={imageUploaded}
                    formData1={formData}
                    formData2={formData}

                />

            </section>
        </div>
    )
}

export default Education