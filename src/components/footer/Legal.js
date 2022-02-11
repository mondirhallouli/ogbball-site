import styled from "styled-components";
import rem from "../Utils";

const LegalWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, auto);
  row-gap: ${rem(16)};
  margin-bottom: ${rem(40)};

  @media (min-width: ${rem(376)}) {
    margin-bottom: 0;
  }
  
  @media (min-width: ${rem(1025)}) {
    grid-template-columns: repeat(3, ${rem(146)});
    grid-template-rows: auto;
    column-gap: ${rem(30)};
  }
`;

const LegalLinks = styled.a`
  display: block;
  color: var(--white);
  cursor: pointer;
  
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