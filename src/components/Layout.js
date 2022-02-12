import styled from "styled-components";
import rem from "./Utils";
import closeIcon from '../assets/close.svg';
import deleteIcon from '../assets/delete-cart-item.svg';

export const Container = styled.div`
  max-width: ${rem(940)};
  margin: 0 auto;
`;

export const HeaderCtaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: ${rem(20)};
  row-gap: ${rem(16)};
`;

// SHOPPING CART COMPONENTS
export const CartBox = styled.div`
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

export const CartTitle = styled.h2`
  font-family: var(--heading-f);
  font-size: ${rem(24)};
  margin-bottom: ${rem(48)};
  padding-bottom: ${rem(16)};
  border-bottom: solid 1px #ddd;

  @media (min-width: ${rem(769)}) {
    font-size: ${rem(32)};
  }
`;

export const ShoppingList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${rem(48)};
  padding-bottom: ${rem(24)};
  border-bottom: solid 1px #dddddd;
`;

export const CartItem = styled.div`
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

export const CartItemTitle = styled.h3`
  font-size: ${rem(18)};
  margin-bottom: ${rem(8)};
`;

export const CartCloseBtn = styled.button`
  display: block;
  width: ${rem(40)};
  height: ${rem(40)};
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 0 ${rem(30)} calc(100% - ${rem(32)});
  position: relative;
`;

export const CartItemPrice = styled.h3`
  font-size: ${rem(20)};
  color: var(--wheat);
`;

export const CartItemInfo = styled.div`
  justify-self: start;
`;

export const CartItemImg = styled.img`
  display: block;
  width: ${rem(60)};
  height: auto;

  @media (max-width: ${rem(768)}){
    display: none;
  }
`;

export const CartItemDelete = styled.button`
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

export const CartTotal = styled.div`
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

export const CartCheckout = styled.button`
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

// SHOP SECTION COMPONENTS
export const ShopWrapper = styled.div`
  margin-bottom: ${rem(100)};
`;

export const ShopItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${rem(300)}, ${rem(380)}));
  justify-content: center;
  justify-items: center;
  row-gap: ${rem(50)};

  @media (min-width: ${rem(769)}) {
    column-gap: ${rem(100)};
    row-gap: ${rem(64)};
  }
`;

export const ShopItemCard = styled.div`
  width: ${rem(300)};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${rem(769)}) {
    width: ${rem(380)};
  }
`;

export const ShopItemImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: ${rem(30)};
`;

// COACHING SECTION COMPONENTS
export const CoachingSection = styled.div`
  padding: 0 ${rem(36)};
  margin-bottom: ${rem(100)};
`;

export const CoachingContent = styled.div`
  text-align: center;

  @media (min-width: ${rem(769)}) {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${rem(60)};
    text-align: left;
  }
`;

// COACHING SECTION COMPONENTS
export const YtWrapper = styled.div`
  padding: 0 ${rem(36)};
  margin-bottom: ${rem(100)};
`;

export const YtContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${rem(30)};

  @media (min-width: ${rem(769)}) {
    gap: ${rem(20)};
  }
  
  @media (min-width: ${rem(1025)}) {
    gap: ${rem(30)};
  }
`;

// CONTACT SECTION COMPONENTS
export const ContactForm = styled.form`
  max-width: ${rem(780)};
  padding: 0 ${rem(36)};
  margin: 0 auto ${rem(100)};

  @media (min-width: ${rem(769)}) {
    padding: 0 ${rem(16)};
  }
`;

export const ContactFlex = styled.div`
  margin-bottom: ${rem(16)};

  @media (min-width: ${rem(769)}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${rem(20)};
  }
`;

export const ContactLeft = styled.div`
  margin-bottom: ${rem(16)};

  @media (min-width: ${rem(769)}) {
    margin: 0;
  }
`;

export const ContactRight = styled.textarea`
  display: block;
  width: 100%;
  height: ${rem(136)};
  resize: vertical;
  margin: 0 auto;
  padding: ${rem(13)} ${rem(22)};
  border: ${rem(2)} solid var(--purple);
  font-size: ${rem(18)};
  color: var(--purple);

  @media (min-width: ${rem(769)}) {
    height: auto;
  }
`;

export const Input = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder
}))`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: ${rem(13)} ${rem(22)};
  border: ${rem(2)} solid var(--purple);
  font-size: ${rem(18)};
  color: var(--purple);

  &:first-child {
    margin-bottom: ${rem(16)};
  }
`;

export const SubmitBtn = styled.button`
  display: block;
  width: ${rem(140)};
  margin: 0 auto;
  padding: ${rem(16)} 0;
  background-color: var(--purple);
  font-size: ${rem(20)};
  color: var(--white);

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: ${rem(769)}) { padding: ${rem(12)} 0; }
  @media (min-width: ${rem(1025)}) { 
    width: ${rem(220)};
    padding: ${rem(12)} 0;
    font-size: ${rem(24)};
  }
`;

// NEWSLETTER SECTION COMPONENTS
export const NLWrapper = styled.div`
  padding: 0 ${rem(36)};
  margin: 0 auto ${rem(100)};
`;

export const NLForm = styled.form`
  max-width: ${rem(620)};
  margin: 0 auto;

  @media (min-width: ${rem(769)}) {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: ${rem(20)};
  }
`;

export const NLInput = styled.input`
  display: block;
  width: 100%;
  height: ${rem(50)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${rem(16)};
  color: var(--wheat);
  padding: 0 ${rem(16)};
  margin-bottom: ${rem(16)};
  border: ${rem(2)} solid var(--wheat);

  @media (min-width: ${rem(769)}) {
    height: ${rem(60)};
    margin-bottom: 0;
    font-size: ${rem(18)};
  }
`;

export const NLBtn = styled.button`
  display: block;
  width: ${rem(140)};
  height: ${rem(50)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: var(--wheat);
  font-size: ${rem(16)};
  color: var(--white);

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: ${rem(769)}) {
    width: ${rem(220)};
    height: ${rem(60)};
    font-size: ${rem(18)};
  }
`;

// FOOTER SECTION COMPONENTS
export const FooterFlex = styled.div`
  max-width: ${rem(940)};
  margin: 0 auto;

  @media (min-width: ${rem(376)}) {
    display: grid;
    grid-template-columns: 3fr 1fr 2fr;
    gap: ${rem(40)} ${rem(88)};
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
  
`;