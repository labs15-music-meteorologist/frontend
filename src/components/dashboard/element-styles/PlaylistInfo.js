import React from 'react';
import styled from 'styled-components';

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

export default PlaylistInfo;