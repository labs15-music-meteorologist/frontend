import React from 'react';
import { store } from '../store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import LikedSongs from './LikedSongs';

import '@testing-library/jest-dom/extend-expect';
import { getlikedSongs } from '../actions';

test('Display LikedSongs component', async () => {
  await render(
    <Provider store={store}>
      <LikedSongs />
    </Provider>,
  );

  const songs = await store.dispatch(getlikedSongs());
  // console.log(songs);
});
