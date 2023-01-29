import HeroSection from '../HeroSection'
import Services from '../Services'
import StepsSection from '../StepsSection'
import Features from '../Features'
import Testimonials from '../Testimonials'
import Footer from '../Footer'
import Navbar from '../Nav'

const Landing = () => {
  return (
    <div className='landing-container'>
      <Navbar/>
      <HeroSection />
      <StepsSection />
      <Services />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  )
}
export default Landing