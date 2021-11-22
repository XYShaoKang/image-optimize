import React, { FC } from 'react'
import styled from 'styled-components/macro'

const StyleImage = styled.img`
  width: 100%;
`

interface ImageProps {
  src: string
  dec?: string
}

const Image: FC<ImageProps> = ({ src, dec }) => (
  <StyleImage src={src} alt={dec ?? ''} />
)

export default Image
