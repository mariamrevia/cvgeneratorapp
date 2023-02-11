import React from 'react'
import { BsChevronDown, BsChevronUp } from "react-icons/bs"




const Degrees = ({
    degrees,
    isActive,
    degreeSelected,
    setDegreeSelected,
    setIsActive,
   

}) => {


    const handleClick = (name, id) => {
        setDegreeSelected(name)
        setIsActive(false)


    }
    return (
        <div className='degree-div'>
            <h2 className='degree-hd'>ხარისხი</h2>
            <div className='degree-dropdown'>

                <div
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
                    <div className='dropdown--content'>
                        {
                            degrees.map((degree) => {
                                return (
                                    <div
                                        onClick={() => {
                                            handleClick(degree.title, degree.id)
                                        }}
                                        className="dropdownItem"
                                        key={degree.id}>
                                        {degree.title} </div>
                                )
                            })}
                    </div>}
            </div>
        </div>
    )
}

export default Degrees