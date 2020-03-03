import React from "react";
import VideoListEntry from "./VideoListEntry";

// 실제 API를 쓰게 되면 이 fakeData는 더이상 import 하지 않아야 합니다.
import {fakeData} from "./__test__/fakeData";
console.log(fakeData);

const VideoList = () => (
  <div className="video-list media">
			{this.fakeData.map(el => (
				<VideoListEntry key={el.id.videoId.toString()} value={el} />
			))}
		</div>
	);
	// const videoList = fakeData.map((fakeData) =>
	//   <li key={fakeData.id.toString()}>
	//     {fakeData.snippet}
	//   </li>
	// );
	// return (
	//   <ul>{videoList}</ul>
	// )


export default VideoList;
