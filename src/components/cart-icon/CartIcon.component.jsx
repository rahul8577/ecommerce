import {BsCart} from 'react-icons/bs'
import './cart-icon.style.css'
import { connect} from 'react-redux';
import toggleCartHidden from '../../redux/cart/cart.action';
function CartIcon({toggleCartHidden}){
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <BsCart className='shoping-icon'></BsCart>
            <span className="item-count">
                0
            </span>
        </div>
    );
}

const mapDispatchToProps =(dispatch)=>({
    toggleCartHidden: () =>{
        dispatch(toggleCartHidden());
    }
})

export default connect(null,mapDispatchToProps)(CartIcon)
