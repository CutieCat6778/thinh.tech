import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { Main } from "./pages/Main"

test("renders learn react link", () => {
  render(<Main />)
  const linkElement = screen.getByText(/About/i)
  expect(linkElement).toBeInTheDocument()
})
