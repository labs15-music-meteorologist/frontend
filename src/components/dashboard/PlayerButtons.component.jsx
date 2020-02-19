import React from "react";
import { connect } from "react-redux";
import { saveLikedSong, removeTrack } from "../../Redux/Spotify/spotify.actions";
import LikeDislikeContainer from '../dashboard/element-styles/LikeDislikeContainer';

const PlayerButtons = props => {

  const { player, playing } = props;

 const onPrevClick = () => {
    player.previousTrack();
    player.setVolume(0);
    setTimeout(() => {
      player.pause();
      player.setVolume(0.5);
    }, 1000);
    var element = document.getElementById("like1");
    element.classList.remove("fullHeart");
  }

  const onPlayClick = () => {
    player.togglePlay();
  }

  const onNextClick = () => {
    player.nextTrack();
    player.setVolume(0);
    player.playing && player.pause();
    setTimeout(() => {
      player.pause();
      player.setVolume(0.5);
    }, 2000);
    var element = document.getElementById("like1");
    element.classList.remove("fullHeart");
  }

  let toggleLikeButton = () => {
    props.saveLikedSong(props.song.id);
    
    setTimeout(() => {
      player.pause();
      player.setVolume(0.5);
    }, 2000);
    props.removeTrack(props.currentUser.spotify_playlist_id, props.song.id);
    var element = document.getElementById("like1");
    element.classList.add("fullHeart");
  };

  const toggleDislikeButton = () => {
    player.nextTrack();
    player.setVolume(0);
    setTimeout(() => {
      player.pause();
      player.setVolume(0.5);
    }, 2000);
    props.removeTrack(props.currentUser.spotify_playlist_id, props.song.id);
    var element = document.getElementById("like1");
    element.classList.remove("fullHeart");
  };
  
  return (
    <LikeDislikeContainer>
    <div className="display-flex">
        <button id="x"
          className='like-dislike dislike joyride-dislike-4'
          style={{ background: "none", border: "none", outline: "none" }}
          onClick={toggleDislikeButton} >
          <a className="dislikeicon" style={{ maxHeight: 70 }} />
        </button>
      <div style={{ display: "flex" }}>
        <button id="prev"
            style={{
            background: "none",
            border: "none",
            outline: "none"
            }}
            onClick={() => onPrevClick()}
        >
          <a className="previcon" style={{ maxHeight: 35 }} />
        </button>

        <button id="playpause"
            style={{
            background: "none",
            border: "none",
            outline: "none"
            }}
            onClick={() => onPlayClick()}
        >
            {playing ? (
            <a className="pauseicon" style={{ maxHeight: 35 }} />
            ) : (
            <a className="playicon" style={{ maxHeight: 35 }} />
            )}
        </button>

        <button id="next"
            style={{
            background: "none",
            border: "none",
            outline: "none"
            }}
            onClick={() => onNextClick()}
        >
          <a className="nexticon" style={{ maxHeight: 35 }} />
        </button>
        </div>
        <button id="heart" className='like-dislike like' style={{ background: "none", border: "none", outline: "none" }} onClick={toggleLikeButton} >
          <a className="likeicon" id="like1" style={{ maxHeight: 70 }} />
        </button>
      </div>
      </LikeDislikeContainer>
  );
};

const mapStateToProps = state => ({
  song: state.currentSongReducer.item,
  currentUser: state.getCurrentUserReducer.currentUser
});

export default connect(mapStateToProps, { saveLikedSong, removeTrack })(
  PlayerButtons
);