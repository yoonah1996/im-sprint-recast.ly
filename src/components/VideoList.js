import React from "react";
import VideoListEntry from "./VideoListEntry";

// 실제 API를 쓰게 되면 이 fakeData는 더이상 import 하지 않아야 합니다.
import { fakeData } from "./__test__/fakeData";
console.log(fakeData);

const VideoList = () => (
  <div className="video-list media">
			{fakeData.map(el => (
				<VideoListEntry key={el.id.videoId.toString()} value={el} />
			))}
		</div>
	);


export default VideoList;