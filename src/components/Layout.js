import styled from "styled-components";
import rem from "./Utils";

export const HeaderCtaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.25rem;
  row-gap: 1rem;

  @media (max-width: 23.4375rem){
    flex-direction: column;
  }
`;

// SHOP SECTION COMPONENTS
export const ShopWrapper = styled.div`
  margin-bottom: 6.25rem;
`;

export const ShopItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 23.75rem));
  justify-content: center;
  justify-items: center;
  row-gap: 3.125rem;

  @media (min-width: 48.0625rem) {
    column-gap: 6.25rem;
    row-gap: 4rem;
  }
`;

export const ShopItemCard = styled.div`
  width: 18.75rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 48.0625rem) {
    width: 23.75rem;
  }
`;

export const ShopItemImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 1.875rem;
`;

// COACHING SECTION COMPONENTS
export const CoachingSection = styled.div`
  padding: 0 ${rem(36)};
  margin-bottom: ${rem(100)};
`;

export const CoachingContent = styled.div`
  text-align: center;

  @media (min-width: 48.0625rem) {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${rem(60)};
    text-align: left;
  }
`;

// COACHING SECTION COMPONENTS
export const YtWrapper = styled.div`
  padding: 0 ${rem(36)};
  margin-bottom: ${rem(100)};
`;

export const YtContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${rem(30)};

  @media (min-width: ${rem(769)}) {
    gap: ${rem(20)};
  }
  
  @media (min-width: ${rem(1025)}) {
    gap: ${rem(30)};
  }
`;

// CONTACT SECTION COMPONENTS
export const ContactForm = styled.form`
  max-width: ${rem(780)};
  padding: 0 ${rem(36)};
  margin: 0 auto ${rem(100)};

  @media (min-width: ${rem(769)}) {
    padding: 0 ${rem(16)};
  }
`;

export const ContactFlex = styled.div`
  margin-bottom: ${rem(16)};

  @media (min-width: ${rem(769)}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${rem(20)};
  }
`;

export const ContactLeft = styled.div`
  margin-bottom: ${rem(16)};

  @media (min-width: ${rem(769)}) {
    margin: 0;
  }
`;

export const ContactRight = styled.textarea`
  display: block;
  width: 100%;
  height: ${rem(136)};
  resize: vertical;
  margin: 0 auto;
  padding: ${rem(13)} ${rem(22)};
  border: ${rem(2)} solid var(--purple);
  font-size: ${rem(18)};
  color: var(--purple);

  @media (min-width: ${rem(769)}) {
    height: auto;
  }
`;

export const Input = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder
}))`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: ${rem(13)} ${rem(22)};
  border: ${rem(2)} solid var(--purple);
  font-size: ${rem(18)};
  color: var(--purple);

  &:first-child {
    margin-bottom: ${rem(16)};
  }
`;

export const SubmitBtn = styled.button`
  display: block;
  width: ${rem(140)};
  margin: 0 auto;
  padding: ${rem(16)} 0;
  background-color: var(--purple);
  font-size: ${rem(20)};
  color: var(--white);

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: ${rem(769)}) { padding: ${rem(12)} 0; }
  @media (min-width: ${rem(1025)}) { 
    width: ${rem(220)};
    padding: ${rem(12)} 0;
    font-size: ${rem(24)};
  }
`;

// NEWSLETTER SECTION COMPONENTS
export const NLWrapper = styled.div`
  padding: 0 ${rem(36)};
  margin: 0 auto ${rem(100)};
`;

export const NLForm = styled.form`
  max-width: ${rem(620)};
  margin: 0 auto;

  @media (min-width: ${rem(769)}) {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: ${rem(20)};
  }
`;

export const NLInput = styled.input`
  display: block;
  width: 100%;
  height: ${rem(50)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${rem(16)};
  color: var(--wheat);
  padding: 0 ${rem(16)};
  margin-bottom: ${rem(16)};
  border: ${rem(2)} solid var(--wheat);

  @media (min-width: ${rem(769)}) {
    height: ${rem(60)};
    margin-bottom: 0;
    font-size: ${rem(18)};
  }
`;

export const NLBtn = styled.button`
  display: block;
  width: ${rem(140)};
  height: ${rem(50)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: var(--wheat);
  font-size: ${rem(16)};
  color: var(--white);

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: ${rem(769)}) {
    width: ${rem(220)};
    height: ${rem(60)};
    font-size: ${rem(18)};
  }
`;

// FOOTER SECTION COMPONENTS
export const FooterFlex = styled.div`
  max-width: ${rem(940)};

  @media (min-width: ${rem(376)}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    row-gap: ${rem(40)};
    column-gap: ${rem(78)};
  }
`;