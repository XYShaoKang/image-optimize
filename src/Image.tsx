import React, { FC, useState } from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  position: relative;
`

const StyleImage = styled.img<{ isloading?: boolean }>`
  width: 100%;
  filter: ${({ isloading }) => (isloading ? 'blur(20px)' : 'blur(0)')};
  transition: filter ease 1.5s;
`

const Mask = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(20px);
`

interface ImageProps {
  src: string
  dec?: string
}

const Image: FC<ImageProps> = ({ src, dec }) => {
  const [loading, setLoading] = useState(true)
  const srcSet = [200, 400, 800, 1200, 1600]
    .map(size => src.replace(/([.*]*)(\.\w+?$)/, `$1-${size}$2`) + ` ${size}w`)
    .join(',')

  return (
    <Container>
      {loading && (
        <Mask
          src={src.replace(/([\d\D]*)(\.\w+?$)/, '$1-40$2')}
          alt={dec ?? ''}
        />
      )}

      <StyleImage
        srcSet={srcSet}
        alt={dec ?? src.replace(/[\d\D]*\/([\d\D]+?)\.\w+?$/, '$1')}
        style={{ width: '100%' }}
        loading="lazy"
        onLoad={() => setLoading(false)}
        isloading={loading}
      />
    </Container>
  )
}

export default Image
