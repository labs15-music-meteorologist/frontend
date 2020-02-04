import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
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

import { dsDelivery } from "./MusicPlayer.functions";

// Styles
import "../../App.css";

// Features
import LinearDeterminate from "../LinearDeterminate";
import Characteristics from "../Characteristics.js";
import LikeAndDislikeButton from "./LikeAndDislikeButton.component";
import AlbumInfo from "./AlbumInfo.component";
import PlayerButtons from "./PlayerButtons.component";
import AudioDetailsContainer from "./AudioDetailsContainer";

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
      predictionPrompt: true,
      trueSimilarity: { similarity: 0.00001, values: "mock" }
    };
    // this will later be set by setInterval
    this.playerCheckInterval = null;
  }

  componentDidMount() {
    this.handleLogin();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.ds_songs && this.props.song) {
      console.log("SONGSWEARE", this.props.ds_songs, this.props.song);
      setTimeout(() => {
        this.predictionScoreCalculation(this.props.song);
      }, 2000);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.song_id !== prevProps.song_id) {
      dsDelivery(this.props.song_id);
    }
    if (this.props.savingLike) {
      console.log("GET LIKED SONG IN CDU");
      this.props.getlikedSongs();
    }

    // if (
    //   (this.props.song.id === null ||
    //   this.props.song.id !== prevProps.song.id)
    //   )

    // JBF
    // This now compares ds_songs to prevProps and only adds the songs to the playlist if they have been updated from ds_songs.
    // Without this it will happen happens on every component update, play song, access app playlist, etc.

    // The songs will be re-added to the playlist upon relog as they are no longer in state.
    // Adding the ability to query existing songs inside of the saved playlist and implementing similar logic should prevent this.
    if (
      this.props.isFetchingSuccessful === true &&
      this.props.ds_songs !== prevProps.ds_songs
    ) {
      this.props.addToPlaylist(
        {
          uris: this.createSpotifyUriArray(this.props.ds_songs)
        },
        this.props.currentUser.spotify_playlist_id
      );
    }
  }

  handleLogin() {
    if (this.state.token !== "") {
      this.setState({ loggedIn: true });
      this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
    }
  }

  // when we receive a new update from the player
  onStateChanged(state) {
    // only update if we got a real state
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
      // .map(image => image.url)

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
      // state was null, user might have swapped to another device
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
        /*   if (this.props.song.id) {
          this.getCurrentSongFeatures(this.props.song.id);
        } */

        this.setState({ currentTrack: state.track_window.current_track.id });
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
      console.log("Fired Off Transfer Playback ready");
      this.transferPlaybackHere();
      this.props.ds_songs && this.currentSong();
    });
  }

  getDataScienceSongArray = () => {
    this.props.ds_songs &&
      this.props.getSeveralTracks(this.concatenateSongIds(this.props.ds_songs));
  };

  concatenateSongIds(array) {
    return array.map(song => song.values).join(",");
  }

  createSpotifyUriArray(array) {
    return array.map(song => "spotify:track:" + song.values);
  }

  predictionScoreCalculation(songs) {
    let similarityPrediction = JSON.parse(
      localStorage.getItem("ds_songs")
    ).filter(song => song.values === songs.id);
    console.log(
      "UNCLEAR",
      JSON.parse(localStorage.getItem("ds_songs")),
      songs,
      similarityPrediction
    );
    if (similarityPrediction[0] !== undefined) {
      this.setState({ trueSimilarity: similarityPrediction[0] });
      console.log("trueSimilarity", similarityPrediction[0]);
    }
  }

  checkForPlayer() {
    const { token } = this.state;

    if (window.Spotify !== undefined) {
      clearInterval(this.playerCheckInterval);

      this.player = new window.Spotify.Player({
        name: "Music Meteorologist Spotify Player",
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

  getCurrentSongFeatures = id => this.props.getTrackInfo(id);

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
          // This is where we will control what music is fed to the user
          // If we want to direct them to a specific playlist,artist or album we will pass in "context_uri" with its respective uri
          context_uri: `spotify:playlist:${this.props.currentUser.spotify_playlist_id}`

          // In order manipulate the user's queue and feed them a more fluid and unique array of songs we would instead
          // pass an array of song uris through the "uris" key
          // The example below if uncommented will direct the user to 3 songs (make sure to comment out the context_uri)
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
      <div className='music-player joyride-player-2'>
        <AlbumInfo
          imageSpotify={imageSpotify}
          trackName={trackName}
          artistName={artistName}
          albumName={albumName}
        />

        <div className='music-component music-chart'>
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
                    <img src={this.state.imageUrl} alt='album-art' />
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
            >
              <LikeAndDislikeButton
                player={this.player}
                trueSimilarity={this.state.trueSimilarity}
              />
            </Grid>

            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
              style={{ width: 300, marginBottom: "5%" }}
            >
              <div>
                <LinearDeterminate player={this.player} />
              </div>
              <PlayerButtons player={this.player} playing={playing} />
            </Grid>
          </Grid>
        </div>

        <div className='music-component'>
          <Characteristics features={this.props.traits} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  song: state.currentSongReducer.item,
  imageUrl: state.currentSongReducer.imageUrl,
  traits: state.getTrackInfoReducer,
  ds_songs: state.queueReducer.ds_songs.songs,
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