import testinomailPerson1 from '../../assets/images/testimonial1.jpg'
import testinomailPerson2 from '../../assets/images/testimonial2.jpg'

const Testimonials = () => {
  return (
    <div className='testimonials-container standard-container'>
        <div className='testimonial'>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="double-quotes">
           <path d="M0 13.6C0 17.7 2.47 20 5.247 20c2.469 0 4.32-2 4.32-4.3 0-2.4-1.748-4.2-4.114-4.2-.309 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L7.305 0C3.395 2.8 0 8 0 13.6zm14.61 0c0 4.1 2.365 6.4 5.143 6.4 2.572 0 4.424-2 4.424-4.3 0-2.4-1.749-4.2-4.115-4.2-.412 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L21.914 0c-4.013 2.8-7.305 8-7.305 13.6z" fill="currentColor">
           </path>
        </svg>
            <p className='description'>With Toptal, we are able to find talented developers in a matter of weeks instead of months. The quality of talent they supply is extremely high as the developers are able to immediately onboard and ramp incredibly fast.</p>
            <div className='personal-info'>
             <img src={testinomailPerson1}/>
             <div>
              <p className='name'>Bronte Aurell</p>
              <p className='work'>ScandiKitchen</p>
             </div> 
            </div>
        </div>

        <div className='testimonial'>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="double-quotes">
           <path d="M0 13.6C0 17.7 2.47 20 5.247 20c2.469 0 4.32-2 4.32-4.3 0-2.4-1.748-4.2-4.114-4.2-.309 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L7.305 0C3.395 2.8 0 8 0 13.6zm14.61 0c0 4.1 2.365 6.4 5.143 6.4 2.572 0 4.424-2 4.424-4.3 0-2.4-1.749-4.2-4.115-4.2-.412 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L21.914 0c-4.013 2.8-7.305 8-7.305 13.6z" fill="currentColor">
           </path>
        </svg>   
       <p className='description'>With the pressure on and millions watching the Cleveland Cavaliers during the NBA Playoffs, Toptal delivered the talent and expertise needed to launch a brand new fan engagement platform.</p>
            <div className='personal-info'>
            <img src={testinomailPerson2}/>
            <div>
             <p className='name'>Bronte Aurell</p>
             <p className='work'>ScandiKitchen</p>
            </div>    
            </div>
        </div>
    </div>
  )
}
export default Testimonials