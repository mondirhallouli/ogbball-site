import styled from "styled-components";
import rem from "../Utils";

const LegalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${rem(16)};
  margin-bottom: ${rem(40)};

  @media (min-width: ${rem(376)}) {
    margin-bottom: 0;
  }
  
  @media (min-width: ${rem(1025)}) {
    flex-direction: row;
    justify-content: space-between;
    column-gap: ${rem(30)};
  }
`;

const LegalLinks = styled.a`
  display: block;
  color: var(--white);

  &:hover {
    opacity: 0.8;
  }
`;

export default function Legal() {
  return (
    <LegalWrapper>
      <LegalLinks>Terms &amp; Conditions</LegalLinks>
      <LegalLinks>Shipping &amp; Returns</LegalLinks>
      <LegalLinks>Privacy Policy</LegalLinks>
    </LegalWrapper>
  )
}