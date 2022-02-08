import logo from '../../assets/logo.svg'
import logoMobile from '../../assets/logoMobile.svg'
import blackCart from '../../assets/shopping-cart.svg'
import whiteCart from '../../assets/shopping-cart-white.svg'
import styled from 'styled-components'
import MenuBtn from './MenuBtn'
import MenuBtnWrapper from './MenuBtnWrapper'
import rem from '../Utils'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto ${rem(74)};
  padding: 0;
  
  @media (min-width: ${rem(376)}) {
    padding: ${rem(12)};
    margin-bottom: ${rem(147)};
    background-color: var(--white);
    box-shadow: 0px ${rem(10)} ${rem(27)} -${rem(2)} rgba(0,0,0,0.1),
                0px -${rem(10)} ${rem(27)} -${rem(2)} rgba(0,0,0,0.1) ;
  }

  @media (min-width: ${rem(1025)}) {
    margin-bottom: ${rem(168)};
  }
`;

const NavBtns = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${rem(16)};
`;

const CartBtn = styled.button`
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

const CartBtnImg = styled.div`
  display: inline-block;
  width: ${rem(34)};
  height: ${rem(30)};
  background-image: url(${whiteCart});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: ${rem(376)}) {
    background-image: url(${blackCart});
  }
`;

const CartContents = styled.span`
  display: block;
  width: ${rem(22)};
  height: ${rem(22)};
  background-color: var(--white);
  border-radius: 50%;
  font-size: ${rem(16)};
  color: var(--red);

  @media (min-width: ${rem(376)}) {
    background-color: var(--red);
    color: var(--white);
  }
`;

const Logo = styled.a`
  display: block;
  width: ${rem(47)};
  height: ${rem(47)};
  background-image: url(${logoMobile});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  @media (min-width: ${rem(376)}) {
    background-image: url(${logo});
  }
`;

const Nav = ({ open, toggleMenu, toggleCart }) => {

  return (
    <Navbar>
      <Logo />

      <NavBtns>
        <CartBtn onClick={toggleCart}>
          <CartBtnImg />
          <CartContents>{0}</CartContents>
        </CartBtn>

        <MenuBtn onClick={toggleMenu} open={open}>
          <MenuBtnWrapper open={open}>
            <span />
            <span />
            <span />
          </MenuBtnWrapper>
        </MenuBtn>
      </NavBtns>
    </Navbar>
  )
}

export default Nav