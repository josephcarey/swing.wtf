import React from 'react';
import PropTypes from 'prop-types';

const SpotifyPlayer = ({ url }) => (
  <>
    {url && (
      <iframe
        title="Example West Coast Swing Music"
        src={url}
        width="100%"
        height="380"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    )}
  </>
);

SpotifyPlayer.propTypes = {
  url: PropTypes.string,
};

export default SpotifyPlayer;
