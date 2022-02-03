import styled from 'styled-components'

export const SectionTitle = styled.h2`
  margin-bottom: 1.875rem;
  font-family: var(--heading-f);
  font-weight: 700;
  font-size: 1.625rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--green-block);

  @media (min-width: 48rem) {
    font-size: 2rem;
    margin-bottom: 3.75rem;
  }
`;

// HEADER SECTION TEXT COMPONENTS
export const HeaderTitle = styled.h1`
  max-width: 48.0625rem;
  margin: 0 auto 1.5rem;
  font-family: var(--heading-f);
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
  color: var(--white);

  @media (max-width: 48rem) {max-width: 31.25rem;}
  @media (max-width: 23.4375rem) {width: 100%; font-size: 2.25rem;}
`;

export const HeaderSubtitle = styled.p`
  max-width: 25.25rem;
  margin: 0 auto 2.75rem;
  font-family: var(--copy-f);
  font-size: 1.125rem;
  font-weight: 400;
  text-align: center;
  color: var(--white);

  @media (max-width: 48rem) { max-width: 21.25rem; margin-bottom: 2.125rem;}
  @media (max-width: 23.4375rem) { width: 100%; margin-bottom: 1.5rem;}
`;

// SHOP SECTION TEXT COMPONENTS
export const ShopCardTitle = styled.h3`
  font-family: var(--heading-f);
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  color: var(--green-black);
  margin-bottom: 1rem;

  @media (min-width: 48rem){
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

export const ShopCardPrice = styled.h3`
  font-family: var(--heading-f);
  font-weight: 700;
  font-size: 1.75rem;
  text-align: center;
  color: var(--purple);
  margin-bottom: 1.25rem;

  @media (min-width: 48rem) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;