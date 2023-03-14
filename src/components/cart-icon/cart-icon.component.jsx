import { useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { isCartOpenSelector, cartCountSelector } from '../../store/cart/cart.selector';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();
  
  const isCartOpen = useSelector(isCartOpenSelector)
  const cartCount = useSelector(cartCountSelector)


  const toggleIsCartOpen = () => {
    return dispatch(setIsCartOpen(!isCartOpen))
  }

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
