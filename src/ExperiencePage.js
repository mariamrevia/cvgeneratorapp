import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LargeInput from './components/LargeInput'
import Header from './components/Header'
import Cvsection from './components/cvsection'
import "./experience.css"
import Dates from './components/dates'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

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
      experience: [{
        position: "",
        employer: "",
        start_date: "",
        due_date: "",
        description: ""
      }],

    }
  )

 



  function handleChange(e, index) {
    e.preventDefault()
    console.log(index, e.target.name)
    const { name, value } = e.target

    const newExperience = [...formData.experience]
    newExperience[index][name] = value


    const newFormData = {
      ...formData,
      experience: newExperience
    }

    localStorage.setItem("formData", JSON.stringify(newFormData))
    const error = validate(newFormData)
    setFormData(newFormData)
    setError(error)
    console.log(error)


  }


  const handleClick = useCallback(() => {
    console.log("sgsgsg")
    setFormData({
      ...formData,
      experience: [
        ...formData.experience, {
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
    data.experience.forEach((exp, index) => {
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
        errors.edue_date = "აუცილებელია შეავსოთ ველი"
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

    console.log (error)
    
    navigate("/Education", {
      state: {
        formDatas: formData
      }
    })

  }
  // useEffect(() => {
  //   const experience = localStorage.getItem("formData")
  //   console.log (experience)
  //   if (experience) {
  //     setFormData(JSON.parse(experience))
  //   }
  // }, [])


  return (
    <div className='Main--div'>
      <section className='exp-section'>
        <Header
          name="გამოცდილება"
        />

        <form onSubmit={handleSubmit}>
          {formData && formData.experience.map((experience, index) => {
            return (
              <div key={index} className='exp-section-div'>

                <LargeInput
                  formDataName="position"
                  name="თანამდებობა"
                  note="მინიმუმ 2 სიმბოლო"
                  handleChange={(e) => handleChange(e, index)}
                  value={experience.position}
                  error={error[index] && error[index].position}

                />
                <LargeInput
                  formDataName="employer"
                  name="დამსაქმებელი"
                  note="მინიმუმ 2 სიმბოლო"
                  handleChange={(e) => handleChange(e, index)}
                  value={experience.employer}
                  error={error[index] && error[index].employer}
                />

                <div className='dates'>
                  <Dates
                    name="start_date"
                    handleChange={(e) => handleChange(e, index)}
                    value={experience.start_date}
                    error={error[index] && error[index].start_date}
                  />
                  <Dates
                    name="due_date"
                    handleChange={(e) => handleChange(e, index)}
                    value={experience.due_date}
                    error={error[index] && error[index].due_date}
                  />
                </div>

                <div className='Description-div'>
                  <h2 className='Description-h2'>აღწერა</h2>
                  <input
                    type="text"
                    placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
                    className='Description-input'
                    name="description"
                    value={experience.description}
                    onChange={(e) => handleChange(e, index)}
                    error={error[index] && error[index].description}
                  ></input>

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