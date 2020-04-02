import React from "react";
import Axios from "axios";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
      this.onTermSubmit('Ben Stokes')
  }

  onTermSubmit = async term => {
    const response = await Axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 6,
          key: "AIzaSyBbFGHCqb676fksMsJgPFMDmMWe95mEdm0",
          q: term
        }
      }
    );

    this.setState({
      videos: response.data.items,
      selectedVideo : response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{marginTop : '10px'}}>
  
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <SearchBar callMeWhenSubmitted={this.onTermSubmit} />
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column" style={{marginTop : '110px'}}>
              <VideoList
                videos={this.state.videos}
                selectedVideo={this.onVideoSelect}
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
