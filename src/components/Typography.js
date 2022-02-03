import styled from 'styled-components'

const HeaderTitle = styled.h1`
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

const HeaderSubtitle = styled.p`
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

export { HeaderTitle, HeaderSubtitle }