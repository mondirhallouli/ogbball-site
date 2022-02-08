import logo from "../../assets/logo.svg"
import styled from 'styled-components'
import rem from '../Utils'

const Menu = styled.div`
  width: 50vw;
  height: 100vh;
  padding: ${rem(80)} 0;
  background-color: var(--white);
  position: fixed;
  top: 0;
  left: ${(props) => props.open ? '0%' : '-100%'};
  box-shadow: ${rem(10)} 0px ${rem(27)} -${rem(2)} rgba(0,0,0,0.1);
  z-index: 100;
  transition: all 200ms ease-in-out;

  @media (max-width: ${rem(375)}) {
    width: 70vw;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: ${rem(32)};
`;

const MenuItem = styled.a`
  display: block;
  font-size: ${rem(24)};
  text-align: center;
  margin-bottom: ${rem(16)};

  &:hover {
    opacity: 0.8;
  }
`;

const MobileMenu = ({ open }) => {
  return (
    <Menu open={open}>
      <MenuWrapper>
        <a href="/">
          <img src={logo} alt="ogbball-logo" />
        </a>

        <MenuWrapper>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="#shop">Shop</MenuItem>
          <MenuItem href="#coaching">Coaching</MenuItem>
          <MenuItem href="#tips">Tips</MenuItem>
          <MenuItem href="#contact">Contact</MenuItem>
        </MenuWrapper>
      </MenuWrapper>
    </Menu>
  )
}

export default MobileMenu