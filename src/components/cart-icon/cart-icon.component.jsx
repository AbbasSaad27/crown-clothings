import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import './cart-icon.styles.scss';




const CartIcon = ({ toggleCartHidden, itemCount}) => {
    return (
        <div onClick={() => toggleCartHidden()} className="cart-icon">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

const mapStateToProps = (state) => {
    return {
        itemCount: selectCartItemsCount(state)
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);