import React from "react";
import { connect } from "react-redux";
import { saveLikedSong, removeTrack } from "../../Redux/Spotify/spotify.actions";
import Whiteheart from "../../assets/whiteheart1.png";
import Pinkheart from "../../assets/pinkheart1.png";
import Close from "../../assets/close.png";
import LikeDislikeContainer from '../dashboard/element-styles/LikeDislikeContainer';

const LikeAndDislikeButton = props => {
  const { trueSimilarity, player } = props;

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
    <div className="like-dislike-wrapper yes-no-active" >
      <div className='joyride-dislike-4'>
        <button
          className='like-dislike dislike joyride-dislike-4'
          style={{ background: "none", border: "none", outline: "none" }}
          onClick={toggleDislikeButton} >
          <img src={Close} alt='Dislike Button' style={{ maxHeight: 70 }} />
        </button>
        <h5 style={{ textAlign: "center", marginTop: "10px" }}></h5>
      </div>
      <div style={{ padding: "0px 15px 0px 15px" }} className='joyride-prediction-5' >
        <h5 style={{ textAlign: "center" }}> </h5>
        <h3 style={{ textAlign: "center" }}>
          {console.log("SIMISIM", trueSimilarity)}
          {trueSimilarity.similarity < 0.00002 ? "" : (trueSimilarity.similarity * 100).toFixed(4).toString() + " %"}
        </h3>
      </div>
      <div className='joyride-like-6'>
        <button className='like-dislike like' style={{ background: "none", border: "none", outline: "none", marginLeft: "70px" }} onClick={toggleLikeButton} >
          <img src={Whiteheart} alt='Like Button' style={{ maxHeight: 70 }} />
        </button>
        <h5 style={{ textAlign: "center", marginTop: "10px" }}></h5>
      </div>
      </div>
      </LikeDislikeContainer>
  );
};

const mapStateToProps = state => ({
  song: state.currentSongReducer.item,
  currentUser: state.getCurrentUserReducer.currentUser
});

export default connect(mapStateToProps, { saveLikedSong, removeTrack })(
  LikeAndDislikeButton
);