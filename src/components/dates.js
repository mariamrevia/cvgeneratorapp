import React from 'react'

const Dates = ({
    
    name,
    handleChange,
    value,
    error

}) => {


    return (
        <div>

            <div className='data--div'>
                <div >
                    <h2 className='startDate'>დაწყების თარიღი</h2>
                    <input
                        type="date"
                        className='start-data-input'
                        name={name}
                        onChange={handleChange}
                        value={value}

                    ></input>
                </div>
            </div>
        </div>
    )
}

export default Dates