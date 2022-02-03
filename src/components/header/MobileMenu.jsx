import logo from "../../assets/logo.svg"
import styled from 'styled-components'

const Menu = styled.div`
  width: 50vw;
  height: 100vh;
  padding: 5rem 0;
  background-color: white;
  position: fixed;
  top: 0;
  left: ${(props) => props.open ? '0%' : '-100%'};
  box-shadow: 10px 0px 27px -2px rgba(0,0,0,0.1);
  z-index: 100;
  transition: all 200ms ease-in-out;

  @media (max-width: 375px) {
    width: 70vw;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
`;

const MenuItem = styled.a`
  display: block;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;

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