import React from 'react';
import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

import { fakeData } from "./__test__/fakeData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeData: fakeData,
      key: {
        item: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
        title: "Video Title",
        description: "Video Description"
      }
    };
    this.handleCilck = this.handleCilck.bind(this);
  }

  // handleCilck = () => {
  //   console.log("클릭")
  //   this.setState((this.state) =>{
  //     this.state.key.item = fakeData.snippet.thumbnails.default.url });
  // }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer data={this.state.key} />
        </div>
        <div className="col-md-5">
          <VideoList fakeData={fakeData} />
        </div>
      </div>
    );
  }

}


// ReactDOM.render(<App />, document.getElementById("app"))

export default App;
