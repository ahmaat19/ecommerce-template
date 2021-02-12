import React from 'react'
import { FaCartPlus, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Navigation = () => {
  return (
    <div className='sticky-top bg-light'>
      <div className='text-right p-2 container '>
        <div className='p-2 '>
          <FaPhoneAlt /> <a href='tel:+252615301507'>+252 61 530 1507</a> -{' '}
          <FaEnvelope />{' '}
          <a href='mailto:ahmaat19@gmail.com'>ahmaat19@gamil.com</a>
        </div>
      </div>

      <nav className='navbar navbar-expand-md navbar-light bg-light shadow-sm '>
        <div className='container'>
          <a className='navbar-brand fw-bold fs-4' href='#'>
            Aroma
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  <FaCartPlus fontSize='20px' /> <sup>4</sup>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
