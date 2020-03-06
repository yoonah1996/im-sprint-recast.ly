import React from 'react';

const VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item"
        src= {props.item} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.title}</h3>
      <div>{props.description}</div>
    </div>
  </div>
);

export default VideoPlayer;

{/* <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>Video Title</h3>
      <div>Video Description</div>
    </div>
  </div> */}