import styled from 'styled-components'

const MenuBtnWrapper = styled.div`
  height: 100%;
  width: 100%;
  transition: ${(props) => props.open ? 'all 0.25s ease-in-out' : 'all 0.25s ease-in-out'};
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'none')};
`;

export default MenuBtnWrapper