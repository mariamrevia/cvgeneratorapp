import React from 'react'
import {BsChevronLeft} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'


const Header = ({
    name
}) => {

 
  const handlegoingmainpage =  () => {
    navigate("/")
    localStorage.clear()
     
  }
  const navigate = useNavigate ()
  return (
    <div>
         <header>
          <div className='header--div'>
            <div>
              <button 
                className='back-btn'
                onClick = {handlegoingmainpage}>
             

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