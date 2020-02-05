import axios from "axios";

import { postDSSong } from "../../Redux/DS/ds.actions";

export const dsDelivery = async song_id => {
  var config = {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") }
  };

  let response = await axios.get(
    `https://api.spotify.com/v1/audio-features/${song_id}`,
    config
  );
  if (response.status === 200) {
    let {
      acousticness,
      danceability,
      energy,
      instrumentalness,
      key,
      liveness,
      loudness,
      mode,
      speechiness,
      tempo,
      time_signature,
      valence
    } = response.data;
    let obj = {
      audio_features: {
        acousticness,
        danceability,
        energy,
        instrumentalness,
        key,
        liveness,
        loudness,
        mode,
        speechiness,
        tempo,
        time_signature,
        valence
      }
    };
    postDSSong(obj);
  }
};
