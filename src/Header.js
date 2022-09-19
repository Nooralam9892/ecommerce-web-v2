import React from 'react'
// import { Link } from 'react-router-dom'
import './Header.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
  return (
    <div className="header">
       {/* <Link to="/">  */}
       <img className="header--logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
       {/* </Link> */}
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

        <div className="header--nav">
                {/* <Link to="/"> */}
                    <div  className="header--option">
                        <span className="header--optionLineOne">Hello </span>
                        <span className="header--optionLineTwo">Sign In</span>
                    </div>
                {/* </Link> */}

                <div className="header--option">
                    <span className="header--optionLineOne">Return</span>
                    <span className="header--optionLineTwo">& Order</span>
                </div>

                <div className="header--option">
                    <span className="header--optionLineOne">Your</span>
                    <span className="header--optionLineTwo">Prime</span>
                </div>
              {/* <Link to="/"> */}
              <div className="header--optionBasket">
              <ShoppingCartIcon />
              <span className="header--optionLineTwo header--basketCount">0</span>
              </div>
               {/* </Link>  */}
        </div>
    </div>

  )
}

export default Header