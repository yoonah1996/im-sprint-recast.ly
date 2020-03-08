import React from "react";
import VideoListEntry from "./VideoListEntry";

const VideoList = (props) => (
	<div className="video-list media">
		{props.videos.map(el => (
			<VideoListEntry
				key={el.id.videoId.toString()}
				video={el}
				showVideo={props.showVideo}
			/>
		))}
	</div>
);
//key={item.toString()} value={nowView}

export default VideoList;
