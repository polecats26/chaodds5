import React, { Component } from 'react';
import ChaoHeader from './ChaoHeader/ChaoHeader';
import styled from 'styled-components';
import Main from './Main/Main';
import Footer from './Footer/Footer';

this.state = {
  mode: "main",
  constants: {
    phone: "(310) 451-2726"
  }
  
}

const AppWrapper = styled.div`
  text-align: center;
  background-color: #fff;
`;

const ContentContainer = styled.div`

`;

const ContentSplash = styled.div`
  background-color: #000;
  min-height: 450px;
  @media (min-width: 769px) {
      min-height: 550px;
  }
  @media (min-width: 1024px) {
      min-height: 700px;
  }
  display: block;
`;

var content;
if (this.state.mode == "main") {
  content = <ContentSplash></ContentSplash>
} else if (this.state.mode == "about") {
  content = "";
}

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <ChaoHeader></ChaoHeader>
        <ContentContainer>
          {content}
          <Footer></Footer>
        </ContentContainer>
      </AppWrapper>
    );
  }
}

export default App;
