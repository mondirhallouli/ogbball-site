import logo from '../../assets/logo.svg'
import logoMobile from '../../assets/logoMobile.svg'
import blackCart from '../../assets/shopping-cart.svg'
import whiteCart from '../../assets/shopping-cart-white.svg'
import styled from 'styled-components'
import MenuBtn from './MenuBtn'
import MenuBtnWrapper from './MenuBtnWrapper'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 9.375rem;
  padding: 0.75rem;
  background-color: white;
  box-shadow: 0px 10px 27px -2px rgba(0,0,0,0.1),
   0px -10px 27px -2px rgba(0,0,0,0.1) ;

  @media (max-width: 48rem) {
    padding: 0;
    background-color: transparent;
    box-shadow: none;
  }

  @media (max-width: 23.4375rem) {
    margin-bottom: 4.65625rem;
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