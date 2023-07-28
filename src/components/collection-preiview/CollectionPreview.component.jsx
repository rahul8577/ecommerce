import React from 'react'
import CollectionItem from '../collection-item/CollectionItem.component'
import './collection-preview.style.css'

export default function CollectionPreview({ title, items }) {
  
  return (

    <div className="collection-preview">
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
        .filter((item,inx)=>inx<4)
        .map(({id, ...otherItemProps}) => {
          return <CollectionItem key={id} {...otherItemProps} />
        })}
      </div>
    </div>
  )
}
