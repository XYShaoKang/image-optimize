import { render, screen } from '@testing-library/react'

import App from './App'

it('App render', () => {
  render(<App />)

  const images = screen.getAllByRole('img')

  expect(images[0]).toBeInTheDocument()
})
