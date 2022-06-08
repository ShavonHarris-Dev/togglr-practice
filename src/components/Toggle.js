import React from 'react'

const Toggle = ({onChange, disabled, checked}) => {
 
  return (
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={onChange} disabled={disabled} checked={checked}></input>
    </div>
  )
}

export default Toggle

