import React from 'react'
import CatagoryItem from '../component/catagoryitem/CatagoryItem'

const Directory = ({catagory}) => {
  return (
    <div className='categories-container'>
    {
        catagory.map((catagory)=>{
          return(
            <CatagoryItem key={catagory.id} catagory={catagory}/>
          )
        })
      }
      
    </div>
  )
}

export default Directory;