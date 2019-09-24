import axios from 'axios';

export const GET_USERS_FETCHING = 'GET_USERS_FETCHING';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

const url = process.env.REACT_APP_BACKEND_BASE_URL;

export const getUsers = () => dispatch => {
  dispatch({
    type: GET_USERS_FETCHING,
  });
  axios
    .get(`${url}v1/users`)
    .then(res => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: err,
      });
    });
};

export const GET_LOGGED_IN_FETCHING = 'GET_LOGGED_IN_FETCHING';
export const GET_LOGGED_IN_SUCCESS = 'GET_LOGGED_IN_SUCCESS';
export const GET_LOGGED_IN_FAILURE = 'GET_LOGGED_IN_FAILURE';

export const getCurrentUser = spotifyId => dispatch => {
  dispatch({
    type: GET_LOGGED_IN_FETCHING,
  });
  axios
    .get(`${url}v1/users/spotify/${spotifyId}`)
    .then(res => {
      dispatch({
        type: GET_LOGGED_IN_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_LOGGED_IN_FAILURE,
        payload: err,
      });
    });
};

export const GET_LIKEDSONGS_FETCHING = 'GET_LIKEDSONGS_FETCHING';
export const GET_LIKEDSONGS_SUCCESS = 'GET_LIKEDSONGS_SUCCESS';
export const GET_LIKEDSONGS_FAILURE = 'GET_LIKEDSONGS_FAILURE';

export const getlikedSongs = () => dispatch => {
  dispatch({
    type: GET_LIKEDSONGS_FETCHING,
  });

  var config = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  };

  axios
    .get('https://api.spotify.com/v1/me/tracks?limit=1', config)
    .then(res => {
      dispatch({
        type: GET_LIKEDSONGS_SUCCESS,
        payload: res.data.items[0].track.id,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_LIKEDSONGS_FAILURE,
        payload: err,
      });
    });
};

export const GET_TRACK_INFO_FETCHING = 'GET_TRACK_INFO_FETCHING';
export const GET_TRACK_INFO_SUCCESS = 'GET_TRACK_INFO_SUCCESS';
export const GET_TRACK_INFO_FAILURE = 'GET_TRACK_INFO_FAILURE';

export const getTrackInfo = id => dispatch => {
  dispatch({
    type: GET_TRACK_INFO_FETCHING,
  });

  var config = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  };

  axios
    .get(`https://api.spotify.com/v1/audio-features/${id}`, config)
    .then(res => {
      dispatch({
        type: GET_TRACK_INFO_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_TRACK_INFO_FAILURE,
        payload: err.data,
      });
    });
};

export const GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FETCHING =
  'GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FETCHING';
export const GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_SUCCESS =
  'GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_SUCCESS';
export const GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FAILURE =
  'GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FAILURE';

export const getSpotifyAccountDetails = () => dispatch => {
  dispatch({
    type: GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FETCHING,
  });

  var config = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  };

  axios
    .get(`https://api.spotify.com/v1/me`, config)
    .then(res => {
      if (!('product' in res.data)) {
        res.data.product = 'unprovided';
      }
      dispatch({
        type: GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FAILURE,
        payload: err,
      });
    });
};

export const GET_CURRENT_SONG_FETCHING = 'GET_CURRENT_SONG_FETCHING';
export const GET_CURRENT_SONG_SUCCESS = 'GET_CURRENT_SONG_SUCCESS';
export const GET_CURRENT_SONG_FAILURE = 'GET_CURRENT_SONG_FAILURE';

export const getCurrentSong = () => dispatch => {
  dispatch({
    type: GET_CURRENT_SONG_FETCHING,
  });
  var config = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  };
  axios
    .get('https://api.spotify.com/v1/me/player/currently-playing', config)
    .then(res => {
      dispatch({
        type: GET_CURRENT_SONG_SUCCESS,
        payload: res.data.item,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CURRENT_SONG_FAILURE,
        payload: err.data,
      });
    });
};

export const PERSIST_USER_FETCHING = 'GET_CURRENT_SONG_FETCHING';
export const PERSIST_USER_SUCCESS = 'GET_CURRENT_SONG_SUCCESS';
export const PERSIST_USER_FAILURE = 'GET_CURRENT_SONG_FAILURE';

