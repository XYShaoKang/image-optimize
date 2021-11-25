import React, { FC } from 'react'
import Image from './Image'
import source from './image-source.json'

const App: FC = () => (
  <div>
    {source.map(src => (
      <Image key={src} src={src} />
    ))}
  </div>
)

export default App
