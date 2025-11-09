/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Home from '../page'

jest.mock("../components/Filters", () => ({
  Filters: ({ search, status, gender }: { search: string; status: string; gender: string }) => (
    <div data-testid="filters">
      component filters - search:{search}, status:{status}, gender:{gender}
    </div>
  ),
}));

jest.mock("../sections/Characters", () => ({
  Characters: ({ search, status, gender }: { search: string; status: string; gender: string }) => {
    return <div data-testid="characters">
      characters component - search:{search}, status:{status}, gender:{gender}
    </div>
  }
}))

describe("Home Page", () => {
  it("Rendering title with searchParams", async () => {
    const component = await Home({
      searchParams: Promise.resolve({
        search: "Rick",
        status: "Alive",
        gender: "Male",
      }),
    });

    const { getByText, getByTestId } = render(component);
    expect(
      getByText("Rick and Morty TekBees Test")
    ).toBeInTheDocument()
    
    expect(getByTestId("filters")).toHaveTextContent(
      "component filters - search:Rick, status:Alive, gender:Male"
    )
    expect(getByTestId("characters")).toHaveTextContent(
      "characters component - search:Rick, status:Alive, gender:Male"
    )
  })

  it("When is empty params", async () => {
    const component = await Home({
      searchParams: Promise.resolve({
        search: "",
        status: "",
        gender: "",
      }),
    });

    const { getByTestId, getByText } = render(component);

    expect(getByText("Rick and Morty TekBees Test")).toBeInTheDocument()
    
    expect(getByTestId("filters")).toHaveTextContent(
      "search:, status:, gender:"
    )
    
    expect(getByTestId("characters")).toHaveTextContent(
      "search:, status:, gender:"
    )
  })
});
