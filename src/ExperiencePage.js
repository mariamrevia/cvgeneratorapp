import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import LargeInput from './components/LargeInput'
import Header from './components/Header'
import Cvsection from './components/cvsection'
import "./experience.css"

const ExperiencePage = () => {
  const location = useLocation()
  const { formDatas } = location.state
  const { imageUploaded } = location.state

  const [formData, setFormData] = useState({
    name: formDatas.name,
    surname: formDatas.surname,
    email: formDatas.email,
    phone_number: formDatas.phone_number,
    image: formDatas.image,
    about_me: formDatas.about_me,
    experience: [{
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: ""
    }],

  })


  const handleClick = () => {


  }

  const handleChange = (e) => {
    e.preventDefault()
    const {value , name} = e.target
    const newFormData = {
      ...formData,
       experience: [{
        ...formData.experience[0],
        [name]:value
      }]
    }
    setFormData(newFormData)
    console.log(formData)
  }

  return (
    <div className='Main--div'>

      <section className='exp-section'>
        <Header
          name="გამოცდილება"
        />
        {/* {formData.experience.forEach((experience) => {
  console.log (experience.position)
})} */}

        <div className='exp-section-div'>
          <LargeInput
            formDataName="position"
            name="თანამდებობა"
            note="მინიმუმ 2 სიმბოლო"
            handleChange={handleChange}
            value={formData.experience.position}

          />
          <LargeInput
            formDataName="employer"
            name="დამსაქმებელი"
            note="მინიმუმ 2 სიმბოლო"
            handleChange={handleChange}
            value={formData.experience.employer}
          />
          <div className='data--div'>
            <div>
              <h2 className='startDate'>დაწყების თარიღი</h2>
              <input
                type="date"
                className='start-data-input'
                name="start_date"
                onChange={handleChange}

              ></input>
            </div>
            <div>
              <h2 className='endDate'>დასრულების თარიღი</h2>
              <input
                type="date"
                className='end-data-input'
                name="due_date"
                onChange={handleChange}

              ></input>
            </div>
          </div>
          <div className='Description-div'>
            <h2 className='Description-h2'>აღწერა</h2>
            <input
              placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
              className='Description-input'
              name="description"
              onChange={handleChange}
              ></input>
          </div>
          <div className='btn-section-div'>
            <hr className='hr-2'></hr>
            <button
              onClick={handleClick}
              className='add-btn'>მეტი გამოცდილების დამატება</button>
          </div>
        </div>
        <section className='btn-section'>
          <div className='button-section-div'>
            <button className='back-button'>უკან</button>
            <button className='next--button'>შემდეგი</button>
          </div>
        </section>
      </section>


      <section className='cv-section'>
        <Cvsection
          name={formData.name}
          surname={formData.surname}
          email={formData.email}
          phone_number={formData.phone_number}
          about_me={formData.about_me}
          imageUploaded={imageUploaded}

        />


      </section>


    </div>
  )
}

export default ExperiencePage