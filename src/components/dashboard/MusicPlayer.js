import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import axios from "axios";
import {
  getCurrentSong,
  getTrackInfo,
  getSeveralTracks,
  createPlaylist,
  addToPlaylist,
  removeTrack,
  getlikedSongs,
  saveLikedSong,
  getCurrentUser
} from "../../Redux/Spotify/spotify.actions";
import { postDSSong } from "../../Redux/DS/ds.actions";
import PlaylistItems from "./PlaylistItems";

// Features
import LinearDeterminate from "../LinearDeterminate";
import AlbumInfo from "./AlbumInfo.component";
import PlayerButtons from "./PlayerButtons.component";
import AudioDetailsContainer from "./AudioDetailsContainer";

// Styles
import "../../App.css";
import ElementContainer from "./element-styles/ElementContainer";
import SideBar from "./element-styles/SideBar";
import MainBar from "./element-styles/MainBarContainer";
import PlaylistInfoContainer from "./element-styles/PlaylistInfo";
import PlaylistSongsContainer from "./element-styles/PlaylistSongs";
import NavBar from "./element-styles/NavBarMusicPlayer";
import Footer from '../Footer';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      deviceId: "",
      loggedIn: false,
      error: "",
      trackName: "Track Name",
      artistName: "Artist Name",
      albumName: "Album Name",
      imageSpotify: "",
      imageUrl: "",
      playing: false,
      position: 0,
      duration: 1,
      id: "",
      songFeatures: [],
      currentTrack: "",
      trueSimilarity: { similarity: 0.00001, values: "mock" }
    };
    this.playerCheckInterval = null;
  }

  componentDidMount(prevProps) {
    this.handleLogin();
  }

  componentDidUpdate(prevProps) {
    console.log("this is ds props songs", this.props.ds_songs);
    // if (this.props.song_id !== prevProps.song_id) {
    //   this.dsDelivery();
    // }
    // if (this.props.savingLike) {
    //   this.props.getlikedSongs();
    // }
    // if (
    //   this.props.isFetchingSuccessful === true &&
    //   this.props.ds_songs !== prevProps.ds_songs
    // ) {
    //   this.props.addToPlaylist(
    //     {
    //       uris: this.createSpotifyUriArray(this.props.ds_songs[0].songs)
    //     },
    //     this.props.currentUser.spotify_playlist_id
    //   );
    // }
  }

  // dsDelivery() {
  //   const token = { token: localStorage.getItem("token") };
  //   this.props.postDSSong(token);
  // }

  handleLogin() {
    if (this.state.token !== "") {
      this.setState({ loggedIn: true });
      this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
    }
  }

  onStateChanged(state) {
    if (state !== null) {
      const {
        current_track: currentTrack,
        position,
        duration
      } = state.track_window;
      const trackName = currentTrack.name;
      const albumName = currentTrack.album.name;
      const artistName = currentTrack.artists
        .map(artist => artist.name)
        .join(", ");
      const imageSpotify = currentTrack.album.images[2].url;
      const playing = !state.paused;
      this.setState({
        position,
        duration,
        trackName,
        albumName,
        artistName,
        playing,
        imageSpotify
      });
    } else {
      this.setState({
        error: "Looks like you might have swapped to another device?"
      });
    }
  }

  createEventHandlers() {
    this.player.on("initialization_error", e => {});
    this.player.on("authentication_error", e => {
      this.setState({ loggedIn: false });
    });
    this.player.on("account_error", e => {});
    this.player.on("playback_error", e => {});

    // ONLY WHEN PLAYER STATE CHANGED
    this.player.on("player_state_changed", state => {
      this.onStateChanged(state);

      if (this.props.ds_songs && this.props.isFetchingSuccessful === true) {
        this.props.song && this.getCurrentSongFeatures(this.props.song.id);
      }
      // ONLY WHEN NEW SONG
      if (state.track_window.current_track.id !== this.state.currentTrack) {
        this.currentSong();
        this.setState({ currentTrack: state.track_window.current_track.id });
        console.log("Testing musicplayer", state.track_window.current_track.id)
        this.player.setVolume(0);
        setTimeout(() => {
          this.player.pause();
          this.player.seek(1);
          this.player.setVolume(0.5);
        }, 2000);
        if (this.props.ds_songs) {
          this.getDataScienceSongArray();
        }
      }
    });

    this.player.on("ready", async data => {
      let { device_id } = data;

      await this.setState({
        deviceId: device_id,
        loggedIn: true
      });
      this.transferPlaybackHere();
      this.props.ds_songs && this.currentSong();
    });
  }

  getDataScienceSongArray = () => {
    this.props.ds_songs.length > 0 &&
      this.props.getSeveralTracks(
        this.concatenateSongIds(this.props.ds_songs[0].songs)
      );
  };

  concatenateSongIds(array) {
    return array.map(song => song.values).join(",");
  }
  getCurrentSongFeatures = id => this.props.getTrackInfo(id);

  createSpotifyUriArray(array) {
    return array.map(song => "spotify:track:" + song.values);
  }

  checkForPlayer() {
    const { token } = this.state;

    if (window.Spotify !== undefined) {
      clearInterval(this.playerCheckInterval);

      this.player = new window.Spotify.Player({
        name: "Sound Drip Spotify Player",
        getOAuthToken: cb => {
          cb(token);
        }
      });

      this.createEventHandlers();

      this.player.connect();
    }
  }

  currentSong() {
    this.props.getCurrentSong();
    if (this.props.song === undefined) {
      this.props.getCurrentSong();
    }
  }

  transferPlaybackHere() {
    const { token } = this.state;
    fetch(
      `https://api.spotify.com/v1/me/player/play/?device_id=${this.state.deviceId}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          context_uri: `spotify:playlist:${this.props.currentUser.spotify_playlist_id}`
        })
      }
    );
    this.player.setVolume(0);
    setTimeout(() => this.player.pause(), 2000);
    this.player.setVolume(0.5);
  }

  render() {
    const {
      trackName,
      artistName,
      albumName,
      error,
      playing,
      imageSpotify
    } = this.state;

    return (
      <div>
        <NavBar
          musicPlayerProps={this.props}
          userName={this.props.spotifyId.display_name}
          deviceId={this.state.deviceId}
        />
        {console.log("all music player props", this.props)}
        <ElementContainer>
          <SideBar id="sideBarLD">
            <div id="sideBarLD1" className='music-player joyride-player-2'>
              <AlbumInfo
                imageSpotify={imageSpotify}
                trackName={trackName}
                artistName={artistName}
                albumName={albumName}
              />
              <div>
                <Grid
                  container
                  direction='column'
                  justify='space-around'
                  alignItems='center'
                  style={{ width: 377, height: "60px", marginBottom: "10px" }}
                >
                  <div>
                    <LinearDeterminate player={this.player} />
                  </div>
                  <PlayerButtons
                    player={this.player}
                    playing={playing}
                    trueSimilarity={this.state.trueSimilarity}
                  />
                </Grid>
                <Grid
                  container
                  direction='column'
                  justify='center'
                  alignItems='center'
                >
                  <AudioDetailsContainer traits={this.props.traits} />
                  <Grid item>
                    {window.Spotify !== undefined &&
                      this.state.imageUrl !== "" &&
                      artistName !== "Artist Name" && (
                        <div className='album-art'>
                          <h4 style={{ textAlign: "center" }}>Now Playing</h4>
                          <img className='album-artwork' src={this.state.imageUrl} alt='album-art' />
                        </div>
                      )}
                  </Grid>
                  {error && <p>Error: {error}</p>}
                  <Grid
                    container
                    direction='row'
                    justify='center'
                    alignItems='center'
                    style={{ width: 300, marginBottom: "5%" }}
                  ></Grid>
                </Grid>
              </div>
            </div>
          </SideBar>
          <MainBar id="mainBarLD" className="mainBar">
            <PlaylistInfoContainer spotifyId={this.props.spotifyId.id} spotifyName={this.props.spotifyId.display_name}>
            </PlaylistInfoContainer>
            <PlaylistSongsContainer>
              <PlaylistItems player={this.player} deviceId={this.state.deviceId}>
              </PlaylistItems>
            </PlaylistSongsContainer>
          </MainBar>
        </ElementContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  song: state.currentSongReducer.item,
  imageUrl: state.currentSongReducer.imageUrl,
  traits: state.getTrackInfoReducer,
  ds_songs: state.queueReducer.ds_songs,
  several_tracks: state.queueReducer.several_tracks,
  playlistId: state.createPlaylistReducer.playlistId,
  song_id: state.likedSongsReducer.song_id,
  savingLike: state.likedSongsReducer.savingLike,
  currentUser: state.getCurrentUserReducer.currentUser,
  isFetchingSuccessful: state.queueReducer.isFetchingSuccessful,
  isFetchingDSSongs: state.queueReducer.isFetchingDSSongs
});

export default connect(mapStateToProps, {
  getTrackInfo,
  getCurrentSong,
  postDSSong,
  getSeveralTracks,
  createPlaylist,
  addToPlaylist,
  removeTrack,
  getlikedSongs,
  saveLikedSong,
  getCurrentUser
})(MusicPlayer);
