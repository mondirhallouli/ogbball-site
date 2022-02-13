import styled from "styled-components";
import rem from "../Utils";

// COACHING SECTION COMPONENTS
export const CoachingSection = styled.div`
  padding: 0 ${rem(36)};
  margin-bottom: ${rem(100)};
`;

export const CoachingContent = styled.div`
  text-align: center;

  @media (min-width: ${rem(769)}) {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${rem(60)};
    text-align: left;
  }
`;