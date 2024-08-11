import { render } from "@testing-library/react-native"
import Header from "../app/components/header"

describe("Header", () => {
  test("should render the header with the correct title", () => {
    const { getByText } = render(<Header />);

    const headerElement = getByText("TodoList");

    expect(headerElement).toBeTruthy();
  })
})