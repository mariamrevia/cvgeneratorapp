import React from 'react'
import "./Smallinput.css"
import { BsCheckCircle } from "react-icons/bs"
import { AiFillCheckCircle } from "react-icons/ai"

const Smallinputs = ({
    name,
    surname,
    note,
    formDataName,
    formDataSurname,
    handleChange,
    formData1,
    formData2,
    value1,
    value2,
    error1,
    error2

}) => {

    function handleClass1() {
        if (!formData1) {
            return "small--input--div"
        } else if (error1) {
            return "err-small-input "
        } else if (!error1) {
            return "small--input--correct "

        }
    }

    function handleClass2() {
        if (!formData2) {
            return "small--input--div"
        } else if (error2) {
            return "err-small-input"
        } else if (!error2) {
            return "small--input--correct "
        }
    }

    return (
        <div className='nameSurname--div'>
            <div className='smallinput-div'>
                <h2 className={error1 ? "err-input--name" : 'input--name'}>{name}</h2>
                <div className={` ${handleClass1()}`}>
                    <input
                        onChange={handleChange}
                        name={formDataName}
                        value={value1}
                        className={"small--input"}></input>
                    {formData1 && !error1 ? <AiFillCheckCircle className='BsCheckCircle' /> : ""
                    }
                </div>
                <p className='input-note'> {error1 ? error1 : note}</p>
            </div>
            <div className='surnameinput-div'>
                <h2 className={error2 ? "err-input--name" : 'input--name'}> {surname}</h2>
                <div className={` ${handleClass2()}`}>
                    <input
                        value={value2}
                        onChange={handleChange}
                        name={formDataSurname}
                        className='small--input'></input>
                    {formData2 && !error2 ? <AiFillCheckCircle className='BsCheckCircle' /> : ""
                    }
                </div>
                <p className='input-note'>{error2 ? error1 : note}</p>

            </div>

        </div>

    )
}

export default Smallinputs