import React, {useRef} from 'react'

const StepFactory = (props) => {
  // const activeClass = (props.showStepsLevel===props.count)? "active-step":""
  const activeStepMemo = useRef()

    // console.log(props.showStepsLevel===props.count)
    // console.log(props.count)
   if(props.showStepsLevel===props.count) 
     activeStepMemo.current.classList.add('active-step')

  return (
    <div ref={activeStepMemo} className={`step step-${props.count}`}>
        <div className='count'>{props.count}</div>
        <h3 className='heading'>{props.heading}</h3>
        <p className='text'>{props.description}</p>
    </div>
  )
}

export default StepFactory