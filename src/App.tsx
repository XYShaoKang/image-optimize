import React, { FC } from 'react'
import styled, { css } from 'styled-components/macro'

const Button = styled.a<{ primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`

const App: FC = () => (
  <div>
    Hello World
    <Button>Button</Button>
  </div>
)

export default App
