import React, { Component } from 'react';
import ChaoHeader from './ChaoHeader/ChaoHeader';
import styled from 'styled-components';
import Footer from './Footer/Footer';




const AppWrapper = styled.div`
  text-align: center;
  background-color: #fff;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <ChaoHeader></ChaoHeader>
        <Footer></Footer>
      </AppWrapper>
    );
  }
}

export default App;
