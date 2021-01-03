import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  console.log();
  return (
    <div className='video-item item' onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        className='ui image '
        alt={video.snippet.title}
      />
      <div className='content'>
        <div className='header'>
          <h3> {video.snippet.title}</h3>
        </div>
      </div>
      <p>one of the best</p>
    </div>
  );
};

export default VideoItem;
