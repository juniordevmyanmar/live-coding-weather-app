import { render, screen } from '@testing-library/react'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import Status from '.'

test('renders Status component', () => {
  render(<Status icon={faWind} data={30} unit="km/h" />)
  const loadingTextElement = screen.getByTestId('status')
  expect(loadingTextElement).toBeInTheDocument()
})
