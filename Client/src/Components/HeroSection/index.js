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
        <h2 className='heading'>Hire the best freelancers for any job, Online.</h2>
        <ul className='hero-points'>
            <li>World's largest freelance marketplace</li>
            <li>Any job you can possibly think of</li>
            <li>Save up to 90% & get quotes for free</li>
            <li>Pay only when you're 100% happy</li>
        </ul>
        <button name='client' className='btn-x' onClick={routeToSignIn}>Hire a Freelancer</button>
        <button name='freelancer' className='btn-y' onClick={routeToSignIn}>Earn Money Freelancing</button>
    </div>
  )
}

export default HeroSection