import React from 'react';
import styled from 'styled-components';
import '../App.css';
import Loader from '../assets/loader.gif';

const LoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  margin-top: 50vh;
`;

const LoaderContainer = () => {

  return (
    <div>
      <LoadContainer>
        {/* chill, its coming */}
        <img src={Loader} />
      </LoadContainer>
    </div>
  );

}

export default LoaderContainer