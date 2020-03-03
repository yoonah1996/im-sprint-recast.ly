import React from 'react';
import { fakeData } from './__test__/fakeData';

const posts = []
const post = {}

for(let val of fakeData) {
  post["url"] = val.snippet.thumbnails.default.url;
  post["title"] = val.snippet.title 
  post["descript"] =val.snippet.description
  posts.push(JSON.parse(JSON.stringify(post)))
}

 const VideoListEntry  = menus.map((me, idx) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      {/* <img className="media-object" src="https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt="" /> */}
      <img className="media-object" key = {idx} src={post.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title"> {``} </div>
      <div className="video-list-entry-detail"> {``} </div>
    </div>
  </div>
));



export default VideoListEntry;