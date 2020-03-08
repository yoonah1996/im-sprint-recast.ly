import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { searchYouTube } from "../searchYouTube";
import { fakeData } from "./__test__/fakeData";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// 비디오 리스트
			showVideoList: fakeData,

			showPlay: {
				etag: 'L332gQTY',
				id: {
					videoId: 'dQw4w9WgXcQ'
				},
				snippet: {
					title: 'Video Title',
					description: 'Video Description',
					thumbnails: {
						default: {
							url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
						}
					}
				}
			}
		};
		this.showVideo = this.showVideo.bind(this);
		this.searchVideo = this.searchVideo.bind(this);
	}
	//비디오 리스트 클릭시 showPlay에 데이터를 바꿔 렌더
	showVideo(obj) {
		this.setState(() => ({ showPlay : obj }));
	}
	// 검색 클릭시 받아온 검색어를 검색하고 
	searchVideo(inputStr) {
		searchYouTube(
			{ query: inputStr, max: 5, key: this.props.YOUTUBE_API_KEY },
			(data) => {
				this.setState(() => ({showVideoList : data, showPlay : data[0]}));
			}
		);
	}

	componentDidMount() {
		// this.searchVideo("코드스테이츠");
	}

	// componentDidUpdate() {
		// searchYouTube(
		// 	{ query: this.state.name, max: 5, key: this.props.YOUTUBE_API_KEY },
		// 	function(data) {
		// 		this.startPoint(data);
		// 	}.bind(this)
		// );
	// }

	render() {
		return (
			<div>
				<Nav 
				searchVideo={this.searchVideo} 
				/>
				<div className="col-md-7">
					{/* 제목, url, 설명을 넘겨준다. */}
					<VideoPlayer
						video = {this.state.showPlay}
					/>
				</div>
				<div className="col-md-5">
					<VideoList
						// 동영상 목록 데이터와 클릭 이벤트 함수를 넘겨준다.
						videos={this.state.showVideoList}
						showVideo={this.showVideo}
					/>
				</div>
			</div>
		);
	}
}

// ReactDOM.render(<App />, document.getElementById("app"))

export default App;
