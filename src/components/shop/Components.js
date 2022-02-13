import styled from "styled-components";
import rem from "../Utils";

// SHOP SECTION COMPONENTS
export const ShopWrapper = styled.div`
  margin-bottom: ${rem(100)};
`;

export const ShopItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${rem(300)}, ${rem(380)}));
  justify-content: center;
  justify-items: center;
  row-gap: ${rem(50)};

  @media (min-width: ${rem(769)}) {
    column-gap: ${rem(100)};
    row-gap: ${rem(64)};
  }
`;

export const ShopItemCard = styled.div`
  width: ${rem(300)};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${rem(769)}) {
    width: ${rem(380)};
  }
`;

export const ShopItemImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: ${rem(30)};
`;