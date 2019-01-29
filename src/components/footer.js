import React from 'react'
import styled from 'styled-components'

import github from '../github-logo.svg'

const Footer = styled.footer`
  background-color: #ece2d0;
  grid-column: 1 / 3;
  text-align: center;
  color: #565264;
`

const Link = styled.a`
  color: inherit;
  text-decoration: inherit;
`

const Img = styled.img`
  height: 1rem;
`

export default () => (
  <Footer>
    Made by <Link href="https://nayed.io">Nayed Saïd Ali</Link> -{' '}
    <Link href="https://github.com/nayed/sonfitze">
      <Img src={github} alt="github logo" />
    </Link>
  </Footer>
)
