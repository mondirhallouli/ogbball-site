import styled from "styled-components";
import rem from "../Utils";

// FOOTER SECTION COMPONENTS
export const FooterFlex = styled.div`
  max-width: ${rem(940)};
  margin: 0 auto;

  @media (min-width: ${rem(376)}) {
    display: grid;
    grid-template-columns: 3fr 1fr 2fr;
    gap: ${rem(40)} ${rem(88)};
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
  
`;