export const persistUser = (spotifyUser, playlistId) => dispatch => {
  dispatch({
    type: PERSIST_USER_FETCHING,
  });
  console.log(
    'after inital dispatch persist user fetching',
    spotifyUser,
    playlistId,
  );
  axios
    .get(`${url}v1/users/spotify/${spotifyUser.id}`)
    .then(res => {
      if (res.status === 200) {
        const user = {
          id: res.data.id,
          email: res.data.email,
          spotify_user_id: res.data.spotify_user_id,
          user_spotify_api_key: Math.floor(
            Math.random() * 99999999999 + 1,
          ).toString(),
          date_of_birth: res.data.date_of_birth,
          spotify_product_type: res.data.spotify_product_type,
          display_name: res.data.display_name,
          country: res.data.country,
          profile_image_url: res.data.profile_image_url,
          spotify_playlist_id:
            playlistId === undefined
              ? res.data.spotify_playlist_id
              : playlistId,
        };
        axios
          .put(`${url}v1/users/${res.data.id}`, user)
          .then(res => {
            dispatch({ type: PERSIST_USER_SUCCESS });
          })
          .catch(err => {
            dispatch({
              type: PERSIST_USER_FAILURE,
            });
          });
      }
    })
    .catch(err => {
      console.log('inside err persist user', err);
      if (err.message === 'Request failed with status code 404') {
        console.log('spotify user inside persist', spotifyUser, playlistId);
        axios
          .post(`${url}v1/users/register`, {
            email: spotifyUser.email,
            spotify_user_id: spotifyUser.id,
            user_spotify_api_key: Math.floor(
              Math.random() * 99999999999 + 1,
            ).toString(),
            date_of_birth: '2019-07-29',
            spotify_product_type: spotifyUser.product,
            display_name: spotifyUser.display_name,
            country: spotifyUser.country,
            profile_image_url: '',
            spotify_playlist_id: playlistId,
          })
          .then(res => {
            /* dispatch({ type: PERSIST_USER_SUCCESS, payload: res.data }); */
          })
          .catch(err => {
            /* dispatch({ type: PERSIST_USER_SUCCESS, payload: err }); */
          });
      }
      /* dispatch({ type: PERSIST_USER_SUCCESS, payload: err }); */
    });
};

export const POST_DS_SONGS_FETCHING = 'POST_DS_SONGS_FETCHING';
export const POST_DS_SONGS_SUCCESS = 'POST_DS_SONGS_SUCCESS';
export const POST_DS_SONGS_FAILURE = 'POST_DS_SONGS_FAILURE';

export const postDSSong = obj => dispatch => {
  dispatch({
    type: POST_DS_SONGS_FETCHING,
  });
  console.log('OBJ passed into postDSSong', JSON.stringify(obj));
  axios
    .post(`${url}v1/recommender`, obj)
    .then(res => {
      console.log('success postDSSong');
      if (
        res.data.songs !== undefined &&
        res.data.songs !== null &&
        res.data.songs.length > 0
      ) {
        if (localStorage.getItem('ds_songs') !== null) {
          const previous_ds_songs = localStorage.getItem('ds_songs');

          localStorage.setItem(
            'ds_songs',
            JSON.stringify(
              JSON.parse(previous_ds_songs).concat(res.data.songs),
            ),
          );

          /*    localStorage.setItem(
            'ds_songs',
            JSON.stringify([
              ...new Set(
                JSON.parse(previous_ds_songs)
                  .concat(res.data.songs)
                  .map(song => ({
                    similarity: song.similarity,
                    values: song.values,
                  })),
              ),
            ]),
          ); */
        } else {
          localStorage.setItem('ds_songs', JSON.stringify(res.data.songs));
        }
      }
      dispatch({
        type: POST_DS_SONGS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: POST_DS_SONGS_FAILURE,
        payload: err.data,
      });
    });
};

export const GET_SEVERAL_TRACKS_FETCHING = 'GET_SEVERAL_TRACKS_FETCHING';
export const GET_SEVERAL_TRACKS_SUCCESS = 'GET_SEVERAL_TRACKS_SUCCESS';
export const GET_SEVERAL_TRACKS_FAILURE = 'GET_SEVERAL_TRACKS_FAILURE';

