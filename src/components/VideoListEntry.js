import React from 'react';

const VideoListEntry = (fakeData) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      {/* <img className="media-object" src="https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt="" /> */}
      <img className="media-object" src={fakeData.value.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title"> {fakeData.value.snippet.title} </div>
      <div className="video-list-entry-detail"> {fakeData.value.snippet.description} </div>
    </div>
  </div>
));



export default VideoListEntry;