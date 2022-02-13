import styled from "styled-components";
import rem from "../Utils";

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
