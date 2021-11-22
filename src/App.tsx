import React, { FC } from 'react'
import Image from './Image'

const imageDatas = [
  'image/summerfield-woman-girl-sunset-68d4e8dc1b3a90cb96459caca793ff9b.jpg',
  'image/beauty-woman-portrait-face-d287d673fd73db9eb427f3b886b995f6.jpg',
  'image/cat-young-animal-curious-wildcat-140a90da05e87003db61ea9f4a56465e.jpg',
  'image/landscape-mountains-wilderness-panorama-234b635d4d59cb458fb612b7c80bc868.jpg',
  'image/mill-black-forest-bach-water-b35f27572e720784567abaa4746d6f0a.jpg',
  'image/moon-the-fullness-of-sky-mystery-ead55e3f37893183f6c267e8f6d632b6.jpg',
  'image/roses-bouquet-congratulations-arrangement-e24790f7a83706949d63733188d1221b.jpg',
  'image/stones-rocks-pebbles-tranquil-bbe51335624cc59fa15e47af80491aff.jpg',
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
