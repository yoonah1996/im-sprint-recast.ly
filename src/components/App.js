import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import YOUTUBE_API_KEY from "../../config/youtube"
import searchYouTube from "../searchYouTube"
import { fakeData } from "./__test__/fakeData";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fakeData: fakeData,
			item: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
			title: "Video Title",
			description: "Video Description",
			handleClick: function(obj) {
				this.setState({
					item: obj.snippet.thumbnails.default.url
				});
			}.bind(this)
		};
	}

	render() {
		return (
			<div>
				<Nav />
				<div className="col-md-7">
					<VideoPlayer
						item={this.state.item}
						title={this.state.title}
						description={this.state.description}
					/>
				</div>
				<div className="col-md-5">
					<VideoList
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
