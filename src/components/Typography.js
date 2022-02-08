import styled from 'styled-components'
import rem from './Utils'

export const SectionTitle = styled.h2`
  margin-bottom: ${rem(30)};
  font-family: var(--heading-f);
  font-weight: 700;
  font-size: ${rem(26)};
  text-align: center;
  text-transform: uppercase;
  color: var(--green-block);

  @media (min-width: ${rem(769)}) {
    font-size: ${rem(32)};
    margin-bottom: ${rem(50)};
  }
`;

// HEADER SECTION TEXT COMPONENTS
export const HeaderTitle = styled.h1`
  font-size: ${rem(36)};
  margin: 0 auto ${rem(24)};
  font-family: var(--heading-f);
  font-weight: 700;
  text-align: center;
  color: var(--white);

  @media (min-width: ${rem(376)}) {
    max-width: ${rem(500)};
    font-size: ${rem(48)};
  }

  @media (min-width: ${rem(1025)}) {
    max-width: 100%;
  }
`;

export const HeaderSubtitle = styled.p`
  width: 100%;
  margin: 0 auto ${rem(24)};
  font-family: var(--copy-f);
  font-size: ${rem(18)};
  font-weight: 400;
  text-align: center;
  color: var(--white);

  @media (min-width: ${rem(376)}) { max-width: ${rem(340)}; margin-bottom: ${rem(34)};}
  @media (min-width: ${rem(1025)}) { max-width: ${rem(404)}; margin-bottom: ${rem(44)};}
`;

// SHOP SECTION TEXT COMPONENTS
export const ShopCardTitle = styled.h3`
  font-family: var(--heading-f);
  font-weight: 700;
  font-size: ${rem(24)};
  text-align: center;
  color: var(--green-black);
  margin-bottom: ${rem(16)};

  @media (min-width: ${rem(769)}){
    font-size: ${rem(28)};
    margin-bottom: ${rem(24)};
  }
`;

export const ShopCardPrice = styled.h3`
  font-family: var(--heading-f);
  font-weight: 700;
  font-size: ${rem(28)};
  text-align: center;
  color: var(--purple);
  margin-bottom: ${rem(20)};

  @media (min-width: ${rem(769)}) {
    font-size: ${rem(32)};
    margin-bottom: ${rem(24)};
  }
`;

// COACHING SECTION TEXT COMPONENTS
export const CoachingDesc = styled.p`
  width: 100%;
  margin: 0 auto ${rem(40)};
  font-family: var(--copy-f);
  font-size: ${rem(16)};
  color: var(--purple);

  @media (min-width: ${rem(769)}) {
    width: ${rem(460)};
    margin: 0;
  } 
`;

// NEWSLETTER SECTION TEXT COMPONENTS
export const NLdesc = styled.p`
  font-size: ${rem(16)};
  text-align: center;
  color: var(--purple);
  margin-bottom: ${rem(16)};
`;

// FOOTER SECTION TEXT COMPONENT
export const Copyright = styled.p`
  color: var(--white);
`;