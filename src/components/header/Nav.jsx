import MenuBtn from './MenuBtn'
import MenuBtnWrapper from './MenuBtnWrapper'
import { useSelector } from 'react-redux'
import {
  Navbar,
  Logo,
  NavBtns,
  CartBtn,
  CartBtnImg,
  CartContents
} from '../Layout';



const Nav = ({ open, toggleMenu, toggleCart, stick }) => {

  const cart = useSelector(state => state.shop.cart.items);
  let cartItemCount = cart.length;

  return (
    <Navbar stickToTop={stick}>
      <Logo />

      <NavBtns>
        <CartBtn onClick={toggleCart}>
          <CartBtnImg />
          <CartContents>{cartItemCount}</CartContents>
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