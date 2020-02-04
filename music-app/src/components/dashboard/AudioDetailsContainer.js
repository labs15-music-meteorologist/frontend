import React, { useState } from "react";
import { connect } from "react-redux";
import AudioDetails from "./AudioDetails"
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Chart from "../Chart";

const AudioDetailsContainer = props => {

const [collapse, setCollapse] = useState(false)
  const { traits } = props;

  const openAudioDetails = () => {
    setCollapse(!collapse)
  }

  return (
    <Grid item>
    <div style={{ textAlign: "right" }}>
      <button
        onClick={() => openAudioDetails()}
        className='grid-question grid-chart joyride-3'
        title='Click for Audio Features details'
        style={{ margin: 0, borderRadius: "25px" }}
      >
        ?
      </button>
    </div>
    <List>
      <Paper
        className={
          collapse
            ? "audio-details-open"
            : "audio-details-closed"
        }
        style={{
          maxHeight: 510,
          width: 450,
          overflow: "auto",
          backgroundColor: "#1a567a",
          color: "lightgray"
        }}
      >
        <AudioDetails />
      </Paper>
    </List>
    <Chart
      features={traits}
      style={{ width: "100%", objectFit: "scale-down" }}
    />
  </Grid>
  );
};


export default AudioDetailsContainer
