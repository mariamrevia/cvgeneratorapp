import React from 'react'
import "./Smallinput.css"

const Smallinputs = ({
    name,
    surname,
    note,
    formDataName,
    formDataSurname,
    handleChange,
    value1,
    value2,
   
}) => {

    return (
        <div className='nameSurname--div'>
            <div className='smallinput-div'>
                <h2 className='input--name'> {name}</h2>
                <input 
                value={value1}
                onChange={handleChange}
                name={formDataName}
                className='small--input'></input>
                <p className='input-note'> {note}</p>

            </div>
            <div className='surnameinput-div'>
                <h2 className='input--name'> {surname}</h2>
                <input 
                value={value2}
                onChange={handleChange}
                name={formDataSurname}
                className='small--input'></input>
                <p className='input-note'> {note}</p>

            </div>

        </div>

    )
}

export default Smallinputs