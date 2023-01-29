import React, {useEffect, useRef, useState} from 'react'
import StepFactory from './StepFactory'
import {stepsData} from './stepsData'

const StepsSection = () => {
  const boxRef = useRef();
  const [showStepsLevel, setShowStepsLevel] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => (
          window.removeEventListener('scroll', handleScroll)
        )
    })

    function handleScroll() {
      let stepsSectionHeight = boxRef.current.getBoundingClientRect().top
      if(stepsSectionHeight < window.innerHeight - 515){
          setShowStepsLevel(3)
      }
      else if(stepsSectionHeight < window.innerHeight - 400){
        setShowStepsLevel(2)
      }
    else if(stepsSectionHeight < window.innerHeight - 250){
       setShowStepsLevel(1)
      }
    }

    const stepsElements = stepsData.map((stepData, id) => (
         <StepFactory 
            showStepsLevel={showStepsLevel}
            key={id+3}
            count={id+1}
            heading={stepData.heading}
            description={stepData.description}
        />
    ))

  return (
    <div ref={boxRef} className='steps-container'>
        <h2 className='l-heading'>Hiring Made Easy</h2>
        <div className='steps'>
         {stepsElements}
        </div>
    </div>
  )
}

export default StepsSection