import React from 'react';
import { fakeData } from './__test__/fakeData';

const VideoListEntry = (fakeData) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      {/* <img className="media-object" src="https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt="" /> */}
      <img className="media-object" src={fakeData.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title"> {fakeData.snippet.title} </div>
      <div className="video-list-entry-detail"> {fakeData.snippet.description} </div>
    </div>
  </div>
);

console.log(fakeData)


export default VideoListEntry;
