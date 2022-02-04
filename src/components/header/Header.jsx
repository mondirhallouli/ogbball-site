import styled from 'styled-components'
import Nav from "./Nav"
import Container from "../Container"
import { HeaderTitle, HeaderSubtitle } from '../Typography'
import { HeaderCtaWrapper } from '../Layout'
import { CtaBtn } from '../Buttons'
import headerBgImgDt from "../../assets/header-bg-desktop.svg"
import headerBgImgTb from "../../assets/header-bg-tablet.svg"
import headerBgImgMb from "../../assets/header-bg-mobile.svg"

const HeaderWrapper = styled.header`
  padding: 1rem 2.25rem 14.875rem;
  margin: 0 auto 6.25rem;
  background-image: url(${headerBgImgDt});
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;

  @media (max-width: 48rem) {
    background-image: url(${headerBgImgTb});
    padding-top: 2.5rem;
    padding-bottom: 16.875rem;
  }

  @media (max-width: 23.4375rem) {
    background-image: url(${headerBgImgMb});
    padding-top: 3rem;
    padding-bottom: 6.25rem;
  }
`;

const Header = ({ open, toggleMenu, toggleCart }) => {

  return (
    <HeaderWrapper>
      <Container>
        <Nav toggleMenu={toggleMenu} toggleCart={toggleCart} open={open} />
        <HeaderTitle>Get Your Game to The Next Level</HeaderTitle>
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