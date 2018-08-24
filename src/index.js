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
       
      this.videoSearch('Anime');
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
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideos}/>
        <VideoList
          onVideoSelect={selectedVideos => this.setState({selectedVideos})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
