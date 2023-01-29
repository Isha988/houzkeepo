import React from 'react'

const Service = (props) => {
  return (
    <div className='service'>
        <div className='img-part'>
          <img src={props.imgUrl}/>
        </div>

        <div className='text-part'>
            <h2 className='heading'>{props.heading}</h2>
            <h3 className='sub-heading'>{props.subHeading}</h3>
            <p className='description'>{props.description}</p>
            <ul className='list-items'>
                <li>{props.listItem1}</li>
                <li>{props.listItem2}</li>
                <li>{props.listItem3}</li>
            </ul>
            <button className='btn-z'>Get Started</button>
        </div>
    </div>
  )
}

export default Service