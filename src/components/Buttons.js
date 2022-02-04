import styled from 'styled-components';
import rem from './Utils';

export const CtaBtn = styled.button`
  display: block;
  width: ${rem(220)};
  padding: ${rem(16)} 0;
  background-color: var(--red);
  border-radius: ${rem(8)};
  box-shadow: 0px ${rem(4)} ${rem(4)} rgba(0, 0, 0, 0.25);
  font-size: ${rem(18)};
  color: var(--white);

  &:hover {
    opacity: 0.8;
  }
`;

// SHOP BUTTON COMPONENT
export const ShopCardBtn = styled.button`
  width: ${rem(180)};
  margin: 0 auto;
  padding: ${rem(18)} 0;
  background: var(--wheat);
  border-radius: ${rem(8)};
  font-size: ${rem(16)};
  text-transform: uppercase;
  text-align: center;
  color: var(--white);

  &:hover {
    opacity: 0.8;
  }
`;

// COACHING BUTTON COMPONENT
export const CoachingCta = styled.a`
  min-width: ${rem(300)};
  padding: ${rem(23)} 0;
  background: var(--red);
  border-radius: ${rem(8)};
  font-weight: 700;
  font-size: ${rem(18)};
  text-align: center;
  color: var(--white);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;