import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, removeItemToCart, clearItemFromCart } from '../../store/cart/cart.action';
import { cartItemSelector } from '../../store/cart/cart.selector';
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const existingCartItems = useSelector(cartItemSelector)

  const dispatch = useDispatch()

  const clearItemHandler = () => dispatch(clearItemFromCart(existingCartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(existingCartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemToCart(existingCartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
