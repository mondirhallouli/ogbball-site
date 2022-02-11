import styled from "styled-components";
import rem from "../Utils";
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(16)};
  margin-bottom: ${rem(40)};

  @media (min-width: ${rem(376)}) {
    margin-bottom: 0;
  }
`;

const SocialLink = styled.a`
  display: block;
  width: ${rem(34)};
  height: ${rem(34)};
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export default function Social() {
  return (
    <SocialWrapper>
      <SocialLink>
        <img src={instagram} alt='instagram' />
      </SocialLink>
      <SocialLink>
        <img src={youtube} alt='youtube' />
      </SocialLink>
    </SocialWrapper>
  )
}