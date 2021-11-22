import React, { FC } from 'react'
import Image from './Image'

const imageDatas = [
  'image/beauty-woman-portrait-face.jpg',
  'image/cat-young-animal-curious-wildcat.jpg',
  'image/landscape-mountains-wilderness-panorama.jpg',
  'image/mill-black-forest-bach-water.jpg',
  'image/moon-the-fullness-of-sky-mystery.jpg',
  'image/roses-bouquet-congratulations-arrangement.jpg',
  'image/stones-rocks-pebbles-tranquil.jpg',
  'image/summerfield-woman-girl-sunset.jpg',
]

const App: FC = () => (
  <div>
    Hello World
    {imageDatas.map(src => (
      <Image key={src} src={src} />
    ))}
  </div>
)

export default App
