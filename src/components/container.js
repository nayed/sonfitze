import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  // width: 100%;
  // margin-left: auto;
  // margin-right: auto;
  // display: flex;
  // flex-direction: column;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10rem;
`

export default ({children}) => <Container>{children}</Container>
