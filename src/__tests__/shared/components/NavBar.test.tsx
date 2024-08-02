import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../../../shared/components";
import { render } from "../../../test-utils";

describe("Component: NavBar", () => {
  beforeEach(() => {});

  it("should render the component", () => {
    // Arrange
    const { getByText } = render(
      //Importamos MemoryRouter de react-router-dom para proporcionar el contexto del router.
      <MemoryRouter initialEntries={[""]}>
        <Navbar />
      </MemoryRouter>
    );
    // Act
    const homeLink = getByText('Catalog');
    const catalogLink = getByText('Categories');
    const cars = getByText('Cars');
    const engines = getByText('Engine Parts');

    // Assert
    expect(homeLink).toBeInTheDocument();
    expect(catalogLink).toBeInTheDocument();
    expect(cars).toBeInTheDocument();
    expect(engines).toBeInTheDocument();
  });

  it("should render the component with the correct links", () => {
    // Arrange
    const { getByText, getAllByRole } = render(
      <MemoryRouter initialEntries={[""]}>
        <Navbar />
      </MemoryRouter>
    );
    // Act
    const buttons = getAllByRole("link");
    const homeLink = getByText('Catalog');
    const catalogLink = getByText('Categories');
    const cars = getByText('Cars');
    const engines = getByText('Engine Parts');

    // Assert
    expect(homeLink).toHaveAttribute("href",'/' );
    expect(catalogLink).toHaveAttribute("href", '/categories');
    expect(cars).toHaveAttribute("href", '/cars');
    expect(engines).toHaveAttribute("href", '/engines-parts');
    expect(buttons).toHaveLength(4);
  });
});
