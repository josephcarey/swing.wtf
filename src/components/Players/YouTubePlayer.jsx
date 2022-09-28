import React from 'react';
import PropTypes from 'prop-types';

const YouTubePlayer = ({ url }) => (
  <>
    {url && (
      <iframe
        width="100%"
        height="315"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    )}
  </>
);

YouTubePlayer.propTypes = {
  url: PropTypes.string,
};

export default YouTubePlayer;
