import React from 'react'
import "./LargeInput.css"

const LargeInput = ({
    name,
    formDataName ,
    note,
    handleChange
}) => {
  return (
    <div className='LargeInput-div'>
        <h2 className='LargeInput-header'>{name}</h2>
        <input 
        name={formDataName }
        onChange={handleChange}
        className='LargeInput-input'></input>
        <p className='LargeInput-note'> {note} </p>
    </div>

  )
}

export default LargeInput