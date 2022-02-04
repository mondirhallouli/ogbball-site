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
  
  @media (min-width: ${rem(769)}) {
    margin-bottom: ${rem(145)};
  }

  @media (min-width: ${rem(769)}) {
    padding: ${rem(12)};
    background-color: white;
    box-shadow: 0px 10px 27px -2px rgba(0,0,0,0.1),
                0px -10px 27px -2px rgba(0,0,0,0.1) ;
    margin-bottom: ${rem(170)}
  }
`;

const NavBtns = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const CartBtn = styled.button`
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const CartBtnImg = styled.div`
  display: inline-block;
  width: 2.125rem;
  height: 1.875rem;
  background-image: url(${blackCart});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 48rem) {
    background-image: url(${whiteCart});
  }
`;

const CartContents = styled.span`
  display: block;
  width: 1.375rem;
  height: 1.375rem;
  background-color: var(--red);
  border-radius: 50%;
  font-size: 1rem;
  color: white;

  @media (max-width: 48rem) {
    background-color: white;
    color: var(--red);
  }
`;

const Logo = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  @media (max-width: 48rem) {
    background-image: url(${logoMobile});
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