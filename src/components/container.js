import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10rem;
`

export default ({children}) => <Container>{children}</Container>
