import React from "react";
import VideoListEntry from "./VideoListEntry";

const VideoList = (props) => (
  <div className="video-list media">
			{props.fakeData.map(el => (
				<VideoListEntry key={el.id.videoId.toString()} value={el} />
			))}
		</div>
	);
//key={item.toString()} value={nowView}

export default VideoList;