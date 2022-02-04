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