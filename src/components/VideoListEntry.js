import React from 'react';
import { fakeData } from './__test__/fakeData';
// console.log(fakeData)
const newTitle = [];
for(let val of fakeData){
  newTitle.push(val.snippet.title);
}
  // return el.snippet.title
  

console.log(newTitle);
const VideoListEntry = () => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src="https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title"> {`${newTitle}`} </div>
      <div className="video-list-entry-detail"> {`${fakeData.forEach(el => {el.snippet.description})}`} </div>
    </div>
  </div>
);

// {fakeData.forEach(el =>{
//   el
// })}

export default VideoListEntry;
