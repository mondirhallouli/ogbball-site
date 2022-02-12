import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { removeFromCart } from '../../state/cart/shopSlice';
import rem from '../Utils';
import closeIcon from '../../assets/close.svg';
import deleteIcon from '../../assets/delete-cart-item.svg';

const CartBox = styled.div`
  width: 80vw;
  height: 100vh;
  padding: ${rem(32)};
  background-color: white;
  position: fixed;
  top: 0;
  left: ${(props) => props.cartOpen ? '0%' : '-100%'};
  box-shadow: ${rem(10)} 0px ${rem(27)} -2px rgba(0,0,0,0.1);
  z-index: 99;
  transition: all 200ms ease-in-out;
  overflow-y: auto;

  @media (min-width: ${rem(376)}) {
    width: 80vw;
  }
  
  @media (min-width: ${rem(769)}) {
    width: 70vw;
  }
`;

const CartTitle = styled.h2`
  font-family: var(--heading-f);
  font-size: ${rem(24)};
  margin-bottom: ${rem(48)};
  padding-bottom: ${rem(16)};
  border-bottom: solid 1px #ddd;

  @media (min-width: ${rem(769)}) {
    font-size: ${rem(32)};
  }
`;

const ShoppingList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${rem(48)};
  padding-bottom: ${rem(24)};
  border-bottom: solid 1px #dddddd;
`;

const CartItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 2fr auto;
  gap: ${rem(16)};
  margin-bottom: ${rem(28)};

  @media (max-width: ${rem(768)}) {
    grid-template-columns: 1fr;
    gap: ${rem(13)};
  }
`;

const CartItemTitle = styled.h3`
  font-size: ${rem(18)};
  margin-bottom: ${rem(8)};
`;

const CartCloseBtn = styled.button`
  display: block;
  width: ${rem(40)};
  height: ${rem(40)};
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 0 ${rem(30)} calc(100% - ${rem(32)});
  position: relative;
`;

const CartItemPrice = styled.h3`
  font-size: ${rem(20)};
  color: var(--wheat);
`;

const CartItemInfo = styled.div`
  justify-self: start;
`;

const CartItemImg = styled.img`
  display: block;
  width: ${rem(60)};
  height: auto;

  @media (max-width: ${rem(768)}){
    display: none;
  }
`;

const CartItemDelete = styled.button`
  display: block;
  width: ${rem(50)};
  height: ${rem(50)};
  padding: ${rem(12)} ${rem(24)};
  background-image: url(${deleteIcon});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  background-color: var(--red);
  border-radius: 50%;

  &:hover {
    opacity: 0.8;
  }
`;

const CartTotal = styled.div`
  font-size: ${rem(32)};
  font-weight: 700;
  text-align: right;
  margin: 0 0 ${rem(48)};
  
  span {
    display: inline-block;
    margin-left: ${rem(16)};
    font-size: ${rem(34)};
    color: var(--wheat);
  }
`;

const CartCheckout = styled.button`
  display: block;
  width: 50%;
  padding: ${rem(16)};
  margin: auto;
  background-color: var(--purple);
  color: var(--white);

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${rem(768)}) {
    width: 80%;
  }
`;

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

export default Cart