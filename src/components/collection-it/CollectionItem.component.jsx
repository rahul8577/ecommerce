import React from 'react'
import './collection-item.style.css'

function CollectionItem({id,name,price,imageurl}) {
  return (
    <div className='collection-item'>
         <div 
         className="image"
         style={{
            backgroundImage:`url(${imageurl})`
         }}
         />

         <div className="collection-footer">
            <div className="name">
                {name}
            </div>
            <div className="price">
                {price}
            </div>
         </div>
    </div>
  )
}

export default CollectionItem