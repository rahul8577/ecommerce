import React from 'react'
import './collection-item.style.css'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/CustomButton.component'
import { addItem } from '../../redux/cart/cart.action'

function CollectionItem({ item,addItem  }) {

  const {id,name,price,imageurl} =item;
  return (
    <div className='collection-item'>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageurl})`
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
      <CustomButton onClick={()=> addItem(item)} inverted>Add to Cart</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem)