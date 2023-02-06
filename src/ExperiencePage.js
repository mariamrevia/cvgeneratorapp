import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import LargeInput from './components/LargeInput'
import "./experience.css"

const ExperiencePage = () => {
  const location = useLocation()
  const { formDatas } = location.state

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
    education: [{
      institute: "",
      degree: "",
      degree: "",
      due_date: "",
      description: ""
    }]
  })

  return (
    <div className=''>
      <section className='exp-section'>
        <header></header>
        <div className='exp-section-div'>
          <LargeInput
            formDataName={formData.experience.position}
            name="თანამდებობა"
            note="მინიმუმ 2 სიმბოლო"
          />
          <LargeInput
            formDataName={formData.experience.employer}
            name="დამსაქმებელი"
            note="მინიმუმ 2 სიმბოლო"
          />
          <div className='data--div'>
            <div>
              <h2 className='startDate'>დაწყების თარიღი</h2>
              <input type="date"
                className='start-data-input'
              ></input>
            </div>
            <div>
              <h2 className='endDate'>დაწყების თარიღი</h2>
              <input type="date"
                className='end-data-input'
              ></input>
            </div>
          </div>
<div className='Description-div'>
  <h2 >აღწერა</h2>
  <input 
  placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
  className='Description-input'></input>
</div>
        </div>
      </section>
      <section>

      </section>
    </div>
  )
}

export default ExperiencePage