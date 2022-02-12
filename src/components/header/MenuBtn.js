import styled from 'styled-components'
import rem from '../Utils'

const MenuBtn = styled.div`
  position: relative;
  z-index: 9999;
  width: ${rem(40)};
  height: ${rem(40)};
  transform: rotate(0deg);
  transition: all 0.25s ease-in;
  cursor: pointer;
  margin-left: auto;
  span {
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: var(--wheat);
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: ${(props) =>
    props.open ? 'all 0.25s ease-in' : 'all 0.25s ease-out'};
  } 
  span:nth-child(1) {
    top: ${(props) => (props.open ? 'calc(50% - 3px)' : '10%')};
    transform-origin: left center;
  }
  span:nth-child(2) {
    top: ${(props) => (props.open ? 0 : 'calc(50% - 3px)')};
    left: ${(props) => (props.open ? 'calc(50% - 3px)' : null)};
    width: ${(props) => (props.open ? '6px' : null)};
    height: ${(props) => (props.open ? '100%' : null)};
    transform-origin: left center;
  }
  span:nth-child(3) {
    top: calc(90% - 6px);
    transform-origin: left center;
    width: ${(props) => (props.open ? 0 : null)};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
`;

export default MenuBtn