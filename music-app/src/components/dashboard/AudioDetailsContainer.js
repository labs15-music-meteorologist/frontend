import React, { useState } from "react";
import AudioDetails from "./AudioDetails"
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Chart from "../Chart";
import AudioDetailsStyles from './element-styles/AudioDetailsStyles';

const AudioDetailsContainer = props => {

const [collapse, setCollapse] = useState(false)
  const { traits } = props;

  const openAudioDetails = () => {
    setCollapse(!collapse)
  }

  return (
    <AudioDetailsStyles>
    <Grid item>

    <Chart
      features={traits}
      style={{ width: "100%", objectFit: "scale-down" }}
        />
            <div style={{ textAlign: "center", marginTop: "10px" }}>
      <button
        onClick={() => openAudioDetails()}
        className='grid-question grid-chart joyride-3'
        title='Click for Audio Features details'
        style={{ margin: 0, borderRadius: "6px", backgroundColor: "#E20351", color: "white", border: "none", fontSize: "12px", height: "20px" }}
      >
        Audio Specifics
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
          width: 377,
          overflow: "auto",
          backgroundColor: "#E20351",
          color: "lightgray"
        }}
      >
        <AudioDetails />
      </Paper>
    </List>
      </Grid>
      </AudioDetailsStyles>
  );
};

export default AudioDetailsContainer
