import React, { useState } from 'react'
import { City, Country, State } from "country-state-city"
import Select from 'react-select'

const CSC = (props) => {
  const updatedCountries = Country.getAllCountries().map(country => ({
    label: country.name,
    value: country.isoCode,
  }))
  const filteredStates = State.getAllStates().filter(state => (
    state.countryCode == props.frSignUpData.countryCode
  ))
  const updatedStates = filteredStates.map(state => ({
    label: state.name,
    value: state.isoCode,
  }))
  const filteredCities = City.getAllCities().filter(city => (
    city.stateCode == props.frSignUpData.stateCode
  ))
  const updatedCities = filteredCities.map(city => ({
    label: city.name,
    value: city.name
  }))

  return (
    <div className='csc'>
      {/* <div> */}
        <label>Country</label>
        <Select
          name='country'
          placeholder='Choose your Country'
          options={updatedCountries}
          onChange={(e, name) => handleChange(e, name)}
          className="location-selector"
        />
      {/* </div> */}

      {/* <div> */}
        <label>State</label>
        <Select
          name='state'
          placeholder='Choose your State'
          options={updatedStates}
          onChange={(e, name) => handleChange(e, name)}
          className="location-selector"
        />
      {/* </div> */}

      {/* <div> */}
        <label>City</label>
        <Select
          name='city'
          placeholder='Choose your city'
          options={updatedCities}
          onChange={(e, name) => handleChange(e, name)}
          className="location-selector"
        />
      {/* </div> */}
    </div>
  )

  function handleChange(e, name) {
    props.setFrSignUpData(prevData => ({ ...prevData, [name.name]: e.label }))
    if (name.name != 'city')
      props.setFrSignUpData(prevData => ({ ...prevData, [name.name + "Code"]: e.value }))
  }
}

export default CSC