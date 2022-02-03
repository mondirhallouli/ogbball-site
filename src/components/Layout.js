import styled from "styled-components";

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
  place-items: center;
  justify-content: center;
  row-gap: 3.125rem;

  @media (min-width: 23.4375rem) {
    column-gap: 1.25rem;
  }
`;

export const ShopItemCard = styled.div`
  width: 18.75rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 48rem) {
    width: 23.75rem;
  }
`;

export const ShopItemImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 1.875rem;
`;