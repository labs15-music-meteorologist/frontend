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
    <AudioDetailsStyles className="scroll">
      
      <div className="audioDiv">
      <a id="sideBarLD2" href="#" onClick={() => openAudioDetails()} style={{ color: 'white', marginTop: 8, marginRight: 75, fontSize: 12}}>What does this mean?</a>
      </div>
      <List className="scroll">
        <Paper
        className={
          collapse
            ? "audio-details-open scroll"
            : "audio-details-closed scroll"
        }
        style={{
          maxHeight: 250,
          width: 377,
          overflow: "auto",
          backgroundColor: "#1E2024",
          color: "lightgray"
        }}
      >
        <AudioDetails className="scroll" />
      </Paper>
    </List>
    <Grid item>

    <Chart
      features={traits}
      style={{ width: "100%", objectFit: "scale-down" }}
        />
            <div style={{ textAlign: "center", marginTop: "10px" }}>
    </div>
    
      </Grid>
      </AudioDetailsStyles>
  );
};

export default AudioDetailsContainer
