import React, {Component} from 'react'
import styled from 'styled-components'

const RootSize = styled.div`
  background-color: #565264;
  text-align: center;
  color: #d6cfcb;
  font-size: 1.4rem;
  padding-top: 1rem;
  grid-column: 1 / 3;
`

const Input = styled.input`
  padding: 1.4rem 1rem 0.4rem 1rem;
  font-size: 1.5rem;
  -webkit-appearance: none !important;
  outline: none;
  border: 0;
  width: 4.5rem;
  color: #a6808c;
  border-radius: 0.4rem 0 0 0.4rem;
`
const SubInput = styled.input`
  padding: 1.4rem 0.3rem 0.4rem 1rem;
  font-size: 1.5rem;
  -webkit-appearance: none !important;
  color: #ccb7ae;
  text-align: right;
  width: 2.5rem;
  border: 0;
  border-radius: 0 0.4rem 0.4rem 0;
`

const Result = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 12.5rem;
  padding-top: 6.25rem;
`

const F = styled.form`
  background-color: #ece2d0;
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 7rem 7rem;
`

const Px = styled.div`
  text-align: center;
`

const Rem = styled.div`
  text-align: center;
`

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {rootSize: '16', pixel: '16', rem: '1'}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const {rootSize, pixel} = this.state
    const {name, value} = e.target

    switch (name) {
      case 'rootSize':
        this.setState({rootSize: value, rem: pixel / value})
        break
      case 'pixel':
        this.setState({pixel: value, rem: value / rootSize})
        break
      case 'rem':
        this.setState({rem: value, pixel: rootSize * value})
        break
      default:
        console.error('Eww??')
        break
    }
  }

  render() {
    return (
      <F>
        <RootSize>
          <label>Root Size: </label>
          <Input
            type="text"
            value={this.state.rootSize}
            name="rootSize"
            onChange={this.handleChange}
          />
          <SubInput type="text" value="px" disabled />
        </RootSize>
        <Result>
          <Px>
            <Input
              type="text"
              value={this.state.pixel}
              name="pixel"
              onChange={this.handleChange}
            />
            <SubInput type="text" value="px" disabled />
          </Px>
          <Rem>
            <Input
              type="text"
              value={this.state.rem}
              name="rem"
              onChange={this.handleChange}
            />
            <SubInput type="text" value="rem" disabled />
          </Rem>
        </Result>
      </F>
    )
  }
}

export default Form
