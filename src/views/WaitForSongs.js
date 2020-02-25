import React from 'react';
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import LoadingPage from "./LoadingPage.js"
import MusicPlayer from "../components/dashboard/MusicPlayer";
import {
    getlikedSongs,
    getUsers,
    getSpotifyAccountDetails,
    persistUser,
    getSeveralTracks,
    createPlaylist,
    getCurrentUser,
    removeTrack
  } from "../Redux/Spotify/spotify.actions";

const WaitForSong = (props) => {

    const dsSongs = props.ds_songs;

    return (
        <div>
            {dsSongs.length ===  0 ? <LoadingPage />  :  <Grid><MusicPlayer spotifyId={props.spotifyUser} /></Grid>}
        </div>
    );

}

const mapStateToProps = state => ({
    ds_songs: state.queueReducer.ds_songs,
  });
  
  export default connect(mapStateToProps, {
    getlikedSongs,
    getUsers,
    getSpotifyAccountDetails,
    persistUser,
    getSeveralTracks,
    createPlaylist,
    getCurrentUser,
    removeTrack
  })(WaitForSong);