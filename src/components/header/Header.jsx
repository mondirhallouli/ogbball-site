import Nav from "./Nav"
import { HeaderTitle, HeaderSubtitle } from '../Typography'
import { Container } from '../Layout'
import { HeaderWrapper, HeaderCtaWrapper } from './Components'
import { CtaBtn } from '../Buttons'
import { useState } from "react"



const Header = ({ open, toggleMenu, toggleCart }) => {

  const [stick, setStick] = useState(false);
  const fixNav = () => { window.scrollY >= 50 ? setStick(true) : setStick(false) };
  window.addEventListener('scroll', fixNav);

  return (
    <HeaderWrapper>
      <Nav toggleMenu={toggleMenu} toggleCart={toggleCart} open={open} stick={stick} />
      <Container>
        <HeaderTitle stick={stick}>Get Your Game to The Next Level</HeaderTitle>
        <HeaderSubtitle>
          Transform your basketball skills into the next level and learn from the best how you can bring your A game to any match.
        </HeaderSubtitle>
        <HeaderCtaWrapper>
          <CtaBtn>Book Coaching</CtaBtn>
          <CtaBtn>See Shop</CtaBtn>
        </HeaderCtaWrapper>
      </Container>
    </HeaderWrapper>
  )
}

export default Header