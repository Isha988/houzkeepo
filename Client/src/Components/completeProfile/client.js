import { useState } from 'react'
import CSC from "./CSC"
import {ImFolderUpload} from 'react-icons/im'

function ClientProfileForm({ onSubmit }) {
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
  const { phone, img, age, bio, city } = userdata
  const isInvalid = phone == "" || img == "" || age == "" || bio == "" || city == ""

  function handleChange(e) {
    setUserdata(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className='complete-profile client-complete-profile'>
      <div className='top-img'></div>
      <h2>Tell us more about Yourself</h2>
      <form onSubmit={onSubmit} className='complete-profile-form'>
        <div>
          <label htmlFor='phone'>Phone Number :</label>
          <input id='phone' name='phone' value={phone} onChange={handleChange} type='tel' placeholder='enter your phone number' />
        </div>

        <div>
          <label htmlFor="img">Upload a photo :</label>
          <div>
           <label htmlFor="img" className={img ? 'filled-upload-label upload-label' : 'upload-label'}><ImFolderUpload /></label>
           <input id="img" className={'upload-photo'} name="img" type='file' value={img} onChange={handleChange} />
          </div>
        </div>


        <div>
          <label htmlFor='age' aria-required>Age :</label>
          <input id='age' name='age' type='number' max='100' min='14' value={age} onChange={handleChange} placeholder='You should above 14 years of age' />
        </div>


        <CSC
          frSignUpData={userdata}
          setFrSignUpData={setUserdata}
        />

        <label htmlFor="bio" className='bio-heading'>Bio : </label>
        <textarea id="bio" name="bio" placeholder="Introduce Yourself..." value={bio} onChange={handleChange} maxLength='200' minLength="80" />

        <button type="submit" disabled={isInvalid} onSubmit={onSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default ClientProfileForm
