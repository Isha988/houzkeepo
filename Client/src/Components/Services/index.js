import React from 'react'
import {ServiceData} from './ServiceData'
import Service from './Service'

const Services = () => {
    const serviceElements = ServiceData.map((serviceData, id)=>(
        <Service 
          imgUrl = {serviceData.imgUrl}
          key={id}
          heading = {serviceData.heading}
          subHeading = {serviceData.subHeading}
          description = {serviceData.description}
          listItem1 = {serviceData.listItem1}
          listItem2 = {serviceData.listItem2}
          listItem3 = {serviceData.listItem3}
        />
    ))
  return (
    <div className='services-container standard-container'>
        <h2 className='services-heading'>Our Major Services</h2>
        <div className='services'>
            {serviceElements}
        </div>
        <p className='more-services-notes'>and many more...</p>
    </div>
  )
}

export default Services