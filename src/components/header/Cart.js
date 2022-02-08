import styled from 'styled-components'
import cartItemImg from '../../assets/images/black-hoodie.png'
import rem from '../Utils'

const CartBox = styled.div`
  width: 50vw;
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

  @media (max-width: ${rem(375)}) {
    width: 70vw;
  }
`;

const CartTitle = styled.h2`
  font-family: var(--heading-f);
  font-size: ${rem(32)};
  margin-bottom: ${rem(48)};
  padding-bottom: ${rem(16)};
  border-bottom: solid 1px #ddd;
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
  padding: ${rem(12)} ${rem(24)};
  background-color: var(--red);
  color: var(--white);
  border: none;

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

const Cart = ({ cartOpen }) => {
  return (
    <CartBox cartOpen={cartOpen}>
      <CartTitle>Shopping Cart</CartTitle>
      <ShoppingList>
        <CartItem>
          <CartItemImg src={cartItemImg} />
          <CartItemInfo>
            <CartItemTitle>Black OG Bball hoodie</CartItemTitle>
            <CartItemPrice>{`$${9.99}`}</CartItemPrice>
          </CartItemInfo>
          <CartItemDelete>Remove</CartItemDelete>
        </CartItem>
        <CartItem>
          <CartItemImg src={cartItemImg} />
          <CartItemInfo>
            <CartItemTitle>Black OG Bball hoodie</CartItemTitle>
            <CartItemPrice>{`$${9.99}`}</CartItemPrice>
          </CartItemInfo>
          <CartItemDelete>Remove</CartItemDelete>
        </CartItem>
      </ShoppingList>
      <CartTotal>
        Total:
        <span>{`$${9.99}`}</span>
      </CartTotal>
      <CartCheckout>Checkout Now</CartCheckout>
    </CartBox>
  )
}

export default Cart