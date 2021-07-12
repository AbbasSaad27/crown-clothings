import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import CustomBtn from '../custom-btn/custom-btn.component';
import './cart-dropdown.styles.scss';



const CartDropDown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
            </div>
            <CustomBtn>GO TO CHECKOUT</CustomBtn>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartDropDown);