import styled from 'styled-components';
import rem from '../Utils';

// TIPS SECTION COMPONENTS
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