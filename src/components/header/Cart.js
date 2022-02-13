import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../state/cart/shopSlice';
import {
  CartBox,
  CartCloseBtn,
  CartTitle,
  ShoppingList,
  CartItem,
  CartItemImg,
  CartItemInfo,
  CartItemTitle,
  CartItemPrice,
  CartItemDelete,
  CartTotal,
  CartCheckout
} from './Components';


const Cart = ({ cartOpen, toggleCart }) => {

  const cart = useSelector(state => state.shop.cart.items);
  const cartTotal = useSelector(state => state.shop.cart.total);
  const dispatch = useDispatch();

  const handleDelFromCart = itemId => {
    dispatch(removeFromCart({ id: itemId }));
  };

  return (
    <CartBox cartOpen={cartOpen}>
      <CartCloseBtn onClick={toggleCart} />
      <CartTitle>Shopping Cart</CartTitle>
      <ShoppingList>
        {
          cart.map(item => (
            <CartItem key={item.id}>
              <CartItemImg src={item.img} />
              <CartItemInfo>
                <CartItemTitle>{item.title}</CartItemTitle>
                <CartItemPrice>{`$${item.price}`}</CartItemPrice>
              </CartItemInfo>
              <CartItemDelete onClick={() => handleDelFromCart(item.id)} />
            </CartItem>
          ))
        }
      </ShoppingList>

      <CartTotal>
        Total:
        <span>{`$${Number(cartTotal.toFixed(2))}`}</span>
      </CartTotal>
      <CartCheckout>Checkout Now</CartCheckout>
    </CartBox>
  )
}

export default Cart;