import React from 'react'
import {useNavigate} from 'react-router-dom'

const HeroSection = () => {
  const navigateTo = useNavigate()
  function routeToSignIn(e) {
    if(e.target.name=='freelancer')
      navigateTo('freelancer-signup')
    else 
      navigateTo('/client-signup')
  }
  return (
    <div className='hero-container'>
        <h2 className='heading'>Hire for on demand door step home services, Online.</h2>
        <ul className='hero-points'>
            <li>World's most trusted and safe service providers</li>
            <li>Get the right domestic help today in just 5 minutes!</li>
            <li>Book a houzKeepo for any domestic help you can imagine!</li>
            <li>Save upto 70% for your first order!</li>
        </ul>
        <button name='client' className='btn-x' onClick={routeToSignIn}>Book a HouzKeepo</button>
        <button name='freelancer' className='btn-y' onClick={routeToSignIn}>Become a HouzKeepo</button>
    </div>
  )
}

export default HeroSection