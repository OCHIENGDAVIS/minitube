import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  onSearch = async (term) => {
    const videosList = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState(() => ({
      videos: videosList.data.items,
      selectedVideo: videosList.data.items[0],
    }));
  };
  onVideoSelect = (video) => {
    this.setState(() => ({ selectedVideo: video }));
  };
  componentDidMount() {
    this.onSearch('buildings');
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar onSearch={this.onSearch} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
