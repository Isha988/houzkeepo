import { useState } from 'react'
import CSC from "./CSC"
// import successImg from '../../assets/images/bulletin.jpg'

function FreelancerProfileForm({ onSubmit }) {
  const [userdata, setUserdata] = useState({
    phone: '',
    aadhar: '',
    img: '',
    age: '',
    bio: '',
    country: '',
    countryCode: '',
    state: '',
    stateCode: '',
    city: '',
    interests: [],
  })
  const { phone, aadhar, img, age, bio } = userdata;

  function handleChange(e) {
    setUserdata(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  function handleCheckbox(e) {
    if (e.target.checked) {
      userdata.interests.push(e.target.name)
    } else {
      let indexOfRemovedEl = userdata.interests.indexOf(e.target.name)
      setUserdata.interests.splice(indexOfRemovedEl, 1)
    }
  }

  return (
    <div className='complete-profile freelancer-complete-profile'>
      <div className='top-img'>
      </div>
      <h2>Tell us more about Yourself</h2>
      <form onSubmit={onSubmit} className='complete-profile-form'>
        <div>
          <label htmlFor='phone'>Phone Number :</label>
          <input id='phone' name='phone' value={phone} onChange={handleChange} type='tel' placeholder='enter your phone number' />
        </div>

        <div>
          <label htmlFor='aadhar' aria-required>Aadhar Number :<span className="note">(Associated with above number)</span></label>
          <input id='aadhar' name='aadhar' type='number' value={aadhar} onChange={handleChange} placeholder='enter your 12 digit aadhar number' />
        </div>

        <div>
          <label htmlFor="img">Upload a photo :</label>
          <input id="photo" name="img" type='file' value={img} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor='age' aria-required>Age :</label>
          <input id='age' name='age' type='number' max='100' min='14' value={age} onChange={handleChange} placeholder='You should above 14 years of age' />
        </div>

        <CSC
          frSignUpData={userdata}
          setFrSignUpData={setUserdata}
        />

        <div>
          <label htmlFor="bio">Bio : </label>
          <textarea id="bio" name="bio" placeholder="Introduce Yourself" value={bio} onChange={handleChange} maxLength='200' minLength="80" />
        </div>

        <div>
        <label htmlFor="interests">Interested In works :</label>
        <div className="interests-section">
          <div className="first-col">
            <div>
              <input id="cleaning" name="cleaning" onChange={handleCheckbox} type='checkbox' />
              <label htmlFor="cleaning">Home Cleaning </label>
            </div>

            <div>
              <input id="baby-sitting" name="baby-sitting" onChange={handleCheckbox} type='checkbox' />
              <label htmlFor="baby-sitting">Baby Sitting</label>
            </div>

            <div>
              <input id="food" name="food" onChange={handleCheckbox} type='checkbox' />
              <label htmlFor="food">Food</label>
            </div>
          </div>

          <div className="second-col">
            <div>
              <input id="security" name="security" onChange={handleCheckbox} type="checkbox" />
              <label htmlFor="security">Security</label>
            </div>

            <div>
              <input id="caregiver" name="caregiver" onChange={handleCheckbox} type="checkbox" />
              <label htmlFor="caregiver">Caregiver</label>
            </div>

            <div>
              <input id="home-decor" name="home-decor" onChange={handleCheckbox} type="checkbox" />
              <label htmlFor="home-decor">Home Decor</label>
            </div>
          </div>
        </div>
        </div>
        
        <button type="submit" onSubmit={onSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default FreelancerProfileForm
