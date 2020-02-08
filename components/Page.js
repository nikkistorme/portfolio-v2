import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

const theme = {
  black: '#201E1F',
  white: '#f5f5f5',
  blue: '#5871CD',
  red: '#D22B32',
  brown: '#DB9D3A',
  orange: '#FB6F3E',
  pink: '#F9ADC1',
  fontHeading: "'Raleway', sans-serif",
  fontBody: "'Frank Ruhl Libre', serif",
};

const rem = "2.5rem"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
    font-family: 'Frank Ruhl Libre', serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
    }
  }
  h1,h2,h3,h4 {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: inherit;
    line-height: normal;
    color: ${theme.white};
  }
  h1 { font-size: 3rem; }
  h2 { font-size: 2.5rem; }
  h3 { font-size: 2rem; }
`;

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: 100%;
  margin: 0 1em;
  align-self: center;
`;

const PageAboveFooter = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default class Page extends React.Component {
  render() {
    return (    
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Meta />
            <PageAboveFooter>
              <Header />
              <Inner>{this.props.children}</Inner>
            </PageAboveFooter>
            <Footer />
          </StyledPage>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}