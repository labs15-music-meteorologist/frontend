import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createPlaylist, getSeveralTracks, addToPlaylist } from '../../../Redux/Spotify/spotify.actions';

const Container = styled.div`
    height: 175px;
    width: 100%;
    background: #1E2024;
    font-family: Work Sans;
    display: flex;
`;

const DivLeft = styled.div`
    width: 50%;
    height: 80%;
    margin-top: 15px;
`

const DivRight = styled.div`
    width: 50%;
    height: 80%;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MakePlaylist = styled.button`
    color: white;
    background-color: #E20351;
    font-family: Work Sans;
    border: none;
    border-radius: 5px;
    padding: 10px
`

class PlaylistInfo extends React.Component { 

    render() { 
        // const trackUris = this.props.tracks.map(track => track.uri)
        console.log("playlistinfo props", this.props)
        return (
            <Container>
                <DivLeft>
                </DivLeft>
                <DivRight>
                    <MakePlaylist>Create a Playlist From These Songs</MakePlaylist>
                </DivRight>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    several_tracks: state.queueReducer.several_tracks,
    playlistId: state.createPlaylistReducer.playlistId,
  });

  export default connect(
    mapStateToProps,
    { getSeveralTracks, createPlaylist, addToPlaylist },
  )(PlaylistInfo);