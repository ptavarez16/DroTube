import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBvAM36HwBlBj1wif-qFFfSKwzeWoW7KrQ';



class App extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
        videos: [],
        selectedVideos: null
       };
       
      this.videoSearch('');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideos: videos[0]
      });
    });
  }
  
  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 500);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideos}/>
        <VideoList
          onVideoSelect={selectedVideos => this.setState({selectedVideos})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
