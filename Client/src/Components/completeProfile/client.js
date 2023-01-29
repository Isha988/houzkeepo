import {useState} from 'react'
import CSC from "./CSC"

function ClientProfileForm({onSubmit}) {
    const [userdata, setUserdata] = useState({
        phone: '',
        img: '',
        age: '',
        bio: '',
        country: '',
        countryCode: '',
        state: '',
        stateCode: '',
        city: ''
    })
    const {phone, img, age, bio} = userdata
    function handleChange(e) {
        setUserdata(prevData => ({
             ...prevData,
            [e.target.name]: e.target.value
        }))
     }

  return (
    <div className='signup-form freelancer-signup-second-pg'>
          <form onSubmit={onSubmit}>
            <label htmlFor='phone'>Phone Number :</label>
            <input id='phone' name='phone' value={phone} onChange={handleChange} type='tel' placeholder='enter your phone number' />

            <label htmlFor="img">Upload a photo :</label>
            <input id="photo" name="img" type='file' value={img} onChange={handleChange}/>

            <label htmlFor='age' aria-required>Age :</label>
            <input id='age' name='age' type='number' max='100' min='14' value={age} onChange={handleChange} placeholder='You should above 14 years of age' />

            <CSC 
               frSignUpData={userdata}
               setFrSignUpData={setUserdata}
             />

            <div className="sepration"></div>

            <label htmlFor="bio">Bio : </label>
            <textarea id="bio" name="bio" placeholder="Introduce Yourself" value={bio} onChange={handleChange} maxLength='200' minLength="80" />

            <button type="submit" onSubmit={onSubmit}>Submit</button>
          </form>
        </div>
  )
}

export default ClientProfileForm
