import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos.map((video, i) => {
    return <VideoItem video={video} key={i} onVideoSelect={onVideoSelect} />;
  });
  return <div className='ui relaxed divided list '>{videoList}</div>;
};
export default VideoList;
