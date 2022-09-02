import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div className="header">
       <Link to="/"> 
       <img className="header--logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
       </Link>
       <div className="header--location">
        <LocationOnOutlinedIcon/>
       </div>
       <span className="header--option">
                <span className="header--optionLineOne">Hello</span>
                <span className="header--optionLineTwo">Select your address</span>
        </span>

        <div className='header--search'>
          <input className="header--searchInput" type="text"/>
          <SearchIcon className='header--searchIcon'/>
        </div>

        <div className='header--nav'>
          <Link>
          <div>
            <span className='header--optionLineOne'>Hello</span>
          <span className='header--optionLineTwo'></span>
          </div>
          </Link>
          
           
        </div>
    </div>

  )
}

export default Header