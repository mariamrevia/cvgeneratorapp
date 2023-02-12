import React from 'react'
import { BsChevronDown, BsChevronUp } from "react-icons/bs"




const Degrees = ({
    degrees,
    isActive,
    degreeSelected,
    setDegreeSelected,
    setIsActive,
    value,
    setFormData,
    name,
    handleChange
}) => {


    const handleClick = (name) => {
        setDegreeSelected(name)
        setIsActive(false)

        setFormData((prevValue) => {
            return (
                {
                    ...prevValue,
                    educations: prevValue.educations.map((edu) => {
                        return { ...edu, degree: name }
                    })
                }
            )
        })


    }
    return (
        <div className='degree-div'>
            <h2 className='degree-hd'>ხარისხი</h2>
            <div

                className='degree-dropdown'>

                <div
                    onChange={handleChange}
                    onClick={(e) => {
                        setIsActive(!isActive)

                    }}
                    className='dropdown-btn'>
                    {degreeSelected ? degreeSelected : "აირჩიეთ ხარისხი"
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
                            degrees.map((degree, index) => {
                                return (
                                    <div


                                        name={name}
                                        value={value}
                                        onClick={() => {
                                            handleClick(degree.title, degree.id, index)
                                        }}
                                        className="dropdownItem"
                                        key={index}>
                                        {degree.title}</div>
                                )
                            })}
                    </div>}
            </div>
        </div>
    )
}

export default Degrees