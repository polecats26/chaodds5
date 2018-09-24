import React, { Component } from 'react';
import ChaoHeader from './ChaoHeader/ChaoHeader';
import styled from 'styled-components';
import Media from "react-media";


const AppWrapper = styled.div`
  text-align: center;
  background-color: #fff;
`



class App extends Component {
  render() {
    return (
      <AppWrapper>
        <ChaoHeader></ChaoHeader>
        
      </AppWrapper>
    );
  }
}

export default App;
