import React from "react";

const VideoListEntry = (props) => (
	<div className="video-list-entry">
		<div className="media-left media-middle">
			{/* <img className="media-object" src="https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt="" /> */}
			<img
				className="media-object"
				src={props.value.snippet.thumbnails.default.url}
        alt=""
        style={ {width:"150px", height: "150px"} }
			/>
		</div>
		<div className="media-body">
			<div
				className="video-list-entry-title"
				onClick={() => props.handleClick(props.value)}
			>
				{" "}
				{props.value.snippet.title}{" "}
			</div>
			<div className="video-list-entry-detail">
				{" "}
				{props.value.snippet.description}{" "}
			</div>
		</div>
	</div>
);

export default VideoListEntry;
