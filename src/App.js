import React, {Component} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import importGoogleFonts from 'import-google-fonts'

import GlobalStyles from './components/globalStyles'
import Container from './components/container'
import Form from './components/form'
import Footer from './components/footer'

const GoogleFonts = importGoogleFonts(createGlobalStyle, null, [
  'Vast Shadow',
  'Playfair Display'
])

const Top = styled.div`
  background-color: #565264;
  // padding-bottom: 1rem;
  // width: 100%;
  padding-top: 1.75rem;
  grid-column: 1 / 3;
  // grid-row: 1 / 2;
`

const Title = styled.div`
  text-align: center;
  color: #d6cfcb;
  margin: 0
  padding: 0.875rem 0;
  border-top: 0.25rem double #ccb7ae;
  border-bottom: 0.25rem double #ccb7ae;
`

const H1 = styled.h1`
  font: 2.5rem 'Vast Shadow', 'Arial Black';
  text-transform: uppercase;
`

const Description = styled.p`
  font: 1.25rem 'Playfair Display';
`

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <GoogleFonts />
        <Container>
          <Top>
            <Title>
              <H1>Sonfitze</H1>
              <Description>Font size converter</Description>
            </Title>
          </Top>
          <Form />
          <Footer />
        </Container>
      </>
    )
  }
}

export default App
