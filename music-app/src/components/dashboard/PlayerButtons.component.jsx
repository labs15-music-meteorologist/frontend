import React from "react";
import SkipLeft from "../../assets/skip-left.png";
import SkipRight from "../../assets/skip-right.png";
import Pause from "../../assets/player-stop.png";
import Play from "../../assets/player-start.png";
import { connect } from "react-redux";
import { saveLikedSong, removeTrack } from "../../Redux/Spotify/spotify.actions";
import Close from "../../assets/close.png";
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
  }

  const toggleLikeButton = () => {
    props.saveLikedSong(props.song.id);
    player.nextTrack();
    player.setVolume(0);
    setTimeout(() => {
      player.pause();
      player.setVolume(0.5);
    }, 2000);
    props.removeTrack(props.currentUser.spotify_playlist_id, props.song.id);
  };

  const toggleDislikeButton = () => {
    player.nextTrack();
    player.setVolume(0);
    setTimeout(() => {
      player.pause();
      player.setVolume(0.5);
    }, 2000);
    props.removeTrack(props.currentUser.spotify_playlist_id, props.song.id);
  };
  
  return (
    <LikeDislikeContainer>
    <div className="display-flex">
        <button
          className='like-dislike dislike joyride-dislike-4'
          style={{ background: "none", border: "none", outline: "none" }}
          onClick={toggleDislikeButton} >
          <img src={Close} alt='Dislike Button' style={{ maxHeight: 70 }} />
        </button>
      <div style={{ display: "flex" }}>
        <button
            style={{
            background: "none",
            border: "none",
            outline: "none"
            }}
            onClick={() => onPrevClick()}
        >
            <img
            src={SkipLeft}
            alt='White icon to skip to the previous song.'
            style={{ maxHeight: 22 }}
            />
        </button>

        <button
            style={{
            background: "none",
            border: "none",
            outline: "none"
            }}
            onClick={() => onPlayClick()}
        >
            {playing ? (
            <img className="pause-button"
                // ref={input => (this.inputElement = input)}
                src={Pause}
                alt='White icon to pause a song.'
                style={{ maxHeight: 35 }}
            />
            ) : (
            <img className="play-button"
                /* ref={this.simulateClick} */
                src={Play}
                alt='White icon to start a pause song.'
                style={{ maxHeight: 35 }}
            />
            )}
        </button>

        <button
            style={{
            background: "none",
            border: "none",
            outline: "none"
            }}
            onClick={() => onNextClick()}
        >
            <img
            src={SkipRight}
            alt='White icon to skip to the next song.'
            style={{ maxHeight: 22 }}
            />
        </button>
        </div>
        <button className='like-dislike like' style={{ background: "none", border: "none", outline: "none"}} onClick={toggleLikeButton} >
          <a className="likeicon" style={{ maxHeight: 70 }} />
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