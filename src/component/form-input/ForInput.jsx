import React from 'react'
import './forminput.scss'

const ForInput = ({label,...inputProps}) => {
  return (
    <>
        <div className="group">
        <input className='form-input' {...inputProps}/>
            {
                label && (
                    <label htmlFor="exampleFormControlInput1" className={`${inputProps.value.lenght ? 'shrink' : ''} form-input-label`}>{label}</label>
                )
            }
            </div>
    </>
  )
}

export default ForInput;