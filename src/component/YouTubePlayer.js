import React from 'react';
import ReactPlayer from 'react-player/youtube';

const YouTubePlayer = ({ url, width = '100%', height = '100%', controls = true }) => {
  return (
    <div className="video-player" style={{ position: 'relative', paddingTop: '56.25%' }}>
      <ReactPlayer
        url={url}
        width={width}
        height={height}
        controls={controls}
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};

export default YouTubePlayer;
