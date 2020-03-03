import React from 'react';
import { fakeData } from './__test__/fakeData';

const newUrl = []
for(let val of fakeData){
  newUrl.push(val.snippet.thumbnails.default.url);
}

const newTitle = []
for(let val of fakeData){
  newTitle.push(val.snippet.title);
}
// console.log(newTitle);
const newDescriptrion = []
for(let val of fakeData){
  newDescriptrion.push(val.snippet.description);
}


const VideoListEntry = () => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      {/* <img className="media-object" src="https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt="" /> */}
      <img className="media-object" src={`${newUrl.shift()}`} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title"> {`${newTitle.shift()}`} </div>
      <div className="video-list-entry-detail"> {`${newDescriptrion.shift()}`} </div>
    </div>
  </div>
);

// {fakeData.forEach(el =>{
//   el
// })}

export default VideoListEntry;
