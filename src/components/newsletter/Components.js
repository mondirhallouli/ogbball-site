import styled from "styled-components";
import rem from "../Utils";

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
