import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LargeInput from './components/LargeInput'
import Header from './components/Header'
import Cvsection from './components/cvsection'
import "./experience.css"
import Dates from './components/dates'
import { useCallback } from 'react'

const ExperiencePage = () => {
  const location = useLocation()
  const { formDatas = {} } = location.state || {};
  const { imageUploaded } = location.state || {}


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



// const handleChange = useCallback((e, index) => {
//   e.preventDefault()
//   console.log(index, e.target.name)
//   const { name, value } = e.target;
//   const newFormData = {
//     ...formData,
//     experience: [{
//       ...formData.experience[0],
//       [name]: value,
//       [index]: value
//     }]
//   }
//   setFormData(newFormData)
//   console.log(formData)
// }, [formData])


  // const handleClick = () => {
    
    //   const formDatas = location.state?.formDatas || {};
    //   console.log(formDatas)
    //   setFormData({
      //     ...formData,
      //     experience: [ {
        //       position: "",
        //       employer: "",
        //       start_date: "",
        //       due_date: "",
        //       description: ""
        //     }]
        //   });
        
        
        
  // };


  const handleChange = (e, index) => {
    e.preventDefault()
    console.log(index, e.target.name)
    const { name, value } = e.target;

    const newExperience = [...formData.experience];
    newExperience[index][name] = value;

    const newFormData = {
      ...formData,
      experience: newExperience
    }
    setFormData(newFormData)
    console.log(formData)
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
  
 

  return (
    <div className='Main--div'>

      <section className='exp-section'>
        <Header
          name="გამოცდილება"
        />

        <form >

          {formData && formData.experience.map((experience, index) => {

            return (
              <div key={index} className='exp-section-div'>

                <LargeInput
                  formDataName="position"
                  name="თანამდებობა"
                  note="მინიმუმ 2 სიმბოლო"
                  handleChange={(e) => handleChange(e, index)}
                  value={experience.position}

                />
                <LargeInput
                  formDataName="employer"
                  name="დამსაქმებელი"
                  note="მინიმუმ 2 სიმბოლო"
                  handleChange={(e) => handleChange(e, index)}
                  value={experience.employer}
                />

                <div className='dates'>
                  <Dates
                    name="start_date"
                    handleChange={(e) => handleChange(e, index)}
                    value={experience.start_date}
                  />
                  <Dates
                    name="due_date"
                    handleChange={(e) => handleChange(e, index)}
                    value={experience.due_date}
                  />
                </div>

                <div className='Description-div'>
                  <h2 className='Description-h2'>აღწერა</h2>
                  <input
                    placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
                    className='Description-input'
                    name="description"
                    value={experience.description}
                    onChange={(e) => handleChange(e, index)}
                  ></input>

                </div>

                {/* ------------ */}

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
        </form>



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
          formData={formData}

        />


      </section>
    </div>
  )
}

export default ExperiencePage