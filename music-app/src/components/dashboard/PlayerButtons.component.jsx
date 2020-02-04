import React from "react";
import SkipLeft from "../../assets/skip-left.png";
import SkipRight from "../../assets/skip-right.png";
import Pause from "../../assets/player-stop.png";
import Play from "../../assets/player-start.png";

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
  
  return (
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
            <img
                // ref={input => (this.inputElement = input)}
                src={Pause}
                alt='White icon to pause a song.'
                style={{ maxHeight: 35 }}
            />
            ) : (
            <img
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
  );
};

export default PlayerButtons