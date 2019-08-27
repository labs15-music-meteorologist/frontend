import React from 'react';
import { getLikedSongsAndFeatures } from '../actions';
import { connect } from 'react-redux';

class Song extends React.Component {
  render() {
    console.log('Props', this.props);
    // console.log('Track ID', this.props.song.track.id);
    // console.log('Audio ID', this.props.audio_features[0].audio_features.id);
    console.log('AF', this.props.audio_features);

    var id = this.props.id;
    console.log('ID', id);

    const displayAF = this.props.audio_features.filter(
      oneAF => `${oneAF.id}` === id,
    );
    console.log('Display', displayAF);

    return (
      <>
        {/* {this.props.audio_features.map(oneAudioFeature => {
          console.log('1 AUDIO FEATURE', oneAudioFeature);
        })} */}
        <p>Hello</p>

        {displayAF.map(AF => (
          <div>
            <p>Tempo: {AF.tempo}</p>
          </div>
        ))}
      </>
    );

    //   if (this.props.song.track.id === oneAudioFeature.id) {
    //     return (
    //       <div>
    //         <li
    //           style={{
    //             display: 'flex',
    //             flexFlow: 'column nowrap',
    //             alignItems: 'flex-start',
    //             lineHeight: 1.5,
    //           }}>
    //           <img
    //             src={this.props.song.track.album.images[2].url}
    //             alt='album art'
    //             width='64px'
    //           />
    //           <p>Song: {this.props.song.track.name}</p>
    //           <p>Artist: {this.props.song.track.artists[0].name}</p>

    //           <p>Audio Features: {oneAudioFeature.tempo}</p>
    //         </li>
    //       </div>
    //     );
    //   } else {
    //     return <p> Hello </p>;
    //   }
    // });
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { getLikedSongsAndFeatures },
)(Song);

// export default Song;
