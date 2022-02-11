import PropTypes from "prop-types";
import styled from "styled-components";
import rem from '../Utils';

const VideoWrapper = styled.div`
  width: ${rem(300)};
  height: ${rem(200)};
`;

const YoutubeEmbed = ({ embedId }) => (
  <VideoWrapper>
    <iframe
      width='100%'
      height='100%'
      src={`https://www.youtube.com/embed/${embedId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen></iframe>
  </VideoWrapper>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;