import styled from 'styled-components'
import cartItemImg from '../../assets/images/black-hoodie.png'

const CartBox = styled.div`
  width: 50vw;
  height: 100vh;
  padding: 2rem;
  background-color: white;
  position: fixed;
  top: 0;
  left: ${(props) => props.cartOpen ? '0%' : '-100%'};
  box-shadow: 10px 0px 27px -2px rgba(0,0,0,0.1);
  z-index: 99;
  transition: all 200ms ease-in-out;
  overflow-y: auto;

  @media (max-width: 375px) {
    width: 70vw;
  }
`;

const CartTitle = styled.h2`
  font-family: Inter, Arial, sans-serif;
  font-size: 2rem;
  color: #1C2624;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px #ddd;
`;

const ShoppingList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: solid 1px #dddddd;
`;

const CartItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 2fr auto;
  gap: 1rem;
  margin-bottom: 1.75rem;

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const CartItemTitle = styled.h3`
  font-family: 'DM Sans', Arial, sans-serif;
  font-size: 1.125rem;
  color: #1C2624;
  margin-bottom: 0.5rem;
`;

const CartItemPrice = styled.h3`
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
  font-size: 1.25rem;
  color: #CE9E63;
`;

const CartItemInfo = styled.div`
  justify-self: start;
`;

const CartItemImg = styled.img`
  display: block;
  width: 60px;
  height: auto;

  @media (max-width: 48rem){
    display: none;
  }
`;

const CartItemDelete = styled.button`
  display: block;
  padding: 0.75rem 1.5rem;
  background-color: #C9082A;
  color: white;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;

const CartTotal = styled.div`
  font-family: 'DM Sans', Arial, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  text-align: right;
  color: #1C2624;
  margin: 0 0 3rem;
  
  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 2.125rem;
    color: #CE9E63;
  }
`;

const CartCheckout = styled.button`
  display: block;
  width: 50%;
  padding: 1rem;
  margin: auto;
  font-family: 'DM Sans', Arial, sans-serif;
  background-color: #7D7582;
  color: white;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 48rem) {
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