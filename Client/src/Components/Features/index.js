import React from 'react'
import {GiProgression, GiGrowth, GiSandsOfTime} from 'react-icons/gi'
import {FaCubes} from 'react-icons/fa'
import taskImg from "../../assets/images/connectedPops.jpg"

const Features = () => {
  return (
    <div className='features-container'>
        
        <div className='left-features-container'>
            <h1 className='l-heading'>Manage your work and home with our door step services</h1>
            <p>Do not let household work be a hurdle!</p>
            <div className='features-boxes'>
            <div className='features-box'>
                    <GiSandsOfTime className='icon'/>
                    <h2>Hire Quickly</h2>
                    <p>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>
            </div>
            <div className='features-box'>
                    <GiGrowth className='icon'/>
                    <h2>The Top 3%</h2>
                    <p>Every applicant to the Houzkeepo network is rigorously tested and vetted. Our highly selective process leads to a 98% trial-to-hire success rate.</p>
            </div>
            <div className='features-box'>
                    <FaCubes className='icon'/>
                    <h2>Leading Future of Work</h2>
                    <p>Our network is ready for tomorrow's business challenges by embracing advanced and specialized skills including blockchain and AI.</p>
            </div>
            <div className='features-box'>
                    <GiProgression className='icon'/>
                    <h2>A Level Above</h2>
                    <p>Every single freelancer in our global network embodies the highest levels of integrity, professionalism, and communication.</p>
             </div>
            </div>
        </div>

        <div className='right-features-container'>
            <img src={taskImg}/>
        </div>
    </div>
  )
}
export default Features