import { Container, ShopItemWrapper, ShopItemCard, ShopItemImg, ShopWrapper } from '../Layout';
import { SectionTitle, ShopCardPrice, ShopCardTitle } from '../Typography';
import { ShopCardBtn } from '../Buttons';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../state/cart/shopSlice';

export default function Shop() {

  const products = useSelector(state => state.shop.products);
  const dispatch = useDispatch();

  const handleAddToCart = product => {
    dispatch(addToCart({ img: product.img, title: product.title, price: product.price }));
  }

  return (
    <ShopWrapper>
      <Container>
        <SectionTitle>latest merch</SectionTitle>
        <ShopItemWrapper>
          {!products && <p>Error! Can't fetch products.</p>}
          {
            products.map(product => (
              <ShopItemCard key={product.id}>
                <ShopItemImg src={product.img} />
                <ShopCardTitle>{product.title}</ShopCardTitle>
                <ShopCardPrice>{`$${product.price}`}</ShopCardPrice>
                <ShopCardBtn onClick={() => handleAddToCart(product)}>add to cart</ShopCardBtn>
              </ShopItemCard>
            ))
          }
        </ShopItemWrapper>
      </Container>
    </ShopWrapper>
  );
};
