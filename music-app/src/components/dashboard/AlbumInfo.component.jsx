import React from "react";
import { connect } from "react-redux";
import { saveLikedSong, removeTrack } from "../../Redux/Spotify/spotify.actions";

const AlbumInfo = props => {
  const {  } = props;

  
  return (
    <div className='music-component'>
    <Grid
      item
      className='music-component-album-info'
      style={{ maxWidth: "300px" }}
    >
      {/* {this.props.imageUrl[1] && ( */}
      <img
        ref='image'
        src={imageSpotify}
        alt='Album artwork cover.'
        style={{ maxWidth: "300px", objectFit: "scale-down" }}
      />
      {/* )} */}
      <p className='p' style={{ fontWeight: "bold" }}>
        {trackName}
      </p>
      <p>{artistName}</p>
      <p>{albumName}</p>
    </Grid>
  </div>
  );
};

const mapStateToProps = state => ({
  song: state.currentSongReducer.item,
  currentUser: state.getCurrentUserReducer.currentUser
});

export default connect(mapStateToProps, { saveLikedSong, removeTrack })(
  LikeAndDislikeButton
);