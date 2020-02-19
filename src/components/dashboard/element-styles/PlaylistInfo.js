import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createPlaylist, getSeveralTracks, addToPlaylist } from '../../../Redux/Spotify/spotify.actions';
import axios from 'axios';

const Container = styled.div`
    height: 175px;
    width: 100%;
    background: #1E2024;
    font-family: Work Sans;
    display: flex;

    @media (max-width: 600px){
        width: 100vw;
        display: flex;
        flex-direction: column;
    }
`;

const DivLeft = styled.div`
    width: 80%;
    height: 80%;
    margin-top: 15px;
    display: flex;
    min-width: 685px;

    @media (max-width: 600px){
        max-width: 100vw;
        width: 50%;
    }
`

const PlayLogo = styled.a`
    width: 125px;
    height: 125px;
    margin-left: 50px;
    margin-top: 10px;
`
const PlayInfo = styled.div`

`

const DivRight = styled.div`
    width: 20%;
    height: 80%;
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 600px){
        justify-content: center;
        width: 100vw;
        margin-top: 0px;
        
    }
`

const MakePlaylist = styled.button`
    min-width: 135px;
    color: white;
    background-color: #E20351;
    font-family: Work Sans;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-right: 45px;
    margin-bottom: 10px;
    transition: 0.4s ease;
    &:hover {
        color: rgba(255, 255, 255, 1);
        box-shadow: 0 3px 25px rgba(226, 3, 81, .7);
        transition: 0.4s ease;
    }
    &:active {
        transform: scale(.5);
        transition: 0.4s ease;
    }

    @media (max-width: 600px){
        margin-right: 0px;
        margin-bottom: 20px;
    }
`

const PlayH1 = styled.h1`
    font-size: 12;
    font-family: Work Sans;
    font-weight: bold;
`
const PlayH2 = styled.h1`
    font-size: 12;
    font-family: Work Sans;
    text-align: left;
    
`

class PlaylistInfo extends React.Component { 

    render() { 
        const addPlaylist = () => { 
            let trackUris = this.props.several_tracks.tracks ? this.props.several_tracks.tracks.map(track => track.uri) : 0
            if (trackUris === 0) { window.alert("Playlist hasn't populated yet.")}
            var config = {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                  "Content-Type": "application/json"
                }
            };
            var playlistName = {
                name: "Sound Drip Playlist",
                description: "A playlist of songs curated by Sound Drip"
            };
            if (this.props.several_tracks.tracks) {
                axios.post(
                    `https://api.spotify.com/v1/users/${this.props.spotifyId}/playlists`,
                    playlistName,
                    config,
                )
                    .then(res => {
                        axios.post(
                            `https://api.spotify.com/v1/playlists/${res.data.id}/tracks`,
                            { uris: trackUris },
                            config,
                        )
                    })
            }

            console.log("playlistinfo props", trackUris)

         }

        console.log("playlistinfo props", this.props)
        return (
            <Container>
                <DivLeft>
                    <PlayLogo className="playLogo" />
                    <PlayInfo>
                        <PlayH1 className="playH1" style={{ fontSize: 24, paddingTop: 30, paddingBottom: 0, marginLeft: 15 }}>{this.props.spotifyName + "'s Sound Drip Playlist"}</PlayH1>
                        <div className="playH2" style={{ display: "flex" }}>
                            <a className="playlisticon"/>
                            <PlayH2 style={{ fontSize: 18, paddingTop: 5, marginLeft: 8, paddingBottom: 0, marginTop: 0 }}>20 Songs</PlayH2>
                        </div>
                    </PlayInfo>
                </DivLeft>
                <DivRight>
                    <MakePlaylist onClick={addPlaylist}>Add This Playlist!</MakePlaylist>
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