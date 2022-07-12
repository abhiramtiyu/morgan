import React from 'react'
import './catagoryitemstyle.scss'

const CatagoryItem = ({catagory}) => {
  const {title,imageUrl} = catagory;
  return (
    <>
               <div className="category-container">
                  <div className='background-image' style={
                    {
                      backgroundImage:`url(${imageUrl})`
                    }
                  }/>
                  <div className='category-body-container'>
                   <h2>
                     {title}
                   </h2>
                   <p>Shop now</p>
                </div>
              </div>
    </>
  )
}
export default CatagoryItem;