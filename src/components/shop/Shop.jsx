import { Container, ShopItemWrapper, ShopItemCard, ShopItemImg, ShopWrapper } from '../Layout';
import { SectionTitle, ShopCardPrice, ShopCardTitle } from '../Typography';
import { ShopCardBtn } from '../Buttons';
import blackHoodie from '../../assets/images/black-hoodie.png';
import whiteHoodie from '../../assets/images/white-hoodie.png';
import tshirt from '../../assets/images/t-shirt.png';
import tanktop from '../../assets/images/tanktop.png';

export default function Shop() {
  return (
    <ShopWrapper>
      <Container>
        <SectionTitle>latest merch</SectionTitle>
        <ShopItemWrapper>
          <ShopItemCard>
            <ShopItemImg src={blackHoodie} />
            <ShopCardTitle>Black OG Bball hoodie</ShopCardTitle>
            <ShopCardPrice>{`$${29.99}`}</ShopCardPrice>
            <ShopCardBtn>add to cart</ShopCardBtn>
          </ShopItemCard>

          <ShopItemCard>
            <ShopItemImg src={whiteHoodie} />
            <ShopCardTitle>White OG Bball hoodie</ShopCardTitle>
            <ShopCardPrice>{`$${29.99}`}</ShopCardPrice>
            <ShopCardBtn>add to cart</ShopCardBtn>
          </ShopItemCard>

          <ShopItemCard>
            <ShopItemImg src={tshirt} />
            <ShopCardTitle>White OG Bball t-shirt</ShopCardTitle>
            <ShopCardPrice>{`$${20.99}`}</ShopCardPrice>
            <ShopCardBtn>add to cart</ShopCardBtn>
          </ShopItemCard>

          <ShopItemCard>
            <ShopItemImg src={tanktop} />
            <ShopCardTitle>White OG Bball tanktop</ShopCardTitle>
            <ShopCardPrice>{`$${20.99}`}</ShopCardPrice>
            <ShopCardBtn>add to cart</ShopCardBtn>
          </ShopItemCard>
        </ShopItemWrapper>
      </Container>
    </ShopWrapper>
  );
};
