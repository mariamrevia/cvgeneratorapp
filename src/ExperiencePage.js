import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'

const ExperiencePage = () => {
  const location = useLocation()
  const { formDatas } = location.state

  const [formData , setFormData] = useState ({
    name:formDatas.name,
    surname:formDatas.surname,
    email:formDatas.email,
    phone_number:formDatas.phone_number ,
    image:formDatas.image,
    about_me:formDatas.about_me,
    experience:[{
      position:"" ,
      employer:"" ,
      start_date:"" ,
      due_date:"" ,
      description:""
    }],
    education:[{
      institute:"" ,
      degree:"" ,
      degree:"",
      due_date:"",
      description:""
    }]
  })

  return (
    <div>



    </div>
  )
}

export default ExperiencePage