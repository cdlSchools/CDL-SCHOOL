"use client"
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#">
    <img src="/images/Logo.png"alt='Logo' className='navlogo'></img>
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav gap-4 ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Home 
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        Truck driving Classes
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">
        Trucking Carrers
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        Why United CDL
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        Call (301) 888-5322
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link bene" >
     Benefits
        </a>
        <div className='dropdownbanefits'>
<div >CDL Training</div>     
<div >CDL Training</div>     
<div >CDL Training</div>     
<div >CDL Training</div>     

 </div>
      </li>
     
      <li className="nav-item">
        <a className="nav-link" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M15.8281 3.75C17.1003 4.09141 18.2602 4.76142 19.1916 5.69279C20.123 6.62416 20.793 7.78412 21.1344 9.05625" stroke="#2C292A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.0469 6.64844C15.812 6.85164 16.5098 7.25348 17.0696 7.81326C17.6293 8.37303 18.0312 9.07083 18.2344 9.83594" stroke="#2C292A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.55469 11.6998C10.3265 13.2935 11.6152 14.579 13.2109 15.3467C13.3286 15.4024 13.4588 15.4265 13.5887 15.4167C13.7186 15.4068 13.8436 15.3633 13.9516 15.2904L16.2953 13.7248C16.3989 13.6546 16.5185 13.6117 16.6431 13.6002C16.7677 13.5887 16.8932 13.609 17.0078 13.6592L21.3953 15.5435C21.5453 15.6059 21.6705 15.7159 21.7519 15.8565C21.8332 15.9971 21.866 16.1606 21.8453 16.3217C21.7063 17.407 21.1765 18.4046 20.3551 19.1276C19.5337 19.8506 18.4771 20.2495 17.3828 20.2498C14.0013 20.2498 10.7583 18.9065 8.3672 16.5154C5.97611 14.1243 4.63281 10.8813 4.63281 7.49979C4.63306 6.40553 5.03201 5.34886 5.75502 4.5275C6.47803 3.70613 7.47556 3.17635 8.56094 3.03729C8.72204 3.01659 8.88547 3.04943 9.02607 3.13074C9.16668 3.21206 9.27665 3.33733 9.33906 3.48729L11.2234 7.88416C11.2724 7.99699 11.2929 8.12013 11.2831 8.24275C11.2733 8.36537 11.2335 8.48369 11.1672 8.58729L9.60156 10.9685C9.53186 11.0762 9.49095 11.2 9.48274 11.328C9.47454 11.4561 9.49931 11.5841 9.55469 11.6998V11.6998Z" stroke="#2C292A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Call (301) 888-5322
        </a>
      </li>
      <li className="nav-item registerbtn">
        <a className="nav-link " href="#">
        Register now
        </a>
      </li>
    
    </ul>
  </div>
</nav>
  )
}

export default Navbar