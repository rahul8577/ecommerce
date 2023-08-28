import { BsCart } from 'react-icons/bs'
import './cart-icon.style.css'

import { connect } from 'react-redux';
import toggleCartHidden from '../../redux/cart/cart.action';
import {selectCartItemsCount} from  '../../redux/cart/cart.selector'

function CartIcon({ toggleCartHidden, cartCount }) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <BsCart className='shoping-icon'></BsCart>
            <span className="item-count">
                {cartCount}
            </span>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => {
        dispatch(toggleCartHidden());
    }
})

const mapStateToProps = (state) => ({
    cartCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
