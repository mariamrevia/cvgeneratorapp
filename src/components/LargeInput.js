import React from 'react'
import "./LargeInput.css"
import { AiFillCheckCircle } from "react-icons/ai"


const LargeInput = ({
  name,
  formDataName,
  note,
  handleChange,
  formData,
  error,
  value
}) => {

  function handleClass() {
    if (!formData) {
      return "LargeInput-input-div"
    } else if (error) {
      return "err-LargeInput-input"
    } else if (!error) {
      return "LargeInput-input-correct" 
    }
  }
  return (
    <div className='LargeInput-div'>
      <h2 className={error ? "err-LargeInput-header" : 'LargeInput-header'}>{name}</h2>
      <div className={` ${handleClass()}`}>
        <input
          name={formDataName}
          onChange={handleChange}
          className="LargeInput-input"
          value={value}
        >
        </input>
        {formData && !error ?<AiFillCheckCircle className='BsCheckCircle'/> : ""
         }
      </div>
      <p className='LargeInput-note'> {error ? error : note} </p>
    </div>

  )
}

export default LargeInput