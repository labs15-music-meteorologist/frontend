import React, { useRef } from "react";
import { Grid } from "@material-ui/core";

const AlbumInfo = props => {
  const { imageSpotify, trackName, artistName, albumName } = props;

  return (
    <div className='music-component'>
      <Grid
        item
        className='music-component-album-info'
        style={{ maxWidth: "300px" }}
      >
        <img
          src={imageSpotify}
          alt='Album artwork cover.'
          style={{ maxWidth: "300px", objectFit: "scale-down" }}
        />
        <p className='p' style={{ fontWeight: "bold" }}>
          {trackName}
        </p>
        <p>{artistName}</p>
        <p>{albumName}</p>
      </Grid>
    </div>
  );
};

export default AlbumInfo;
