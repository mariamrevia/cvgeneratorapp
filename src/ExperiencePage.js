import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LargeInput from './components/LargeInput'
import Header from './components/Header'
import Cvsection from './components/cvsection'
import "./experiences.css"
import Dates from './components/dates'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsFillExclamationTriangleFill } from "react-icons/bs"

const ExperiencePage = () => {




  const navigate = useNavigate()
  const location = useLocation()
  const { formDatas = {} } = location.state || {};
  const { imageUploaded } = location.state || {}

  const [error, setError] = useState([])




  const [formData, setFormData] = useState(
    {
      name: formDatas.name || "",
      surname: formDatas.surname || "",
      email: formDatas.email || "",
      phone_number: formDatas.phone_number || "",
      image: formDatas.image || "",
      about_me: formDatas.about_me || "",
      experiences: [{
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: ""
      }],

    }
  )



  useEffect(() => {
    const experiences = localStorage.getItem("expData")
    console.log(experiences)
    if (experiences) {
      setFormData(JSON.parse(experiences))
    }
  }, [])


  function handleChange(e, index) {
    console.log(index, e.target.name)
    const { name, value } = e.target

    const newExperience = [...formData.experiences]
    newExperience[index][name] = value
    const newFormData = {
      ...formData,
      experiences: newExperience
    }
    e.preventDefault()

    localStorage.setItem("expData", JSON.stringify(newFormData))

    const error = validate(newFormData)
    setFormData(newFormData)
    setError(error)

    console.log(error)


  }


  const handleClick = useCallback(() => {
    console.log("sgsgsg")
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences, {
          position: "",
          employer: "",
          start_date: "",
          due_date: "",
          description: ""
        }]
    });

  }, [formData]);


  const validate = (data) => {

    let formError = []
    data.experiences.forEach((exp, index) => {
      const errors = {}

      if (!exp.position) {
        errors.position = "აუცილებელია შეავსოთ ველი"
      } else if (exp.position.length < 2) {
        errors.position = "აუცილებელია მინიმუმ 2 სიმბოლო"
      }

      if (!exp.employer) {
        errors.employer = "აუცილებელია შეავსოთ ველი"
      } else if (exp.employer.length < 2) {
        errors.employer = "აუცილებელია მინიმუმ 2 სიმბოლო"
      }
      if (!exp.start_date) {
        errors.start_date = "აუცილებელია შეავსოთ ველი"
      }
      if (!exp.due_date) {
        errors.due_date = "აუცილებელია შეავსოთ ველი"
      }
      if (!exp.description) {
        errors.description = "აუცილებელია შეავსოთ ველი"
      }

      formError[index] = errors
      console.log(formError)
    })
    return formError
  }


  const handleSubmit = (e) => {

    e.preventDefault()

    const error = validate(formData)
    setError(error)
    if (Object.keys(error[0]).length !== 0) {
      return
    }

    console.log(error)


    navigate("/Education", {
      state: {
        formDatas: formData, imageUploaded
      }
    })

  }


  return (
    <div className='Main--div'>
      <section className='exp-section'>
        <Header
          name="გამოცდილება"
        />

        <form onSubmit={handleSubmit}>
          {formData && formData.experiences.map((experience, index) => {
            return (
              <div key={index} className='exp-section-div'>

                <LargeInput
                  formDataName="position"
                  formData={experience.position}
                  name="თანამდებობა"
                  note="მინიმუმ 2 სიმბოლო"
                  handleChange={(e) => handleChange(e, index)}
                  value={experience.position}
                  error={error[index] && error[index].position}

                />
                {
                  error[index] &&  error[index].position ? <BsFillExclamationTriangleFill
                    className='Exclamation-icon-err-pos' /> : ""

                }
                <LargeInput
                  formDataName="employer"
                  formData={experience.employer}
                  name="დამსაქმებელი"
                  note="მინიმუმ 2 სიმბოლო"
                  handleChange={(e) => handleChange(e, index)}
                  value={experience.employer}
                  error={error[index] && error[index].employer}
                />
                 {
                  error[index] &&  error[index].employer? <BsFillExclamationTriangleFill
                    className='Exclamation-icon-err-emp' /> : ""

                }

                <div className='dates'>
                  <Dates
                    formData={formData.experiences.start_date}
                    formDataName="start_date"
                    name="დაწყები თარიღი"
                    handleChange={(e) => handleChange(e, index)}
                    value={experience.start_date}
                    error={error[index] && error[index].start_date}
                  />
                  <Dates
                    formData={formData.experiences.due_date}
                    formDataName="due_date"
                    name="დამთავრების თარიღი"
                    handleChange={(e) => handleChange(e, index)}
                    value={experience.due_date}
                    error={error[index] && error[index].due_date}
                  />
                </div>

                <div className='Description-div'>
                  <h2 className={error[index] && error[index].description ? 'Description-h2--err' : "Description-h2"}

                  >აღწერა</h2>
                  <textarea
                    type="text"
                    placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
                    className={error[index] && !error[index].description ? "Description-input--corr" : 'Description-input'}
                    name="description"
                    value={experience.description}
                    onChange={(e) => handleChange(e, index)}
                    error={error[index] && error[index].description}
                  />

                </div>
                <hr className='hr-2'></hr>
              </div>
            )

          })}

          <div className='btn--section--div'>

            <button
              type="button"
              onClick={() => handleClick()}
              className='add-btn'>მეტი გამოცდილების დამატება</button>
          </div>
          <div className='btn-section'>
            <div className='button-section-div'>
              <button
                type='button'
                onClick={() => navigate("/personalInfo")}
                className='back-button'>უკან</button>
              <button

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
        />
      </section>
    </div>
  )
}

export default ExperiencePage