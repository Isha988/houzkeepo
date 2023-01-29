import './styles/css/main.css'
import {Routes, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Signup from './Components/Signup/index'
import SigninForm from './Components/Signin'
import CompleteProfile from './Components/completeProfile'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/signin' element={<SigninForm/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/freelancer-signup' element={<Signup userRole="Freelancer"/>} />
        <Route path='/client-signup' element={<Signup userRole="Client"/>} />
        <Route path="/complete-profile" element={<CompleteProfile/>}/>

      </Routes>
    </div>
  )
}

export default App