import React from 'react'
import "./date.css"

const Dates = ({

    name,
    handleChange,
    value,
    error,
    formDataName,
    formData,
 

}) => {

    const handleClass = () => {
       
        if (!value) {
           return "end-data-input"
       } 
         if (error) {
            return "start-data-input-err"
        } else if (!error) {
            return "start-data-input-correct"
        } 

    }
    return (
        <div>

            <div className='data--div'>
                <div >
                    <h2 className={error ? "startDate-error" : "startDate"}>{name}</h2>
                    <input
                        type="date"
                        className={`  ${handleClass()}`}
                        name={formDataName}
                        onChange={handleChange}
                        value={value}
                    ></input>
                    <p className="note" >{error ? error : ""}</p>
                </div>
            </div>
        </div>
    )
}

export default Dates