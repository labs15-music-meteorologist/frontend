import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import {
  getlikedSongs,
  getUsers,
  getSpotifyAccountDetails,
  persistUser,
  getSeveralTracks,
  createPlaylist,
  getCurrentUser,
  removeTrack
} from "../../Redux/Spotify/spotify.actions";
import { postDSSong } from "../../Redux/DS/ds.actions";
import LikedSongs from "../../components/dashboard/LikedSongs";
import '../../App.css'

// Styling
import "../../App.css";

class PlaylistItems extends React.Component {
  state = {
    collapse: true,
    steps: [
      {
        target: ".joyride-logo-1",
        content:
          "Welcome to Music Meteorologist! Here you will be able to rate songs based on characteristics and recieve song recommendations"
      },
      {
        target: ".joyride-player-2",
        content:
          "Here you can view what song you will be rating and the characteristics for that song",
        placement: "center"
      },
      {
        target: ".joyride-3",
        content: "Tap here to view more details on each of the characteristics",
        placement: "right"
      }
    ],
    popout: false,
    playlistCreated: false,
    userDataFetching: false
  };

    componentDidMount() {
    this.props.getSpotifyAccountDetails();

    if (this.props.spotifyUser.length > 0) {
      this.props.persistUser(this.props.spotifyUser);
    }
    this.props.getlikedSongs();
  }

  componentDidUpdate(prevProps) {
    // console.log('Previous Props', prevProps);
    // console.log('Current Props', this.props);

    if (this.state.userDataFetching === false && this.props.spotifyUser.id) {
      this.props.getCurrentUser(this.props.spotifyUser.id);
      this.setState({
        userDataFetching: true
      });
    }
    setTimeout(() => {
      if (
        !this.state.playlistCreated &&
        /* this.props.spotifyUser.id && */
        !this.props.fetchingCreatePlaylist &&
        // this.props.playlistId === null &&
        !this.props.currentUser.spotify_playlist_id
      ) {
        this.props.createPlaylist(this.props.spotifyUser.id);
      }
    }, 4000);

    if (this.props.playlistId && !this.state.playlistCreated) {
      this.props.persistUser(this.props.spotifyUser, this.props.playlistId);
      this.setState({
        playlistCreated: true
      });
      setTimeout(() => {
        this.props.getCurrentUser(this.props.spotifyUser.id);
      }, 5000);
    }

    // if no have then run createplaylist
    // update component state with flag to false

    // save playlist id through persistuser

    //   if (this.props.playlistId) {
    //     if (
    //       this.props.spotifyUser.id &&
    //       // this.props.playlistId &&
    //       !this.props.currentUser.spotify_playlist_id &&
    //       ) {
    //     // this.props.persistUser(this.props.spotifyUser);
    //     this.props.createPlaylist(this.props.spotifyUser.id);
    //     this.setState({
    //       playlistCreated: true,
    //     });
    //     console.log('INSIDE BIG BRAIN FUNCTION', this.props);
    //   }
    // }
  }

  openPlaylist() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  openAudioDetails() {
    this.setState({
      popout: !this.state.popout
    });
  }

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("ds_songs");
    this.props.history.push("/logout");
  };

  checkPremiumUser = () => {
    return this.props.spotifyUser.product &&
      this.props.fetchingSpotifyUser === false &&
      this.props.spotifyUser.product !== "premium"
      ? true
      : false;
  };

  checkNoIOS = () => {
    return window.navigator.platform === "iPhone" ||
      window.navigator.platform === "iPad" ||
      window.navigator.platform === "iPod"
      ? true
      : false;
  };
  render() {
    if (this.checkPremiumUser() || this.checkNoIOS()) {
      this.props.history.push("/info");
    }


    return (
      <div className="dashboard">
        <div>     
                <List>
                <div style={{ borderBottom: '1px solid #454B54', fontSize: 15, height: 20, color: '#454B54', fontWeight: "bold", display: 'flex', width: 'auto', marginLeft: '35px', marginRight: '35px', paddingBottom: '6px', marginBottom: '6px'}}>
                        <div style={{ marginLeft: 105 }}>Track / Artist </div>
                        <div style={{ marginLeft: 105 }}>Album </div>
                        <div style={{ marginLeft: 160 }}>Duration </div>
                        </div> 
            <Paper className="scroll"
              style={{
                maxHeight: '65vh',
                width: 'auto',
                minWidth: '550px',
                overflow: "auto",
                color: "white",
                marginLeft: '45px',
                marginRight: '45px',
                background: 'transparent',
                boxShadow: 'none',
                textAlign: 'left',
                scrollbarColor: 'blue'
              }}
                    >

            <LikedSongs props={this.props} />
            </Paper>
          </List>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spotifyUser: state.getUsersReducer.spotifyUser,
  currentUser: state.getCurrentUserReducer.currentUser,
  fetchingSpotifyUser: state.getUsersReducer.fetchingSpotifyUser,
  ds_songs: state.queueReducer.ds_songs,
  several_tracks: state.queueReducer.several_tracks,
  playlistId: state.createPlaylistReducer.playlistId,
  fetchingCreatePlaylist: state.createPlaylistReducer.fetchingPlaylist,
  status: state.removeTrackReducer.status
});

export default connect(mapStateToProps, {
  getlikedSongs,
  getUsers,
  getSpotifyAccountDetails,
  persistUser,
  postDSSong,
  getSeveralTracks,
  createPlaylist,
  getCurrentUser,
  removeTrack
})(PlaylistItems);
