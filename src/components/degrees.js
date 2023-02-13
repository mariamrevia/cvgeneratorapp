import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from "react-icons/bs"




const Degrees = ({
    degrees,
    // isActive,
 
    // setIsActive,
    degreeTitle,
    value,
    name,
    handleChange,
    error,
    index

}) => {
    const [isActive, setIsActive] = useState(false)
    console.log(degreeTitle)
    // console.log (index)

    // const handleClick = (name, id) => {

    //     setDegreeSelected(name)
    //     setIsActive(false)

    //  degreeArray[index] = name
    //     setDegreeArray (degreeArray)

    //     setFormData((prevValue) => {
    //         return (
    //             {
    //                 ...prevValue,
    //                 educations: prevValue.educations.map((edu) => {
    //                     return { ...edu, degree: name }
    //                 })
    //             }
    //         )
    //     })


    //  }

    return (
        <div className='degree-div'>
            <h2 className={error ? "degree-hd-err " : 'degree-hd'}>ხარისხი</h2>
            <div
                className={degreeTitle ? "degree-dropdown-sel" : 'degree-dropdown'}>
                <div


                    onClick={(e) => {
                        setIsActive(!isActive)
                    }}
                    className='dropdown-btn'>
                    {degreeTitle ?degreeTitle : "აირჩიეთ ხარისხი"
                    }
                    {
                        !isActive ?
                            <BsChevronDown /> :
                            <BsChevronUp />
                    }
                </div>
                {isActive &&
                    <div

                        className='dropdown--content'>
                        {
                            degrees.map((degree) => {
                                return (
                                    <div


                                        value={value}
                                        onClick={() => {
                                            handleChange(degree.title, degree.id, index)
                                        }}
                                        className="dropdownItem"
                                        key={degree.id}>
                                        {degree.title}</div>
                                )
                            })}
                    </div>}
                <p className='note '>{error ? error : ""}</p>
            </div>
        </div>
    )
}

export default Degrees