export const getSeveralTracks = ids => dispatch => {
  dispatch({
    type: GET_SEVERAL_TRACKS_FETCHING,
  });
  var config = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  };
  axios
    .get(`https://api.spotify.com/v1/tracks/?ids=${ids}`, config)
    .then(res => {
      dispatch({
        type: GET_SEVERAL_TRACKS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_SEVERAL_TRACKS_FAILURE,
        payload: err.data,
      });
    });
};

export const CREATE_PLAYLIST_FETCHING = 'CREATE_PLAYLIST_FETCHING';
export const CREATE_PLAYLIST_SUCCESS = 'CREATE_PLAYLIST_SUCCESS';
export const CREATE_PLAYLIST_FAILURE = 'CREATE_PLAYLIST_FAILURE';

export const createPlaylist = spotifyId => dispatch => {
  dispatch({
    type: CREATE_PLAYLIST_FETCHING,
  });
  var config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  };
  var playlistName = {
    name: 'Music Meteorologist (DYNAMIC)',
    description: 'A playlist of songs curated by Music Meteorologist',
  };
  axios
    .post(
      `https://api.spotify.com/v1/users/${spotifyId}/playlists`,
      playlistName,
      config,
    )
    //   console.log('CREATE PLAYLIST ACTION RES PAYLOAD', res.data);
    //   axios.put(`${url}v1/users/spotify/${res.data.owner.id}`, {
    //     spotify_playlist_id: res.data.id,
    //   });

    .then(res => {
      dispatch({
        type: CREATE_PLAYLIST_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: CREATE_PLAYLIST_FAILURE,
        payload: err,
      });
    });
};
export const GET_PLAYLIST_FETCHING = 'GET_PLAYLIST_FETCHING';
export const GET_PLAYLIST_SUCCESS = 'GET_PLAYLIST_SUCCESS';
export const GET_PLAYLIST_FAILURE = 'GET_PLAYLIST_FAILURE';

export const getPlaylist = playlistId => dispatch => {
  dispatch({
    type: GET_PLAYLIST_FETCHING,
  });

  var config = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  };

  axios
    .get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, config)
    .then(res => {
      dispatch({
        type: GET_PLAYLIST_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_PLAYLIST_FAILURE,
        payload: err,
      });
    });
};

export const ADD_TO_PLAYLIST_FETCHING = 'ADD_TO_PLAYLIST_FETCHING';
export const ADD_TO_PLAYLIST_SUCCESS = 'ADD_TO_PLAYLIST_SUCCESS';
export const ADD_TO_PLAYLIST_FAILURE = 'ADD_TO_PLAYLIST_FAILURE';

export const addToPlaylist = (songs, playlistId) => dispatch => {
  dispatch({
    type: ADD_TO_PLAYLIST_FETCHING,
  });

  var config = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    'Content-Type': 'application/json',
  };

  axios
    .post(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      songs,
      config,
    )
    .then(res => {
      dispatch({
        type: ADD_TO_PLAYLIST_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_TO_PLAYLIST_FAILURE,
        payload: err,
      });
    });
};

export const REMOVE_TRACK_FETCHING = 'REMOVE_TRACK_FETCHING';
export const REMOVE_TRACK_SUCCESS = 'REMOVE_TRACK_SUCCESS';
export const REMOVE_TRACK_FAILURE = 'REMOVE_TRACK_FAILURE';

export const removeTrack = (playlistId, currentlyPlayingSong) => dispatch => {
  dispatch({
    type: REMOVE_TRACK_FETCHING,
  });
  axios({
    method: 'delete',
    url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
    data: {
      tracks: [
        {
          uri: `spotify:track:${currentlyPlayingSong}`,
        },
      ],
    },
  })
    .then(res => {
      dispatch({
        type: REMOVE_TRACK_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: REMOVE_TRACK_FAILURE,
        payload: err,
      });
    });
};

export const PUT_LIKEDSONG_START = 'PUT_LIKEDSONG_START';
export const PUT_LIKEDSONG__SUCCESS = 'PUT_LIKEDSONG__SUCCESS';
export const PUT_LIKEDSONG__FAILURE = 'PUT_LIKEDSONG__FAILURE';

export const saveLikedSong = songId => dispatch => {
  dispatch({
    type: PUT_LIKEDSONG_START,
  });

  axios({
    method: 'put',
    url: `https://api.spotify.com/v1/me/tracks?ids=${songId}`,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      dispatch({
        type: PUT_LIKEDSONG__SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: PUT_LIKEDSONG__FAILURE,
        payload: err,
      });
    });
};
