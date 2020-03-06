import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { searchYouTube } from "../searchYouTube";
import { fakeData } from "./__test__/fakeData";

class App extends React.Component {
	constructor(props) {
		super(props);
		//초기 화면
		this.state = {
			fakeData: fakeData,
			name: "코드스테이츠",
			item: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
			title: "Video Title",
			description: "Video Description",
			// 클릭시 발생 => this.state의 data변경
			handleClick: function(obj) {
				this.setState({
					item:
						"https://www.youtube.com/embed/" + obj.id.videoId + "?autoplay=1",
					title: obj.snippet.title,
					description: obj.snippet.description
				});
			}.bind(this),
			clickToSearch: function(inputStr) {
				this.setState({
					name: inputStr
				});
			}.bind(this)
		};
	}

	startPoint(data) {
		this.setState({
			fakeData: data,
			item:
				"https://www.youtube.com/embed/" + data[0].id.videoId + "?autoplay=1",
			title: data[0].snippet.title,
			description: data[0].snippet.description
		});
	}

	componentDidMount() {
		searchYouTube(
			{ query: this.state.name, max: 5, key: this.props.YOUTUBE_API_KEY },
			function(data) {
				this.startPoint(data);
			}.bind(this)
		);
	}

	componentDidUpdate() {
		searchYouTube(
			{ query: this.state.name, max: 5, key: this.props.YOUTUBE_API_KEY },
			function(data) {
				this.startPoint(data);
			}.bind(this)
		);
	}

	render() {
		return (
			<div>
				<Nav clickToSearch={this.state.clickToSearch} />
				<div className="col-md-7">
					{/* 제목, url, 설명을 넘겨준다. */}
					<VideoPlayer
						item={this.state.item}
						title={this.state.title}
						description={this.state.description}
					/>
				</div>
				<div className="col-md-5">
					<VideoList
						// 동영상 목록 데이터와 클릭 이벤트 함수를 넘겨준다.
						fakeData={this.state.fakeData}
						handleClick={this.state.handleClick}
					/>
				</div>
			</div>
		);
	}
}

// ReactDOM.render(<App />, document.getElementById("app"))

export default App;
