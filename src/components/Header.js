import React from 'react'
import {BsChevronLeft} from "react-icons/bs"

const Header = ({
    name
}) => {
  return (
    <div>
         <header>
          <div className='header--div'>
            <div>
              <button 
                className='back-btn'>
                <BsChevronLeft
                className='backicon'
              /></button>
            </div>
            <div className='hd-1'>
              <div className='hd-2'>
                <h2 className='hd-h2'>{name}</h2>
                <span></span>
              </div>
              <div>
                <hr className='hd-hr'></hr>
              </div>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Header