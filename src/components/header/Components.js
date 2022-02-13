import styled from 'styled-components';
import rem from '../Utils';
import headerBgImgDt from "../../assets/header-bg-desktop.svg";
import headerBgImgTb from "../../assets/header-bg-tablet.svg";
import headerBgImgMb from "../../assets/header-bg-mobile.svg";
import logo from '../../assets/logo.svg';
import blackCart from '../../assets/shopping-cart.svg';
import closeIcon from '../../assets/close.svg';
import deleteIcon from '../../assets/delete-cart-item.svg';

// HEADER COMPONENTS
export const HeaderWrapper = styled.header`
  height: ${rem(666.5)};
  padding: ${rem(16)} ${rem(36)} ${rem(100)};
  margin: 0 auto ${rem(100)};
  background-image: url(${headerBgImgMb});
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;

  @media (min-width: ${rem(376)}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${rem(804)};
    background-image: url(${headerBgImgTb});
    padding-bottom: ${rem(270)};
  }

  @media (min-width: ${rem(1025)}) {
    height: ${rem(720)};
    padding: ${rem(16)} ${rem(36)} ${rem(238)};
    background-image: url(${headerBgImgDt});
  }
`;

export const HeaderCtaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: ${rem(20)};
  row-gap: ${rem(16)};
`;

// NAVBAR COMPONENTS
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - ${rem(72)});
  max-width: ${rem(940)};
  position: ${props => props.stickToTop ? 'fixed' : 'relative'};
  top: ${rem(16)};
  left: ${({ stickToTop }) => stickToTop ? '50%' : '0'};
  transform: ${({ stickToTop }) => stickToTop ? 'translateX(-50%)' : 'translateX(0%)'};
  padding: ${rem(12)};
  margin: 0 auto ${rem(74)};
  background-color: var(--white);
  box-shadow: 0px ${rem(10)} ${rem(27)} -${rem(2)} rgba(0,0,0,0.1),
              0px -${rem(10)} ${rem(27)} -${rem(2)} rgba(0,0,0,0.1) ;
  
  @media (min-width: ${rem(376)}) {
    margin-bottom: ${rem(147)};
  }

  @media (min-width: ${rem(1025)}) {
    margin-bottom: ${rem(168)};
  }
`;

export const NavBtns = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${rem(16)};
`;

export const CartBtn = styled.button`
  font-size: ${rem(28)};
  display: flex;
  align-items: center;
  column-gap: ${rem(4)};
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export const CartBtnImg = styled.div`
  display: inline-block;
  width: ${rem(34)};
  height: ${rem(30)};
  background-image: url(${blackCart});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CartContents = styled.span`
  display: block;
  width: ${rem(22)};
  height: ${rem(22)};
  background-color: var(--red);
  border-radius: 50%;
  font-size: ${rem(16)};
  color: var(--white);
`;

export const Logo = styled.a`
  display: block;
  width: ${rem(47)};
  height: ${rem(47)};
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
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