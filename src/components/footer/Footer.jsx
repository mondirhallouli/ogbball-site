import styled from 'styled-components';
import { FooterFlex } from './Components';
import { Copyright } from '../Typography';
import rem from '../Utils';
import Legal from './Legal';
import Social from './Social';

const FooterContainer = styled.footer`
  padding: ${rem(24)} ${rem(36)};
  background-image: linear-gradient(45deg, var(--wheat) 0%, var(--red) 100%);
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterFlex>
        <Legal />
        <Social />
        <Copyright>&copy; OGB &mdash; 2022</Copyright>
      </FooterFlex>
    </FooterContainer>
  )
}