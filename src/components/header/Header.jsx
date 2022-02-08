import styled from 'styled-components'
import Nav from "./Nav"
import { HeaderTitle, HeaderSubtitle } from '../Typography'
import { HeaderCtaWrapper, Container } from '../Layout'
import { CtaBtn } from '../Buttons'
import headerBgImgDt from "../../assets/header-bg-desktop.svg"
import headerBgImgTb from "../../assets/header-bg-tablet.svg"
import headerBgImgMb from "../../assets/header-bg-mobile.svg"
import rem from '../Utils'

const HeaderWrapper = styled.header`
  height: ${rem(666.5)};
  padding: ${rem(48)} ${rem(36)} ${rem(100)};
  margin: 0 auto ${rem(100)};
  background-image: url(${headerBgImgMb});
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;

  @media (min-width: ${rem(376)}) {
    height: ${rem(804)};
    background-image: url(${headerBgImgTb});
    padding-top: ${rem(40)};
    padding-bottom: ${rem(270)};
  }

  @media (min-width: ${rem(1025)}) {
    height: ${rem(720)};
    padding: ${rem(16)} ${rem(36)} ${rem(238)};
    background-image: url(${headerBgImgDt});
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