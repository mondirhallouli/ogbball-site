import styled from 'styled-components';
import rem from '../Utils';
import headerBgImgDt from "../../assets/header-bg-desktop.svg";
import headerBgImgTb from "../../assets/header-bg-tablet.svg";
import headerBgImgMb from "../../assets/header-bg-mobile.svg";
import logo from '../../assets/logo.svg';
import blackCart from '../../assets/shopping-cart.svg';

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