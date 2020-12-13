import React from "react"
import axios from 'axios';

class NowPlaying extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: [],
      isLoading: true,
    };
  }

  fetchMusic() {
    axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=samuelgoddard&api_key=ac87bb29b6923fff178ee73d44b95a9c&format=json`)
    
    .then(res => 
      this.setState({
        track: res.data,
        isLoading: false
      })
    )
    .catch((err) => {
      console.log(err + ': Error accessing Last FM API');
    });
  }

  componentDidMount() {
    this.fetchMusic();
  }
  
  render() {
    return (
      <>
        {!this.state.isLoading ? (
          <>
            <span className="inline">I just listened to <span className="italic">{ this.state.track.recenttracks.track[0].name }</span> by <span className="italic">{ this.state.track.recenttracks.track[0].artist["#text"] }</span></span>
          </>
        ) : (
          <span className="inline">I just listened to &hellip;</span>
        )}
      </>
    );
  }
}

export default NowPlaying;