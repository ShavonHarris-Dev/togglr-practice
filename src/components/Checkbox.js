import React from 'react'

const Checkbox = ({disabled, onChange, checked }) => {
   
  return (
    <div className="form-check" >
      <input className="form-check-input" type='checkbox' onChange={onChange} disabled={disabled}   checked={checked} value="" ></input>
      
    </div>
  )
}

export default Checkbox

